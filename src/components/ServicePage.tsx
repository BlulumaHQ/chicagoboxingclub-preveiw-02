import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface ServicePageProps {
  title: string;
  metaTitle?: string;
  heroImage: string;
  intro: string;
  content: string[];
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  relatedPages?: { label: string; path: string }[];
}

const ServicePage = ({
  title,
  heroImage,
  intro,
  content,
  features,
  ctaText = "Get Started Today",
  ctaLink = "/contactus",
  relatedPages,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative container-site py-20">
          <div className="max-w-2xl">
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Chicago Boxing Club</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">{title}</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-md transition-colors text-center">
                {ctaText}
              </Link>
              <a href="tel:312-450-7850" className="border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-md transition-colors text-center flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-darker section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            {content.map((p, i) => (
              <p key={i} className="text-white/60 leading-relaxed mb-6">{p}</p>
            ))}

            {features && features.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-extrabold text-white mb-6">What to Expect</h2>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Train?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Contact us today to learn more about our programs and find the right Chicago fight gym for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactus" className="bg-white text-primary font-bold px-8 py-4 rounded-md hover:bg-white/90 transition-colors">
              Contact Us
            </Link>
            <Link to="/chicagoboxingclubcoupons" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-md hover:border-white transition-colors">
              Free Class Coupons
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <section className="section-dark section-padding">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-white text-center mb-10">Explore More Programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link key={p.path} to={p.path} className="flex items-center justify-between bg-surface-alt hover:bg-surface-alt/80 rounded-lg px-6 py-4 text-white font-bold text-sm transition-colors">
                  {p.label} <ChevronRight className="w-5 h-5 text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default ServicePage;
