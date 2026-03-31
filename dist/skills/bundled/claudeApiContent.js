// The original bundle inlines markdown assets via Bun's text loader.
// Those source assets are missing from this snapshot, so keep the skill
// loadable with placeholders instead of failing at startup.
export const SKILL_MODEL_VARS = {
    OPUS_ID: 'claude-opus-4-6',
    OPUS_NAME: 'Claude Opus 4.6',
    SONNET_ID: 'claude-sonnet-4-6',
    SONNET_NAME: 'Claude Sonnet 4.6',
    HAIKU_ID: 'claude-haiku-4-5',
    HAIKU_NAME: 'Claude Haiku 4.5',
    PREV_SONNET_ID: 'claude-sonnet-4-5',
};
export const SKILL_PROMPT = 'Claude API skill content is unavailable in this reconstructed snapshot.';
export const SKILL_FILES = {};
