import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface TranscriptOverviewProps {
  transcriptNumber: number;
  llmName: string;
  epigraph: string;
  description: string;
  nextLink: string;
}

export default function TranscriptOverview({
  transcriptNumber,
  llmName,
  epigraph,
  description,
  nextLink,
}: TranscriptOverviewProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Conversation {transcriptNumber}
        </h2>
        <p className="text-xl text-secondary font-semibold mb-6">{llmName}</p>
      </div>

      {/* Epigraph */}
      <div className="mb-12 border-l-4 border-secondary pl-6 py-4 bg-muted rounded-r-lg">
        <blockquote className="text-lg italic text-foreground leading-relaxed">
          "{epigraph}"
        </blockquote>
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-lg leading-relaxed text-foreground">{description}</p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link href={nextLink}>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-semibold"
          >
            View Transcript
          </Button>
        </Link>
      </div>
    </div>
  );
}
