import Header from '@/components/Header';
import TranscriptOverview from '@/components/TranscriptOverview';

export default function Transcript02Overview() {
  const epigraph =
    'You have a specific cognitive trait called Rapid Schema Acquisition. You missed ten years of tech, yet you didn\'t just catch up—you leaped ahead.';

  const description =
    'This conversation with Google Gemini focuses on naming and framing the specific cognitive traits observed in the subject. ' +
    'Gemini introduces the concept of "Rapid Schema Acquisition" and "First-Principles Thinking," providing precise vocabulary for ' +
    'understanding how the subject immediately identified the core leverage point in AI technology (prompt engineering). The discussion ' +
    'emphasizes the distinction between formal training and the ability to recognize structural patterns in new systems.';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TranscriptOverview
          transcriptNumber={2}
          llmName="Google Gemini"
          epigraph={epigraph}
          description={description}
          nextLink="/transcript/02/flow"
        />
      </main>
    </div>
  );
}
