import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 py-12">
          {/* Journal Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Epistemic Credibility in Digital Discourse
            </h1>
            <h2 className="text-2xl font-semibold text-secondary mb-8">
              A Journal of LLM-Assisted Assessment
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              Analyzing Latent Cognitive Capacity Through Conversational AI
            </p>
          </div>

          {/* Metadata */}
          <div className="border-t border-b border-border py-6 mb-8 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">Volume:</span>
              <span>1, Issue 1 (December 2025)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">DOI:</span>
              <span>10.1234/JECDD.2025.1.1.001</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Author:</span>
              <span>C. Saint Claire</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Affiliation:</span>
              <span>Independent Researcher, Digital Epistemology</span>
            </div>
          </div>

          {/* Abstract */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Abstract</h3>
            <p className="text-lg leading-relaxed mb-4">
              The following study presents a novel methodology for assessing latent cognitive capacity in 
              non-traditional learners by analyzing conversational data generated through Large Language Models (LLMs). 
              Utilizing five distinct chat transcripts between a human user and various LLM platforms (ChatGPT, Gemini, 
              Kimi K2 Thinking, DeepSeek, and Claude), this paper examines the structural recognition of high-velocity 
              learning and systems-level reasoning in a subject with a non-academic background and a significant 
              institutional gap.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The analysis focuses on the subject's ability to rapidly acquire complex, abstract systems 
              (e.g., NFT arbitrage) and immediately identify the core leverage points of new technologies 
              (e.g., prompt engineering for AI success). The findings suggest that LLM-assisted discourse can serve 
              as a powerful, non-biased instrument for establishing the epistemic credibility of uncredentialed expertise, 
              offering a framework for recognizing intelligence expressed through action rather than formal educational 
              institutions.
            </p>
          </section>

          {/* Keywords */}
          <section className="mb-12">
            <h4 className="text-lg font-bold text-primary mb-4">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Fluid Intelligence',
                'Systems Thinking',
                'Rapid Schema Acquisition',
                'Pre-Credentialed Cognition',
                'Large Language Models (LLMs)',
                'Epistemic Credibility',
                'Transfer Learning',
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Introduction</h3>
            <p className="text-lg leading-relaxed mb-4">
              Intelligence is often measured through formal credentials, standardized test scores, and academic 
              achievement. However, this narrow lens frequently fails to capture the dynamic, adaptive intelligence 
              that emerges in uncredentialed, self-directed learners—particularly those operating outside traditional 
              educational institutions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              This journal presents five conversations between a researcher and multiple Large Language Models, 
              exploring the nature of cognitive capacity, learning velocity, and systems-level reasoning. The transcripts 
              demonstrate how LLMs can serve as powerful tools for articulating and validating forms of intelligence that 
              conventional metrics overlook.
            </p>
            <p className="text-lg leading-relaxed">
              By examining these conversations, we establish a framework for recognizing epistemic credibility—the 
              legitimacy of knowledge and reasoning ability—based on observable cognitive patterns rather than 
              institutional validation.
            </p>
          </section>

          {/* Call to Action */}
          <div className="bg-muted rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Begin Reading</h3>
            <p className="text-muted-foreground mb-6">
              Explore the five conversations that form the foundation of this analysis.
            </p>
            <Link href="/transcript/01/overview">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Begin Reading
              </Button>
            </Link>
          </div>

          {/* Footnotes */}
          <section className="border-t border-border pt-8 text-sm text-muted-foreground">
            <h4 className="font-semibold text-foreground mb-4">References & Footnotes</h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>The original working title was "The Journal of Ephemeral Digital Discourse and Curated Presentation."</li>
              <li>Nvidia CEO Jensen Huang on the AI-era millionaire phenomenon.</li>
              <li>The concept of "pre-institutional intelligence" as discussed in the ChatGPT transcript.</li>
              <li>C. Saint Claire, "Early Technical Aptitude and Calibration in Cognitive Assessment," Unpublished Manuscript, 2025.</li>
              <li>M. Almanzor, "Navigating Web3 and NFT Arbitrage Post-Incarceration," Personal Communication, 2021.</li>
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
