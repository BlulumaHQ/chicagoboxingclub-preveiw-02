import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-darker">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold text-white mb-4">Chicago Boxing Club</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Chicago's information source for fight training gyms. Expert resource for true fighters, boxers, and boxing fans.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Boxing Events", path: "/goldglovesfightnights" },
                { label: "Boxing Classes", path: "/boxingclasses" },
                { label: "Youth Boxing", path: "/youthboxing" },
                { label: "Muay Thai", path: "/muaythai" },
                { label: "Contact Us", path: "/contactus" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Boxing for Women", path: "/boxingclassesforwomen" },
                { label: "Wrestling", path: "/wrestlingclasses" },
                { label: "Jiu-Jitsu & MMA", path: "/jiujitsu" },
                { label: "Memberships", path: "/boxingstudents" },
                { label: "Coaches", path: "/boxingtrainers" },
                { label: "Free Coupons", path: "/chicagoboxingclubcoupons" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:312-450-7850" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> 312-450-7850
                </a>
              </li>
              <li>
                <a href="mailto:info@chicagoboxingclub.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> info@chicagoboxingclub.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://twitter.com/boxing_joe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Follow @boxing_joe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5">
          <p className="text-xs text-white/40 text-center">
            © {year} Chicago Boxing Club. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              SwiftLift
            </a>
          {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of Chicago Boxing Club.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
