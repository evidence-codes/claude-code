let active = false;
let paused = false;
let contextBlocked = false;
let nextTickAt = null;
const listeners = new Set();
function emit() {
    for (const listener of listeners) {
        listener();
    }
}
export function activateProactive(_source) {
    active = true;
    paused = false;
    nextTickAt = Date.now() + 60_000;
    emit();
}
export function deactivateProactive() {
    active = false;
    paused = false;
    nextTickAt = null;
    emit();
}
export function getNextTickAt() {
    return nextTickAt;
}
export function isProactiveActive() {
    return active && !contextBlocked;
}
export function isProactivePaused() {
    return paused;
}
export function pauseProactive() {
    paused = true;
    emit();
}
export function resumeProactive() {
    paused = false;
    emit();
}
export function setContextBlocked(blocked) {
    contextBlocked = blocked;
    emit();
}
export function subscribeToProactiveChanges(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}
