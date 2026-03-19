import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";

const CouponsPage = () => (
  <Layout>
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Free Boxing Class Coupons" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>
      <div className="relative container-site py-20">
        <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Special Offer</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Free Boxing Class Coupons</h1>
        <p className="text-lg text-white/70 max-w-xl">Get started with a free class at Chicago's serious fight training gyms.</p>
      </div>
    </section>

    <section className="section-darker section-padding">
      <div className="container-site max-w-3xl mx-auto text-center">
        <div className="bg-surface-alt border border-white/10 rounded-lg p-10 mb-10">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Limited Time Offer</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">Try a Free Boxing Class</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Experience the training that produced four-time Gold Glove champions. Contact us to redeem your free class coupon and find your serious Chicago fight gym.
          </p>
          <Link to="/contactus" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-4 rounded-md transition-colors">
            Claim Your Free Class
          </Link>
        </div>
        <p className="text-white/40 text-sm">Contact us at 312-450-7850 or info@chicagoboxingclub.com to redeem your coupon.</p>
      </div>
    </section>

    <div className="md:hidden h-20" />
  </Layout>
);

export default CouponsPage;
