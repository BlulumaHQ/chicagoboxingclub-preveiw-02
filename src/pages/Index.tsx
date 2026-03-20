import { Link } from "react-router-dom";
import { Phone, Mail, Trophy, Users, Shield, Star, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";
import boxingTraining from "@/assets/boxing-training.jpg";
import youthBoxing from "@/assets/youth-boxing.jpg";
import womenBoxing from "@/assets/women-boxing.jpg";
import muayThai from "@/assets/muay-thai.jpg";
import boxingEvent from "@/assets/boxing-event.jpg";
import wrestlingImg from "@/assets/wrestling.jpg";
import jiujitsuImg from "@/assets/jiujitsu.jpg";

const services = [
  { title: "Boxing Classes", desc: "Training for every skill level — from beginners to competing amateurs and professional fighters.", img: boxingTraining, path: "/boxingclasses" },
  { title: "Youth Boxing", desc: "Building discipline, confidence, and fitness in young athletes through structured boxing training.", img: youthBoxing, path: "/youthboxing" },
  { title: "Boxing for Women", desc: "Boxing 101, kickboxing, and cardio boxing classes designed for women of all fitness levels.", img: womenBoxing, path: "/boxingclassesforwomen" },
  { title: "Muay Thai", desc: "Learn the art of eight limbs with professional Muay Thai classes and lessons.", img: muayThai, path: "/muaythai" },
  { title: "Wrestling", desc: "Develop takedown skills, grappling technique, and competitive wrestling fundamentals.", img: wrestlingImg, path: "/wrestlingclasses" },
  { title: "Jiu-Jitsu & MMA", desc: "Ground game mastery through Jiu-Jitsu classes and complete MMA training.", img: jiujitsuImg, path: "/jiujitsu" },
];

const trustSignals = [
  { icon: Trophy, title: "4x Gold Glove Champions", desc: "Winner of 2009–2012 Chicago Gold Glove Boxing Tournament Team Championships" },
  { icon: Star, title: "Olympic-Level Training", desc: "Trained Kristin Gearhart who competed at the Olympic Trials" },
  { icon: Shield, title: "Leading Event Producer", desc: "Chicago's leading producer of Boxing Fight Night events" },
  { icon: Users, title: "All Skill Levels", desc: "From complete beginners to professional fighters — classes seven days a week" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Chicago Boxing Club gym interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative container-site py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Chicago's Fight Training Resource</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Train Like a <span className="text-secondary">Champion.</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Chicago Boxing Club is your expert information source for finding Chicago's serious training gyms for boxing, Muay Thai, Jiu-Jitsu, and other martial arts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contactus" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-4 rounded-md transition-colors text-center">
                  Get Started Today
                </Link>
                <a href="tel:312-450-7850" className="border-2 border-white/30 hover:border-white/60 text-white font-bold text-base px-8 py-4 rounded-md transition-colors text-center flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Call 312-450-7850
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-extrabold text-white mb-2">Get Started Today</h3>
              <p className="text-sm text-white/50 mb-6">Fill out the form and we'll get back to you shortly.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white/50 focus:outline-none focus:border-primary appearance-none">
                  <option value="">Select Interest</option>
                  <option value="boxing">Boxing Classes</option>
                  <option value="muay-thai">Muay Thai</option>
                  <option value="wrestling">Wrestling</option>
                  <option value="jiujitsu">Jiu-Jitsu & MMA</option>
                  <option value="youth">Youth Boxing</option>
                  <option value="women">Boxing for Women</option>
                  <option value="events">Fight Night Events</option>
                </select>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="section-dark">
        <div className="container-site py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-primary/20 p-3 rounded-lg shrink-0">
                  <t.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{t.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-darker section-padding">
        <div className="container-site text-center max-w-3xl mx-auto">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Why Chicago Boxing Club</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Find Your Serious Fight Gym in Chicago
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Chicago Boxing Club continues to serve as an expert information source for true fighters, boxers, and boxing fans who are interested in finding Chicago's serious training gyms for boxing and self defense as well as Muay Thai, Jiu-Jitsu, and other martial arts.
          </p>
          <Link to="/boxingclasses" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-md transition-colors">
            Explore Our Classes <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-dark section-padding">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Training Programs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Classes for Every Fighter</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-extrabold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-secondary text-sm font-bold">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={boxingEvent} alt="Boxing Fight Night event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        <div className="relative container-site section-padding">
          <div className="max-w-xl">
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Fight Night Events</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Chicago's Leading Producer of Boxing Fight Night Events
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Chicago Boxing Club produces exciting live amateur boxing events in the Chicago area. From 1920s-style events to modern fight nights featuring competing Chicago amateur boxers.
            </p>
            <Link to="/goldglovesfightnights" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-md transition-colors">
              Learn About Our Events <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="bg-primary section-padding">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Step Into the Ring?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get started with a free class coupon and find your Chicago fight gym today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chicagoboxingclubcoupons" className="bg-white text-primary font-bold px-8 py-4 rounded-md hover:bg-white/90 transition-colors">
              Free Class Coupons
            </Link>
            <Link to="/contactus" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-md hover:border-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About / History */}
      <section className="section-darker section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Our Legacy</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">4x Chicago Gold Glove Champions</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Chicago Boxing Club captured four consecutive Chicago Gold Glove Tournament Team Championships, winning the team trophy in 2009, 2010, 2011, and 2012.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                Chicago Boxing Club offered boxing classes, wrestling classes, and Muay Thai classes for every skill level. Professional fighters and amateur boxers as well as boxing beginners were trained in an outstanding facility.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                Two new boxing gyms have grown out of Chicago Boxing Club. Sam Colonna now runs Sam Colonna Boxing Gym and Rick Ramos runs Bodyshot Boxing Club.
              </p>
              <Link to="/boxingtrainers" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary/80 transition-colors">
                Meet Our Coaches <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img src={boxingTraining} alt="Boxing training at Chicago Boxing Club" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-dark section-padding" id="contact">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Contact Chicago Boxing Club</h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Ready to find your serious Chicago fight gym? Reach out to us for information about classes, events, and memberships.
              </p>
              <div className="space-y-4">
                <a href="tel:312-450-7850" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="bg-primary/20 p-3 rounded-lg"><Phone className="w-5 h-5 text-secondary" /></div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Phone</p>
                    <p className="font-bold">312-450-7850</p>
                  </div>
                </a>
                <a href="mailto:info@chicagoboxingclub.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="bg-primary/20 p-3 rounded-lg"><Mail className="w-5 h-5 text-secondary" /></div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Email</p>
                    <p className="font-bold">info@chicagoboxingclub.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-surface-alt rounded-lg p-8">
              <h3 className="text-xl font-extrabold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary" />
                <textarea placeholder="Tell us about your training goals..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary resize-none" />
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default Index;
