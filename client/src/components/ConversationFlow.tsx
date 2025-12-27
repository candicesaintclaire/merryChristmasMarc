import { usePacedReading, Turn } from '@/hooks/usePacedReading';
import { Button } from '@/components/ui/button';

interface ConversationFlowProps {
  turns: Turn[];
  transcriptTitle: string;
  onComplete?: () => void;
}

export default function ConversationFlow({
  turns,
  transcriptTitle,
  onComplete,
}: ConversationFlowProps) {
  const { state, getVisibleTurns, getButtonLabel, revealNext, canRevealMore } =
    usePacedReading(turns);

  const visibleTurns = getVisibleTurns();
  const buttonLabel = getButtonLabel();

  const handleButtonClick = () => {
    if (state.isComplete) {
      onComplete?.();
    } else {
      revealNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Transcript Title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-2">{transcriptTitle}</h2>
        <p className="text-muted-foreground italic">
          Click the button below to reveal the conversation at your own pace.
        </p>
      </div>

      {/* Conversation Container */}
      <div className="space-y-6 mb-8">
        {visibleTurns.map((turn, index) => (
          <div key={index} className="animate-fadeIn">
            <div className="mb-2">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
                {turn.speaker}
              </span>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              {turn.messages.map((message, msgIndex) => (
                <p key={msgIndex} className="text-foreground mb-4 last:mb-0 whitespace-pre-wrap">
                  {message}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pacing Button */}
      <div className="flex justify-center mt-12">
        <Button
          onClick={handleButtonClick}
          size="lg"
          className={`px-8 py-3 text-lg font-semibold transition-all ${
            state.isComplete
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 w-full'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
