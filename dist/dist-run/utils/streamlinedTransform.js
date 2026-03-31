/**
 * Transforms SDK messages for streamlined output mode.
 *
 * Streamlined mode is a "distillation-resistant" output format that:
 * - Keeps text messages intact
 * - Summarizes tool calls with cumulative counts (resets when text appears)
 * - Omits thinking content
 * - Strips tool list and model info from init messages
 */
import { FILE_EDIT_TOOL_NAME } from '../../tools/FileEditTool/constants.js'361;
import { FILE_READ_TOOL_NAME } from '../../tools/FileReadTool/prompt.js'436;
import { FILE_WRITE_TOOL_NAME } from '../../tools/FileWriteTool/prompt.js'509;
import { GLOB_TOOL_NAME } from '../../tools/GlobTool/prompt.js'577;
import { GREP_TOOL_NAME } from '../../tools/GrepTool/prompt.js'640;
import { LIST_MCP_RESOURCES_TOOL_NAME } from '../../tools/ListMcpResourcesTool/prompt.js'717;
import { LSP_TOOL_NAME } from '../../tools/LSPTool/prompt.js'791;
import { NOTEBOOK_EDIT_TOOL_NAME } from '../../tools/NotebookEditTool/constants.js'862;
import { TASK_STOP_TOOL_NAME } from '../../tools/TaskStopTool/prompt.js'941;
import { WEB_SEARCH_TOOL_NAME } from '../../tools/WebSearchTool/prompt.js'1014;
import { extractTextContent } from '../../utils/messages.js'1086;
import { SHELL_TOOL_NAMES } from '../../utils/shell/shellToolUtils.js'1144;
import { capitalize } from '../../utils/stringUtils.js'1208;
/**
 * Tool categories for summarization.
 */
const SEARCH_TOOLS = [
    GREP_TOOL_NAME,
    GLOB_TOOL_NAME,
    WEB_SEARCH_TOOL_NAME,
    LSP_TOOL_NAME,
];
const READ_TOOLS = [FILE_READ_TOOL_NAME, LIST_MCP_RESOURCES_TOOL_NAME];
const WRITE_TOOLS = [
    FILE_WRITE_TOOL_NAME,
    FILE_EDIT_TOOL_NAME,
    NOTEBOOK_EDIT_TOOL_NAME,
];
const COMMAND_TOOLS = [...SHELL_TOOL_NAMES, 'Tmux', TASK_STOP_TOOL_NAME];
function categorizeToolName(toolName) {
    if (SEARCH_TOOLS.some(t => toolName.startsWith(t)))
        return 'searches';
    if (READ_TOOLS.some(t => toolName.startsWith(t)))
        return 'reads';
    if (WRITE_TOOLS.some(t => toolName.startsWith(t)))
        return 'writes';
    if (COMMAND_TOOLS.some(t => toolName.startsWith(t)))
        return 'commands';
    return 'other';
}
function createEmptyToolCounts() {
    return {
        searches: 0,
        reads: 0,
        writes: 0,
        commands: 0,
        other: 0,
    };
}
/**
 * Generate a summary text for tool counts.
 */
function getToolSummaryText(counts) {
    const parts = [];
    // Use similar phrasing to collapseReadSearch.ts
    if (counts.searches > 0) {
        parts.push(`searched ${counts.searches} ${counts.searches === 1 ? 'pattern' : 'patterns'}`);
    }
    if (counts.reads > 0) {
        parts.push(`read ${counts.reads} ${counts.reads === 1 ? 'file' : 'files'}`);
    }
    if (counts.writes > 0) {
        parts.push(`wrote ${counts.writes} ${counts.writes === 1 ? 'file' : 'files'}`);
    }
    if (counts.commands > 0) {
        parts.push(`ran ${counts.commands} ${counts.commands === 1 ? 'command' : 'commands'}`);
    }
    if (counts.other > 0) {
        parts.push(`${counts.other} other ${counts.other === 1 ? 'tool' : 'tools'}`);
    }
    if (parts.length === 0) {
        return undefined;
    }
    return capitalize(parts.join(', '));
}
/**
 * Count tool uses in an assistant message and add to existing counts.
 */
function accumulateToolUses(message, counts) {
    const content = message.message.content;
    if (!Array.isArray(content)) {
        return;
    }
    for (const block of content) {
        if (block.type === 'tool_use' && 'name' in block) {
            const category = categorizeToolName(block.name);
            counts[category]++;
        }
    }
}
/**
 * Create a stateful transformer that accumulates tool counts between text messages.
 * Tool counts reset when a message with text content is encountered.
 */
export function createStreamlinedTransformer() {
    let cumulativeCounts = createEmptyToolCounts();
    return function transformToStreamlined(message) {
        switch (message.type) {
            case 'assistant': {
                const content = message.message.content;
                const text = Array.isArray(content)
                    ? extractTextContent(content, '\n').trim()
                    : '';
                // Accumulate tool counts from this message
                accumulateToolUses(message, cumulativeCounts);
                if (text.length > 0) {
                    // Text message: emit text only, reset counts
                    cumulativeCounts = createEmptyToolCounts();
                    return {
                        type: 'streamlined_text',
                        text,
                        session_id: message.session_id,
                        uuid: message.uuid,
                    };
                }
                // Tool-only message: emit cumulative tool summary
                const toolSummary = getToolSummaryText(cumulativeCounts);
                if (!toolSummary) {
                    return null;
                }
                return {
                    type: 'streamlined_tool_use_summary',
                    tool_summary: toolSummary,
                    session_id: message.session_id,
                    uuid: message.uuid,
                };
            }
            case 'result':
                // Keep result messages as-is (they have structured_output, permission_denials)
                return message;
            case 'system':
            case 'user':
            case 'stream_event':
            case 'tool_progress':
            case 'auth_status':
            case 'rate_limit_event':
            case 'control_response':
            case 'control_request':
            case 'control_cancel_request':
            case 'keep_alive':
                return null;
            default:
                return null;
        }
    };
}
/**
 * Check if a message should be included in streamlined output.
 * Useful for filtering before transformation.
 */
export function shouldIncludeInStreamlined(message) {
    return message.type === 'assistant' || message.type === 'result';
}
