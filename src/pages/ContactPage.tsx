import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";

const ContactPage = () => {
  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Contact Chicago Boxing Club" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative container-site py-20">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-xl">Reach out for information about Chicago's serious training gyms for boxing, Muay Thai, and martial arts.</p>
        </div>
      </section>

      <section className="section-darker section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <a href="tel:312-450-7850" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                  <div className="bg-primary/20 p-4 rounded-lg"><Phone className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-bold text-lg">312-450-7850</p>
                  </div>
                </a>
                <a href="mailto:info@chicagoboxingclub.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                  <div className="bg-primary/20 p-4 rounded-lg"><Mail className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-bold text-lg">info@chicagoboxingclub.com</p>
                  </div>
                </a>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-3">Follow Us</h3>
              <a href="https://twitter.com/boxing_joe" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 font-bold transition-colors">
                @boxing_joe on Twitter
              </a>
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
                <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white/30 focus:outline-none focus:border-primary">
                  <option value="">I'm interested in...</option>
                  <option value="boxing">Boxing Classes</option>
                  <option value="youth">Youth Boxing</option>
                  <option value="women">Boxing for Women</option>
                  <option value="muaythai">Muay Thai</option>
                  <option value="wrestling">Wrestling</option>
                  <option value="jiujitsu">Jiu-Jitsu / MMA</option>
                  <option value="events">Boxing Events</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Tell us about your training goals..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary resize-none" />
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default ContactPage;
