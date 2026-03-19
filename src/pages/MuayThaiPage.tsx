import ServicePage from "@/components/ServicePage";
import muayThai from "@/assets/muay-thai.jpg";

const MuayThaiPage = () => (
  <ServicePage
    title="Muay Thai Classes"
    heroImage={muayThai}
    intro="Learn the art of eight limbs with professional Muay Thai classes and lessons for all skill levels."
    content={[
      "Chicago Boxing Club offered professional Muay Thai classes and lessons as part of its comprehensive combat sports training programs. Muay Thai, known as the art of eight limbs, uses fists, elbows, knees, and shins.",
      "Classes were available for all skill levels from beginners learning the fundamentals to experienced fighters looking to sharpen their technique. Thai boxing is one of the most popular combat sports worldwide.",
      "Chicago Boxing Club continues to serve as an information source for those interested in finding Muay Thai training at Chicago's serious fight gyms.",
    ]}
    features={[
      "Professional Muay Thai instruction",
      "Beginner through advanced levels",
      "Striking technique with all eight limbs",
      "Clinch work and conditioning",
      "Pad work and bag training",
      "Sparring opportunities",
    ]}
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Wrestling", path: "/wrestlingclasses" },
      { label: "Jiu-Jitsu & MMA", path: "/jiujitsu" },
      { label: "Free Class Coupons", path: "/chicagoboxingclubcoupons" },
    ]}
  />
);

export default MuayThaiPage;
