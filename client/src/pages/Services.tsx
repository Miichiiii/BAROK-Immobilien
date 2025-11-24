import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Building2, 
  Wrench, 
  Briefcase, 
  FileText, 
  Home as HomeIcon, 
  Users,
  CheckCircle2,
  Euro,
  Clock,
  Shield
} from "lucide-react";
import renovationImage from "@assets/generated_images/renovated_luxury_apartment_interior.png";

export default function Services() {
  const serviceDetails = [
    {
      id: "mietverwaltung",
      icon: Building2,
      title: "Mietwohnungsverwaltung",
      subtitle: "Professionelle Verwaltung für maximale Rendite",
      description: "Unsere Mietwohnungsverwaltung entlastet Sie vollständig von allen administrativen Aufgaben rund um Ihre Mietobjekte. Wir sorgen für einen reibungslosen Ablauf, finanzielle Transparenz und die Wahrung Ihrer Eigentümerinteressen.",
      features: [
        "Überwachung der Zahlungseingänge und professionelles Mahnwesen",
        "Präzise Mietkontenführung mit monatlichen Reports",
        "Rechtskonforme und termingerechte Nebenkostenabrechnungen",
        "Vollständige Buchhaltung und Rechnungsprüfung",
        "Kommunikation mit Mietern, Behörden und Dienstleistern",
        "Organisation und Überwachung von Reparaturen und Instandhaltung",
        "Lückenlose Dokumentation aller Vorgänge",
        "Sicherstellung der Wirtschaftlichkeit Ihrer Immobilie",
      ],
      benefits: [
        { icon: Clock, text: "Maximale Zeitersparnis durch Komplettbetreuung" },
        { icon: Euro, text: "Finanzielle Klarheit durch transparente Abrechnungen" },
        { icon: Shield, text: "Rechtssicherheit in allen Verwaltungsprozessen" },
      ],
    },
    {
      id: "renovierung",
      icon: Wrench,
      title: "Renovierung & Sanierung",
      subtitle: "Werterhalt durch fachgerechte Modernisierung",
      description: "Von Schönheitsreparaturen bis zur energetischen Komplettsanierung – wir koordinieren alle Gewerke professionell und sorgen für eine termingerechte, hochwertige Umsetzung. Ihre Immobilie wird von uns behandelt wie unsere eigene.",
      features: [
        "Schönheitsreparaturen und Wohnungsmodernisierung",
        "Energetische Sanierung für nachhaltige Wertsteigerung",
        "Professionelle Bodenarbeiten (Parkett, Laminat, Fliesen)",
        "Hochwertige Malerarbeiten innen und außen",
        "Elektrik- und Sanitärinstallationen nach neuestem Standard",
        "Moderne Badmodernisierungen mit zeitlosem Design",
        "Koordination aller Gewerke aus einer Hand",
        "Lückenlose Qualitätskontrolle während der gesamten Bauphase",
        "Saubere Übergabe nach Fertigstellung",
      ],
      benefits: [
        { icon: CheckCircle2, text: "Alles aus einer Hand – zuverlässig und termingerecht" },
        { icon: Shield, text: "Fachgerechte Ausführung durch qualifizierte Partner" },
        { icon: Euro, text: "Transparente Kostenplanung ohne versteckte Aufschläge" },
      ],
      image: renovationImage,
    },
    {
      id: "facility",
      icon: Briefcase,
      title: "Facility Service",
      subtitle: "Rundum-Betreuung für gepflegte Immobilien",
      description: "Unser Facility Service umfasst alle Dienstleistungen, die für den Werterhalt und die Attraktivität Ihrer Immobilie wichtig sind. Von der Reinigung bis zur technischen Betreuung – wir sorgen dafür, dass alles reibungslos funktioniert.",
      features: [
        "Reinigungsservice: Treppenhäuser, Gemeinschaftsflächen, Fenster, Tiefgaragen",
        "Sonderreinigungen nach individuellen Anforderungen",
        "Hausmeisterservice: Regelmäßige Objektkontrollen und Kleinreparaturen",
        "Handwerkerkoordination für alle anfallenden Arbeiten",
        "Überwachung der technischen Anlagen (Heizung, Lüftung, Aufzug)",
        "Grünpflege und Winterdienst",
        "Gebäudereinigung mit professionellen Standards",
        "Sauberkeit als Werterhalt – gepflegte Eingangsbereiche schaffen Wohlfühlatmosphäre",
      ],
      benefits: [
        { icon: CheckCircle2, text: "Professionelle Betreuung durch erfahrene Fachkräfte" },
        { icon: Clock, text: "Schnelle Reaktionszeiten bei Störungen" },
        { icon: Shield, text: "Verlässliche Qualität durch regelmäßige Kontrollen" },
      ],
    },
    {
      id: "vertragsoptimierung",
      icon: FileText,
      title: "Vertragsoptimierung",
      subtitle: "Nachhaltige Kostenersparnis für Eigentümer",
      description: "Wir analysieren Ihre bestehenden Energie- und Versorgungsverträge und identifizieren Einsparpotenziale. Durch Anbietervergleich und Neuverhandlung sorgen wir für dauerhafte Kostenoptimierung – ohne Qualitätsverlust.",
      features: [
        "Umfassende Analyse bestehender Energie- und Versorgungsverträge",
        "Prüfung von Laufzeiten, Preisen und Vertragsbedingungen",
        "Professioneller Anbieter-Vergleich für Strom, Gas, Wasser",
        "Verhandlung besserer Konditionen mit Versorgern",
        "Koordination der Umstellung auf neue Anbieter",
        "Kommunikation mit allen Beteiligten",
        "Langfristige Betreuung und regelmäßige Überprüfung",
      ],
      benefits: [
        { icon: Euro, text: "Dauerhafte Kostenersparnis für Eigentümer und Mieter" },
        { icon: Clock, text: "Zeitersparnis durch vollständige Übernahme aller Schritte" },
        { icon: CheckCircle2, text: "Professionelle Beratung auf Basis aktueller Marktdaten" },
      ],
    },
    {
      id: "makler",
      icon: HomeIcon,
      title: "Immobilienmaklerarbeiten",
      subtitle: "Professionelle Vermietung und Verkauf",
      description: "Ob Neuvermietung oder Verkauf – wir begleiten Sie von der professionellen Aufbereitung über die Vermarktung bis zur erfolgreichen Übergabe. Mit Expertise, Marktkenntnissen und Engagement für Ihren Erfolg.",
      features: [
        "Neuvermietung mit professioneller Besichtigungsorganisation",
        "Aufbereitung aller notwendigen Unterlagen und Exposés",
        "Zielgerichtete Vermarktung über relevante Kanäle",
        "Begleitung beim Verkauf von Immobilien",
        "Beratung von Kapitalanlegern bei Investitionsentscheidungen",
        "Leerstandsmanagement zur Minimierung von Ausfallzeiten",
        "Aufwertungs- und Modernisierungsbegleitung",
        "Vollständige Betreuung bis zur Übergabe",
      ],
      benefits: [
        { icon: CheckCircle2, text: "Professionelle Vermarktung für schnelle Vermietung/Verkauf" },
        { icon: Shield, text: "Rechtssichere Abwicklung aller Verträge" },
        { icon: Euro, text: "Maximierung Ihrer Rendite durch optimale Vermarktung" },
      ],
    },
    {
      id: "haushaltsbetreuung",
      icon: Users,
      title: "Haushaltsbetreuung",
      subtitle: "Unterstützung im Alltag für Senioren",
      description: "Unsere Haushaltsbetreuung richtet sich an Senioren und Menschen, die Unterstützung im Alltag benötigen. Mit Einfühlungsvermögen, Diskretion und Zuverlässigkeit entlasten wir Sie und Ihre Angehörigen.",
      features: [
        "Aufräumen, Einkaufen und Wäschepflege",
        "Kleine Reinigungsarbeiten im Haushalt",
        "Essensvorbereitung nach individuellen Wünschen",
        "Unterstützung bei der Alltagsorganisation",
        "Begleitung zu Arztbesuchen und Behördengängen",
        "Erledigung von Besorgungen",
        "Hilfe bei Verwaltung und Kommunikation",
        "Entlastung für Angehörige durch verlässliche Betreuung",
        "Freundlicher und diskreter Service mit persönlicher Note",
      ],
      benefits: [
        { icon: Users, text: "Mehr Lebensqualität durch praktische Unterstützung" },
        { icon: Shield, text: "Vertrauensvolle und diskrete Betreuung" },
        { icon: CheckCircle2, text: "Entlastung für Angehörige und Familie" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-services-main-headline">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-services-main-description">
            Full-Service aus einer Hand – professionell, zuverlässig, persönlich
          </p>
        </div>
      </section>

      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden" data-testid={`card-service-detail-${service.id}`}>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-2" data-testid={`text-service-${service.id}-title`}>{service.title}</CardTitle>
                    <p className="text-lg text-muted-foreground" data-testid={`text-service-${service.id}-subtitle`}>{service.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {service.image && (
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid={`text-service-${service.id}-description`}>
                  {service.description}
                </p>

                <h3 className="font-semibold text-xl mb-4 text-foreground" data-testid={`text-service-${service.id}-features-headline`}>Leistungsumfang:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3" data-testid={`item-feature-${service.id}-${idx}`}>
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground" data-testid={`text-feature-${service.id}-${idx}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-xl mb-4 text-foreground" data-testid={`text-service-${service.id}-benefits-headline`}>Ihre Vorteile:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg" data-testid={`item-benefit-${service.id}-${idx}`}>
                      <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground" data-testid={`text-benefit-${service.id}-${idx}`}>{benefit.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" data-testid={`link-contact-${service.id}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" data-testid={`button-contact-${service.id}`}>
                      Jetzt anfragen
                    </Button>
                  </Link>
                  <a href="tel:+491638435195" data-testid={`link-phone-${service.id}`}>
                    <Button variant="outline" data-testid={`button-phone-${service.id}`}>
                      +49 163 8435 195
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" data-testid="text-services-cta-headline">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-lg mb-8 opacity-95" data-testid="text-services-cta-description">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir freuen uns darauf, Sie kennenzulernen.
          </p>
          <Link href="/kontakt" data-testid="link-services-cta-contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 border border-white/20" data-testid="button-services-cta-contact">
              Jetzt Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
