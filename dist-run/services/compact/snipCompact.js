export function isSnipMarkerMessage(_message) {
    return false;
}
export function isSnipRuntimeEnabled() {
    return false;
}
export function shouldNudgeForSnips(_messages) {
    return false;
}
export function snipCompactIfNeeded(messages) {
    return {
        messages,
        tokensFreed: 0,
    };
}
