import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ctwLogoUrl from "@assets/CTWI-logo_1763155720403.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/programs", label: "Apprenticeships" },
    { href: "/quiz", label: "Career Quiz" },
    { href: "/raising-the-bar", label: "Raising the Bar Program" },
    { href: "/mc3", label: "MC3 Info" },
    { href: "/resources-guides", label: "Resources & Guides" },
    { href: "/math", label: "Math Practice" },
    { href: "/resources", label: "Supportive Services" },
    { href: "/bf-dc", label: "BF-DC" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between min-h-16 py-2 gap-4">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2 min-w-0" data-testid="link-home">
            <img src={ctwLogoUrl} alt="CTWI Logo" className="h-8 w-auto flex-shrink-0" />
            <span className="font-bold text-sm whitespace-nowrap text-primary-foreground hidden md:inline">DC/MD Union Trades Pathway</span>
            <span className="font-bold text-sm text-primary-foreground md:hidden leading-tight">DC/MD Union Trades Pathway</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-center flex-1 max-w-2xl">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  size="sm"
                  className="text-base h-auto py-2 px-3 whitespace-normal text-center leading-tight min-h-[38px] !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground data-[active=true]:bg-primary-foreground/20"
                  data-testid={`link-${link.label.toLowerCase().replace(/ /g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <Link href="/express-interest">
              <Button variant="outline" size="sm" className="text-base h-auto py-2 px-4 border-primary-foreground !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground" data-testid="button-express-interest">
                Express Interest
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden flex-shrink-0 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-${link.label.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/express-interest">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 text-sm border-primary-foreground !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-button-express-interest"
                >
                  Express Interest
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
