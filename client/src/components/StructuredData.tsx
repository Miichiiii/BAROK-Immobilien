export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "name": "BAROK-IMMOBILIEN",
    "description": "Professionelle Immobilienverwaltung, Renovierung, Sanierung, Facility Services, Vertragsoptimierung und Haushaltsbetreuung für Eigentümer, Vermieter und Investoren.",
    "telephone": "+49-163-8435195",
    "email": "info@barok-immobilien.de",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "serviceType": [
      "Mietwohnungsverwaltung",
      "Immobilienverwaltung",
      "Renovierung",
      "Sanierung",
      "Facility Service",
      "Hausmeisterservice",
      "Vertragsoptimierung",
      "Immobilienmakler",
      "Haushaltsbetreuung"
    ],
    "knowsAbout": [
      "Immobilienverwaltung",
      "Hausverwaltung",
      "Mietverwaltung",
      "Facility Management",
      "Objektbetreuung",
      "Immobilienservice",
      "Wohnungsmodernisierung",
      "Gebäudemanagement"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BAROK-IMMOBILIEN",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "logo": typeof window !== 'undefined' ? `${window.location.origin}/favicon.png` : '',
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-163-8435195",
      "contactType": "customer service",
      "email": "info@barok-immobilien.de",
      "availableLanguage": "German"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
