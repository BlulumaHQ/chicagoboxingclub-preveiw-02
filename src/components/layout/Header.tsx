import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/cbc-logo.png";

const services = [
  { label: "Boxing Classes", path: "/boxingclasses" },
  { label: "Youth Boxing", path: "/youthboxing" },
  { label: "Boxing for Women", path: "/boxingclassesforwomen" },
  { label: "Muay Thai", path: "/muaythai" },
  { label: "Wrestling", path: "/wrestlingclasses" },
  { label: "Jiu-Jitsu & MMA", path: "/jiujitsu" },
];

const more = [
  { label: "Memberships", path: "/boxingstudents" },
  { label: "Coaches", path: "/boxingtrainers" },
  { label: "Free Coupons", path: "/chicagoboxingclubcoupons" },
  { label: "Photos", path: "/boxinggymphotos" },
  { label: "Videos & Articles", path: "/chicagoboxingclubvideosandnews" },
  { label: "Jobs", path: "/boxingjobopportunities" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 section-darker border-b border-white/10">
      <div className="container-site flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Chicago Boxing Club" className="h-[75px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavItem to="/" label="Home" active={location.pathname === "/"} />
          <NavItem to="/goldglovesfightnights" label="Events" active={location.pathname === "/goldglovesfightnights"} />

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Classes <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-surface-darker border border-white/10 rounded-lg shadow-2xl py-2 min-w-[200px]">
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
              More <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-surface-darker border border-white/10 rounded-lg shadow-2xl py-2 min-w-[200px]">
                {more.map((m) => (
                  <Link key={m.path} to={m.path} className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem to="/contactus" label="Contact" active={location.pathname === "/contactus"} />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:312-450-7850" className="flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white transition-colors">
            <Phone className="w-4 h-4" /> 312-450-7850
          </a>
          <Link to="/contactus" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-md transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden section-darker border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="container-site py-4 space-y-1">
            <MobileLink to="/" label="Home" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/goldglovesfightnights" label="Boxing Event Production" onClick={() => setMobileOpen(false)} />

            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-white/80">
              Classes <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && services.map((s) => (
              <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block pl-6 pr-3 py-2.5 text-sm text-white/60 hover:text-white">
                {s.label}
              </Link>
            ))}

            <button onClick={() => setMoreOpen(!moreOpen)} className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-white/80">
              More <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && more.map((m) => (
              <Link key={m.path} to={m.path} onClick={() => setMobileOpen(false)} className="block pl-6 pr-3 py-2.5 text-sm text-white/60 hover:text-white">
                {m.label}
              </Link>
            ))}

            <MobileLink to="/contactus" label="Contact Us" onClick={() => setMobileOpen(false)} />

            <div className="pt-4 space-y-3">
              <a href="tel:312-450-7850" className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-white/90">
                <Phone className="w-4 h-4" /> 312-450-7850
              </a>
              <Link to="/contactus" onClick={() => setMobileOpen(false)} className="block text-center bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-md">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link to={to} className={`px-3 py-2 text-sm font-semibold transition-colors ${active ? "text-white" : "text-white/80 hover:text-white"}`}>
    {label}
  </Link>
);

const MobileLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link to={to} onClick={onClick} className="block px-3 py-3 text-sm font-semibold text-white/80 hover:text-white">
    {label}
  </Link>
);

export default Header;
