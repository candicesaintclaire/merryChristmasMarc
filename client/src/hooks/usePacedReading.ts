import { useState, useCallback } from 'react';

export interface Turn {
  speaker: string;
  messages: string[];
}

export interface PacedReadingState {
  currentTurnIndex: number;
  isComplete: boolean;
}

/**
 * Hook to manage paced reading state for conversation flows.
 * Handles revealing messages one turn at a time.
 */
export function usePacedReading(turns: Turn[]) {
  const [state, setState] = useState<PacedReadingState>({
    currentTurnIndex: -1, // Start before first turn
    isComplete: false,
  });
  
  const getVisibleTurns = useCallback(() => {
    return turns.slice(0, state.currentTurnIndex + 1);
  }, [turns, state.currentTurnIndex]);
  
  const getButtonLabel = useCallback(() => {
    if (state.currentTurnIndex === -1) {
      // First button - revealing first response
      return 'Read the response';
    } else if (state.isComplete) {
      return 'Start the next conversation';
    } else {
      // Check if the next turn is from the user or LLM
      const nextTurn = turns[state.currentTurnIndex + 1];
      if (nextTurn && nextTurn.speaker.toLowerCase() === 'user') {
        return 'Read next message';
      } else {
        return 'Read the response';
      }
    }
  }, [state.currentTurnIndex, state.isComplete, turns]);
  
  const revealNext = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentTurnIndex + 1;
      const isNowComplete = nextIndex >= turns.length - 1;
      return {
        currentTurnIndex: nextIndex,
        isComplete: isNowComplete,
      };
    });
  }, [turns.length]);
  
  const canRevealMore = state.currentTurnIndex < turns.length - 1;
  
  return {
    state,
    getVisibleTurns,
    getButtonLabel,
    revealNext,
    canRevealMore,
  };
}
