import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExpressInterest() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Express Your Interest</h1>
            <p className="text-xl text-muted-foreground">
              Complete this form to express your interest in DC & Maryland construction apprenticeship programs
            </p>
          </div>

          <div className="bg-background rounded-lg border border-border overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSen_jPquw9Ok0kx4ws8w-0kRlEHThSz7gyg6gIYFp_DSXQ-HA/viewform?embedded=true" 
              width="100%" 
              height="4377" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Express Interest Form"
              data-testid="iframe-express-interest-form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
