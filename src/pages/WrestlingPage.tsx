import ServicePage from "@/components/ServicePage";
import wrestlingImg from "@/assets/wrestling.jpg";

const WrestlingPage = () => (
  <ServicePage
    title="Wrestling Classes"
    heroImage={wrestlingImg}
    intro="Develop takedown skills, grappling technique, and competitive wrestling fundamentals at Chicago's fight gyms."
    content={[
      "Chicago Boxing Club offered wrestling classes and lessons as part of its diverse combat sports training programs. Wrestling training focused on takedowns, control positions, and competitive grappling techniques.",
      "Classes were available for all skill levels and complemented the boxing and Muay Thai programs, giving fighters a well-rounded martial arts foundation.",
      "Chicago Boxing Club continues to serve as a resource for those looking to find wrestling training at Chicago's serious fight gyms.",
    ]}
    features={[
      "Takedown techniques and defense",
      "Control positions and escapes",
      "Competitive wrestling fundamentals",
      "Strength and conditioning",
      "All skill levels welcome",
      "Complements striking disciplines",
    ]}
    relatedPages={[
      { label: "Jiu-Jitsu & MMA", path: "/jiujitsu" },
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Muay Thai", path: "/muaythai" },
    ]}
  />
);

export default WrestlingPage;
