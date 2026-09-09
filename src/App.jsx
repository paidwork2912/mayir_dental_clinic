import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Doctors from "./components/Doctors";
import Credentials from "./components/Credentials";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import { seo } from "./data/siteData";
import dentalLogo from "./assets/logo.png";

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: seo.siteName,
    alternateName: seo.alternateName,
    url: seo.url,
    image: seo.image,
    description: seo.description,
    telephone: seo.phone,
    email: seo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: seo.address.street,
      addressLocality: seo.address.city,
      addressRegion: seo.address.region,
      postalCode: seo.address.postalCode,
      addressCountry: seo.address.country,
    },
    openingHours: seo.hours,
    areaServed: "Vikhroli East, Mumbai",
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" href={dentalLogo} type="image/png" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Doctors />
        <Credentials />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Floating appointment booking */}
      <AppointmentModal />
    </>
  );
}

export default App;