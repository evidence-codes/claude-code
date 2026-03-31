import { useContext } from 'react';
import { TerminalSizeContext, } from '../ink/components/TerminalSizeContext.js';
export function useTerminalSize() {
    const size = useContext(TerminalSizeContext);
    if (!size) {
        throw new Error('useTerminalSize must be used within an Ink App component');
    }
    return size;
}
