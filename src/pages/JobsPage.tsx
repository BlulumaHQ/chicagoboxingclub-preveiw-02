import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";

const JobsPage = () => (
  <Layout>
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Boxing Job Opportunities" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>
      <div className="relative container-site py-20">
        <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Careers</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Boxing and Martial Arts Job Opportunities</h1>
        <p className="text-lg text-white/70 max-w-xl">Career opportunities in Chicago's boxing and martial arts community.</p>
      </div>
    </section>

    <section className="section-darker section-padding">
      <div className="container-site max-w-3xl mx-auto">
        <p className="text-white/60 leading-relaxed mb-6">
          Chicago Boxing Club serves as an information resource for those seeking job opportunities in the boxing and martial arts industry in the Chicago area.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          Whether you're an experienced boxing coach, martial arts instructor, or fitness professional looking to work in Chicago's fight training community, we can help connect you with opportunities.
        </p>
        <p className="text-white/60 leading-relaxed mb-10">
          Contact us for more information about current opportunities in Chicago's boxing and martial arts community.
        </p>
        <Link to="/contactus" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-md transition-colors inline-block">
          Contact Us About Opportunities
        </Link>
      </div>
    </section>

    <div className="md:hidden h-20" />
  </Layout>
);

export default JobsPage;
