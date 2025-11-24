import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Users, Award, CheckCircle2 } from "lucide-react";
import officeImage from "@assets/generated_images/professional_consultation_office_scene.png";

export default function About() {
  const missions = [
    {
      icon: Shield,
      title: "Nachhaltigkeit",
      description: "Langfristiger Werterhalt durch vorausschauende Planung und professionelle Betreuung",
    },
    {
      icon: Target,
      title: "Zuverlässigkeit",
      description: "Verbindliche Absprachen, transparente Kommunikation und termingerechte Umsetzung",
    },
    {
      icon: TrendingUp,
      title: "Wirtschaftlichkeit",
      description: "Maximale Rendite durch Kostenoptimierung und effiziente Verwaltung",
    },
    {
      icon: Users,
      title: "Persönliche Ansprechpartner",
      description: "Direkte Kommunikation mit festen Ansprechpartnern für alle Ihre Anliegen",
    },
  ];

  const advantages = [
    "Individuelle Lösungen für jede Immobilie und jeden Eigentümer",
    "Jahrzehntelange Erfahrung in der Immobilienverwaltung",
    "Klare und transparente Kommunikation auf Augenhöhe",
    "Full-Service aus einer Hand – von A bis Z",
    "Professionelles Netzwerk an qualifizierten Partnern",
    "Rechtssichere Abwicklung aller Verwaltungsprozesse",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-foreground" data-testid="text-about-headline">
            Über BAROK-IMMOBILIEN
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Ihr Partner für professionelle Immobilienbetreuung
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-philosophy-headline">
                Unsere Unternehmensphilosophie
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p data-testid="text-philosophy-paragraph-1">
                  BAROK-IMMOBILIEN kombiniert persönliche Betreuung mit professioneller Verwaltungs- und Servicekompetenz. Wir verstehen uns als verlässlicher Partner, der Immobilieneigentümer in allen Belangen unterstützt und entlastet.
                </p>
                <p data-testid="text-philosophy-paragraph-2">
                  Unser Fokus liegt auf langfristigem Werterhalt, maximaler Rendite und transparenten Abläufen. Wir arbeiten mit höchster Sorgfalt, Integrität und einem tiefen Verständnis für die Bedürfnisse unserer Kunden.
                </p>
                <p data-testid="text-philosophy-paragraph-3">
                  Durch jahrzehntelange Erfahrung, ein starkes Netzwerk und kontinuierliche Weiterbildung gewährleisten wir erstklassige Dienstleistungen in allen Bereichen der Immobilienverwaltung, Sanierung und Betreuung.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={officeImage}
                alt="Professionelle Beratung im modernen Büro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-foreground" data-testid="text-mission-headline">
            Unsere Mission
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="text-mission-description">
            Wir setzen uns täglich dafür ein, Ihre Immobilie optimal zu betreuen und Ihnen maximale Sicherheit zu geben.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-mission-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <mission.icon className="w-7 h-7 text-primary" data-testid={`icon-mission-${index}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground" data-testid={`text-mission-title-${index}`}>{mission.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-mission-description-${index}`}>{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-primary/10">
                <Award className="w-24 h-24 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-why-headline">
                Warum BAROK-IMMOBILIEN?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`item-advantage-${index}`}>
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-headline">
            Bereit für eine professionelle Immobilienbetreuung?
          </h2>
          <p className="text-lg mb-8 opacity-95" data-testid="text-cta-description">
            Kontaktieren Sie uns noch heute und lassen Sie sich unverbindlich beraten. Wir freuen uns darauf, Sie kennenzulernen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+491638435195" data-testid="link-cta-phone">
              <button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-md border border-white/20 transition-colors min-h-10" data-testid="button-cta-phone">
                +49 163 8435 195
              </button>
            </a>
            <a href="mailto:info@barok-immobilien.de" data-testid="link-cta-email">
              <button className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3 rounded-md transition-colors min-h-10" data-testid="button-cta-email">
                info@barok-immobilien.de
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
