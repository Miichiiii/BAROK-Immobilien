import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-impressum-headline">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Anbieter</h3>
                <p>BAROK-IMMOBILIEN</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Kontakt</h3>
                <p>Telefon: +49 163 8435 195</p>
                <p>E-Mail: info@barok-immobilien.de</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>BAROK-IMMOBILIEN</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Haftungsausschluss</h3>
                <h4 className="font-semibold text-foreground mt-4 mb-2">Haftung für Inhalte</h4>
                <p className="leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h4 className="font-semibold text-foreground mt-4 mb-2">Haftung für Links</h4>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h4 className="font-semibold text-foreground mt-4 mb-2">Urheberrecht</h4>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
