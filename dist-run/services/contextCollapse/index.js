const stats = {
    collapsedSpans: 0,
    collapsedMessages: 0,
    stagedSpans: 0,
    health: {
        totalErrors: 0,
        totalEmptySpawns: 0,
        totalSpawns: 0,
        emptySpawnWarningEmitted: false,
    },
};
const listeners = new Set();
function emit() {
    for (const listener of listeners) {
        listener();
    }
}
export async function applyCollapsesIfNeeded(messages) {
    return { messages };
}
export function getStats() {
    return stats;
}
export function initContextCollapse() { }
export function isContextCollapseEnabled() {
    return false;
}
export function isWithheldPromptTooLong(_messages) {
    return false;
}
export function recoverFromOverflow(messages) {
    return messages;
}
export function resetContextCollapse() {
    stats.collapsedSpans = 0;
    stats.collapsedMessages = 0;
    stats.stagedSpans = 0;
    stats.health.totalErrors = 0;
    stats.health.totalEmptySpawns = 0;
    stats.health.totalSpawns = 0;
    stats.health.emptySpawnWarningEmitted = false;
    delete stats.health.lastError;
    emit();
}
export function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}
