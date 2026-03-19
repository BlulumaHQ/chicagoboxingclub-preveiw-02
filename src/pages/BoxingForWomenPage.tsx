import ServicePage from "@/components/ServicePage";
import womenBoxing from "@/assets/women-boxing.jpg";

const BoxingForWomenPage = () => (
  <ServicePage
    title="Boxing Classes for Women"
    heroImage={womenBoxing}
    intro="Boxing 101, kickboxing, and cardio boxing classes designed specifically for women of all fitness levels."
    content={[
      "Chicago Boxing Club offered specialized boxing programs for women including Boxing 101, kickboxing classes, and cardio boxing sessions. These classes were designed for women at every fitness level.",
      "Whether you were looking to learn the fundamentals of boxing, get a high-intensity cardio workout, or prepare for competition, Chicago Boxing Club's women's programs provided expert instruction in a supportive environment.",
      "Chicago Boxing Club continues to serve as a resource for women looking to find boxing and fitness programs at Chicago's serious training gyms.",
    ]}
    features={[
      "Boxing 101 class for women",
      "Kickboxing class for women",
      "Cardio boxing class for women",
      "All fitness levels welcome",
      "Expert female-focused instruction",
      "Supportive training environment",
    ]}
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Youth Boxing", path: "/youthboxing" },
      { label: "Muay Thai", path: "/muaythai" },
      { label: "Free Class Coupons", path: "/chicagoboxingclubcoupons" },
    ]}
  />
);

export default BoxingForWomenPage;
