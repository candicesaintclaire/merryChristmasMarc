import Header from '@/components/Header';
import TranscriptOverview from '@/components/TranscriptOverview';

export default function Transcript03Overview() {
  const epigraph =
    'His pattern of rapid conceptual mastery, self-directed learning, and intuitive system navigation strongly suggests gifted-level intelligence.';

  const description =
    'In this conversation with Kimi K2 Thinking, the analysis deepens with a focus on the cognitive indicators of gifted intelligence. ' +
    'Kimi explores the subject\'s ability to rapidly acquire schemas, engage in systems-level reasoning, and demonstrate first-principles insight. ' +
    'The conversation emphasizes how constraint-resilient learning (despite a decade-long institutional gap) reveals latent cognitive capacity. ' +
    'This transcript validates the assessment that traditional metrics for giftedness often fail to capture practical and adaptive intelligence.';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TranscriptOverview
          transcriptNumber={3}
          llmName="Kimi K2 Thinking"
          epigraph={epigraph}
          description={description}
          nextLink="/transcript/03/flow"
        />
      </main>
    </div>
  );
}
