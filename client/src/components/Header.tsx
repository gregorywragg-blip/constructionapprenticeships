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
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-home">
            <img src={ctwLogoUrl} alt="CTWI Logo" className="h-8 w-auto" />
            <span className="font-bold text-base">The DC/MD Union Trades Pathway</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  size="sm"
                  className="text-sm"
                  data-testid={`link-${link.label.toLowerCase().replace(/ /g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/express-interest">
              <Button variant="default" size="sm" className="text-sm" data-testid="button-express-interest">
                Express Interest
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-sm"
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
                  variant="default"
                  size="sm"
                  className="w-full mt-2 text-sm"
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
