import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Wrench, Briefcase, FileText, Home as HomeIcon, Users } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_villa_at_golden_hour.png";

export default function Home() {
  const values = [
    {
      icon: Users,
      title: "Vertrauen & Partnerschaft",
      description: "Eine solide Basis für nachhaltige Immobilienbetreuung.",
    },
    {
      icon: Briefcase,
      title: "Kompetenz & Erfahrung",
      description: "Fachwissen für langfristigen Werterhalt.",
    },
    {
      icon: Building2,
      title: "Qualität & Service",
      description: "Höchste Standards für Eigentümer und Mieter.",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Mietwohnungsverwaltung",
      description: "Professionelle Verwaltung Ihrer Mietobjekte",
      href: "/leistungen#mietverwaltung",
    },
    {
      icon: Wrench,
      title: "Renovierung & Sanierung",
      description: "Modernisierung und Werterhalt Ihrer Immobilie",
      href: "/leistungen#renovierung",
    },
    {
      icon: Briefcase,
      title: "Facility Service",
      description: "Hausmeister- und Reinigungsservice",
      href: "/leistungen#facility",
    },
    {
      icon: FileText,
      title: "Vertragsoptimierung",
      description: "Kostenoptimierung durch Vertragsanalyse",
      href: "/leistungen#vertragsoptimierung",
    },
    {
      icon: HomeIcon,
      title: "Immobilienmaklerarbeiten",
      description: "Vermietung und Verkauf Ihrer Immobilie",
      href: "/leistungen#makler",
    },
    {
      icon: Users,
      title: "Haushaltsbetreuung",
      description: "Unterstützung im Alltag für Senioren",
      href: "/leistungen#haushaltsbetreuung",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxuriöse moderne Villa bei Sonnenuntergang"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-headline">
            BAROK-IMMOBILIEN – Räume mit Zukunft
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subheadline">
            Professionelle Immobilienverwaltung, Sanierung & Rundum-Service für Eigentümer, Vermieter und Investoren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" data-testid="link-hero-contact">
              <Button
                size="lg"
                className="bg-[#C9A86A] hover:bg-[#B89860] text-white font-semibold px-8 border border-[#B89860]"
                data-testid="button-hero-contact"
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </Link>
            <Link href="/leistungen" data-testid="link-hero-services">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-semibold px-8"
                data-testid="button-hero-services"
              >
                Unsere Leistungen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-intro-headline">
            Ihr Partner für professionelle Immobilienbetreuung
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-intro-description-1">
            BAROK steht für professionelle und persönliche Immobilienbetreuung mit Fokus auf Werterhalt, Effizienz und zuverlässige Rundum-Services.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description-2">
            Wir entlasten Eigentümer in allen Bereichen – von Mietverwaltung bis Komplettsanierung. Mit jahrzehntelanger Erfahrung und höchster Kompetenz kümmern wir uns um Ihre Immobilie – als wäre es unsere eigene.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-values-headline">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="w-8 h-8 text-primary" data-testid={`icon-value-${index}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-services-headline">
            Unsere Leistungen
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-services-description">
            Full-Service aus einer Hand – Wir bieten Ihnen umfassende Betreuung in allen Bereichen der Immobilienverwaltung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href} data-testid={`link-service-${index}`}>
                <Card className="h-full hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid={`card-service-${index}`}>
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mb-4">
                      <service.icon className="w-6 h-6 text-primary" data-testid={`icon-service-${index}`} />
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-2 text-foreground" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-service-description-${index}`}>{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" data-testid="text-usp-headline">
            Wir kümmern uns um Ihre Immobilie – als wäre es unsere eigene
          </h2>
          <p className="text-lg mb-8 opacity-95" data-testid="text-usp-description">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Link href="/kontakt" data-testid="link-usp-contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 border border-white/20"
              data-testid="button-usp-contact"
            >
              Jetzt anfragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
