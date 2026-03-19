import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";

const VideosPage = () => (
  <Layout>
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Boxing Videos and Articles" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>
      <div className="relative container-site py-20">
        <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Media</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Boxing / MMA Videos and Articles</h1>
        <p className="text-lg text-white/70 max-w-xl">Stay connected with the latest from Chicago's boxing and martial arts community.</p>
      </div>
    </section>

    <section className="section-darker section-padding">
      <div className="container-site max-w-3xl mx-auto">
        <p className="text-white/60 leading-relaxed mb-6">
          Get live updates from our amateur boxing events by following the action on Twitter{" "}
          <a href="https://twitter.com/boxing_joe" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 font-bold">@boxing_joe</a>.
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          "One more round to go. Eye of the tiger blasting now. This suburban crowd all shadow boxing in their seats thinking they can hang in the ring."
        </p>
        <p className="text-white/60 leading-relaxed mb-6">
          "Beautiful night outdoors on south Chicago suburb watching amateur boxing. Great night."
        </p>
        <p className="text-white/60 leading-relaxed mb-10">
          "Proud to be producing a 1920s style event with competing Chicago amateur boxers at center stage in Chicago."
        </p>
        <Link to="/goldglovesfightnights" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-md transition-colors inline-block">
          Learn About Our Events
        </Link>
      </div>
    </section>

    <div className="md:hidden h-20" />
  </Layout>
);

export default VideosPage;
