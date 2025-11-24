import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-20">
      <div className="border-t border-[#C9A86A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-[#C9A86A]">BAROK-IMMOBILIEN</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professionelle Immobilienverwaltung, Sanierung & Rundum-Service für Eigentümer, Vermieter und Investoren.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#C9A86A]">Kontakt</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Mobil: <a href="tel:+491638435195" className="hover:text-[#C9A86A] transition-colors" data-testid="link-footer-phone">+49 163 8435 195</a></p>
                <p>E-Mail: <a href="mailto:info@barok-immobilien.de" className="hover:text-[#C9A86A] transition-colors" data-testid="link-footer-email">info@barok-immobilien.de</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-[#C9A86A]">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" data-testid="link-footer-impressum">
                  <div className="text-sm text-gray-300 hover:text-[#C9A86A] transition-colors cursor-pointer">
                    Impressum
                  </div>
                </Link>
                <Link href="/datenschutz" data-testid="link-footer-datenschutz">
                  <div className="text-sm text-gray-300 hover:text-[#C9A86A] transition-colors cursor-pointer">
                    Datenschutz
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} BAROK-IMMOBILIEN. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
