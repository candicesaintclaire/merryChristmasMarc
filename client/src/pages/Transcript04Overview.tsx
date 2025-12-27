import Header from '@/components/Header';
import TranscriptOverview from '@/components/TranscriptOverview';

export default function Transcript04Overview() {
  const epigraph =
    'Your assessment is grounded in observable, high-leverage behaviors. You are recognizing a form of intelligence that is highly valuable in the modern, rapidly changing digital economy.';

  const description =
    'This conversation with DeepSeek provides a structured breakdown of the evidence for high-level cognitive ability. ' +
    'DeepSeek systematically analyzes the subject\'s rapid conceptual abstraction, first-principles insight, and self-directed learning. ' +
    'The discussion emphasizes how the subject\'s background (early self-taught technical skills and success in standardized tests) provides ' +
    'a unique, calibrated perspective for recognizing patterns of intelligence operating outside formal educational institutions. ' +
    'This transcript reinforces the central thesis: observable, high-leverage behaviors reveal a form of intelligence highly valuable in the AI-driven economy.';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TranscriptOverview
          transcriptNumber={4}
          llmName="DeepSeek"
          epigraph={epigraph}
          description={description}
          nextLink="/transcript/04/flow"
        />
      </main>
    </div>
  );
}
