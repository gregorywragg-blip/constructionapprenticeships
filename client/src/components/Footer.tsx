import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Raising the Bar</h3>
            <p className="text-sm text-muted-foreground">
              Building careers in construction through apprenticeship programs in the DC & Maryland area.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground">
                  Apprenticeship Programs
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-muted-foreground hover:text-foreground">
                  Career Quiz
                </Link>
              </li>
              <li>
                <Link href="/mc3" className="text-muted-foreground hover:text-foreground">
                  MC3 Training
                </Link>
              </li>
              <li>
                <Link href="/math" className="text-muted-foreground hover:text-foreground">
                  Math Practice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Support Services
                </Link>
              </li>
              <li>
                <a href="tel:211" className="text-muted-foreground hover:text-foreground">
                  Call 2-1-1 for Help
                </a>
              </li>
              <li>
                <a href="https://nabtu.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  NABTU
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">
              For program information and enrollment support
            </p>
            <p className="text-sm text-muted-foreground">
              Call: <a href="tel:211" className="text-primary hover:underline">2-1-1</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Raising the Bar. Supporting Construction Apprenticeships in DC & Maryland.</p>
        </div>
      </div>
    </footer>
  );
}
