import Header from '@/components/Header';
import TranscriptOverview from '@/components/TranscriptOverview';

export default function Transcript01Overview() {
  const epigraph =
    'What you are describing are markers of fluid intelligence and adaptive learning, not credentialed or formal intelligence.';

  const description =
    'In this first conversation with ChatGPT, the user explores the nature of intelligence and cognitive capacity in a non-traditional learner. ' +
    'The discussion centers on the distinction between formal education and latent cognitive ability, examining how systems-level reasoning and ' +
    'rapid schema acquisition manifest in someone with a non-academic background. ChatGPT provides a comprehensive framework for understanding ' +
    'fluid intelligence, transfer learning, and the role of calibration in recognizing uncredentialed expertise.';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TranscriptOverview
          transcriptNumber={1}
          llmName="ChatGPT"
          epigraph={epigraph}
          description={description}
          nextLink="/transcript/01/flow"
        />
      </main>
    </div>
  );
}
