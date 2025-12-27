import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import ConversationFlow from '@/components/ConversationFlow';
import { Turn } from '@/hooks/usePacedReading';

export default function Transcript01Flow() {
  const [, setLocation] = useLocation();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await fetch('/data/transcript_01.json');
        if (!response.ok) throw new Error('Failed to load transcript');
        const data = await response.json();
        setTurns(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTranscript();
  }, []);

  const handleComplete = () => {
    setLocation('/transcript/02/overview');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading transcript...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-destructive">Error: {error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ConversationFlow
          turns={turns}
          transcriptTitle="ChatGPT Conversation"
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
}
