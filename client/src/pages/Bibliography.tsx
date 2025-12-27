import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Header from '@/components/Header';

export default function Bibliography() {
  const transcripts = [
    {
      number: 1,
      name: 'ChatGPT',
      pdfLink: 'https://example.com/chatgpt-transcript.pdf',
      liveLink: 'https://chatgpt.com/share/694a5610-f9ec-8006-b987-c3d722017cdc',
    },
    {
      number: 2,
      name: 'Google Gemini',
      pdfLink: 'https://example.com/gemini-transcript.pdf',
      liveLink: 'https://gemini.google.com/share/684b564e6622',
    },
    {
      number: 3,
      name: 'Kimi K2 Thinking',
      pdfLink: 'https://example.com/kimi-transcript.pdf',
      liveLink: 'https://tinyurl.com/2dnfvpex',
    },
    {
      number: 4,
      name: 'DeepSeek',
      pdfLink: 'https://example.com/deepseek-transcript.pdf',
      liveLink: 'https://chat.deepseek.com/a/chat/s/e63bb760-4e3f-4459-81f2-869031a7c5d8',
    },
    {
      number: 5,
      name: 'Claude',
      pdfLink: 'https://example.com/claude-transcript.pdf',
      liveLink: 'https://claude.ai/share/48bfb9b2-d93f-418f-9ec6-58490904258f',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Bibliography & End Matter</h1>
            <p className="text-lg text-muted-foreground">
              Access to the full transcripts and live chat verification links for all five conversations.
            </p>
          </div>

          {/* Transcripts Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-8">Conversation Transcripts</h2>

            <div className="space-y-6">
              {transcripts.map((transcript) => (
                <div
                  key={transcript.number}
                  className="border border-border rounded-lg p-6 hover:bg-muted transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Conversation {transcript.number}: {transcript.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={transcript.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Download PDF
                    </a>
                    <a
                      href={transcript.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Chat
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References Section */}
          <section className="mb-12 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary mb-6">References</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-1">Saint Claire, C. (2025).</p>
                <p className="text-muted-foreground">
                  Epistemic Credibility in Digital Discourse: A Journal of LLM-Assisted Assessment.
                  <em>The Journal of Ephemeral Digital Discourse and Curated Presentation</em>, 1(1), 1-50.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Almanzor, M. (2021).</p>
                <p className="text-muted-foreground">
                  Navigating Web3 and NFT Arbitrage Post-Incarceration. Personal Communication.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Huang, J. (2023).</p>
                <p className="text-muted-foreground">
                  Remarks on AI and Economic Opportunity. Nvidia CEO Speech.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">OpenAI. (2024).</p>
                <p className="text-muted-foreground">
                  ChatGPT: Conversational AI Platform. Retrieved from https://chatgpt.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Google. (2024).</p>
                <p className="text-muted-foreground">
                  Gemini: Conversational AI Platform. Retrieved from https://gemini.google.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Anthropic. (2024).</p>
                <p className="text-muted-foreground">
                  Claude: Conversational AI Platform. Retrieved from https://claude.ai
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">DeepSeek. (2024).</p>
                <p className="text-muted-foreground">
                  DeepSeek: Conversational AI Platform. Retrieved from https://chat.deepseek.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Kimi. (2024).</p>
                <p className="text-muted-foreground">
                  Kimi K2 Thinking: Conversational AI Platform. Retrieved from https://kimi.moonshot.cn
                </p>
              </div>
            </div>
          </section>

          {/* End Matter */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary mb-6">About This Journal</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <em>Epistemic Credibility in Digital Discourse: A Journal of LLM-Assisted Assessment</em> is a 
                scholarly examination of how Large Language Models can serve as tools for recognizing and validating 
                forms of intelligence that exist outside traditional educational institutions.
              </p>

              <p>
                This journal presents five conversations between a researcher and multiple LLM platforms, exploring 
                the nature of cognitive capacity, learning velocity, and systems-level reasoning in a non-traditional learner.
              </p>

              <p>
                The work challenges conventional metrics for assessing intelligence and proposes a framework for 
                recognizing epistemic credibility based on observable cognitive patterns rather than institutional validation.
              </p>

              <p className="text-sm italic">
                Published: December 2025 | DOI: 10.1234/JECDD.2025.1.1.001
              </p>
            </div>
          </section>

          {/* Return to Home */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Return to Home
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
