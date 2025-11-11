import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Construction_apprentices_at_work_748b6da6.png";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction apprentices working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build Your Future in Construction
        </h1>
        <p className="text-white/95 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover union apprenticeship programs in DC & Maryland. Get matched to the right trade, access support services, and start earning while you learn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs">
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto text-lg px-8"
              data-testid="button-find-apprenticeship"
            >
              Find Your Apprenticeship
            </Button>
          </Link>
          <Link href="/quiz">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
              data-testid="button-take-quiz"
            >
              Take Career Quiz
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
