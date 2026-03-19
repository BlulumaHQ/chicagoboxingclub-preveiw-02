import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <Link
          to="/contactus"
          className="bg-cta-sticky hover:bg-cta-sticky/90 text-white font-bold text-sm px-4 py-4 rounded-l-lg shadow-2xl transition-colors writing-mode-vertical"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          GET STARTED →
        </Link>
        <a
          href="tel:312-450-7850"
          className="bg-cta-sticky hover:bg-cta-sticky/90 text-white font-bold text-sm px-4 py-4 rounded-l-lg shadow-2xl transition-colors flex items-center justify-center"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cta-sticky border-t border-white/10 shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link to="/contactus" className="flex-1 bg-white text-primary font-bold text-sm text-center py-3 rounded-md">
            Get Started Today
          </Link>
          <a href="tel:312-450-7850" className="flex items-center justify-center bg-white/20 text-white p-3 rounded-md">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
