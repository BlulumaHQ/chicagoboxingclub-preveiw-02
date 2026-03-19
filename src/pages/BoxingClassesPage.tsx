import ServicePage from "@/components/ServicePage";
import boxingTraining from "@/assets/boxing-training.jpg";

const relatedPages = [
  { label: "Youth Boxing", path: "/youthboxing" },
  { label: "Boxing for Women", path: "/boxingclassesforwomen" },
  { label: "Muay Thai Classes", path: "/muaythai" },
  { label: "Wrestling Classes", path: "/wrestlingclasses" },
  { label: "Jiu-Jitsu & MMA", path: "/jiujitsu" },
  { label: "Free Class Coupons", path: "/chicagoboxingclubcoupons" },
];

const BoxingClassesPage = () => (
  <ServicePage
    title="Boxing Classes"
    heroImage={boxingTraining}
    intro="Boxing classes and lessons for every skill level — from complete beginners to professional fighters and competing amateur boxers."
    content={[
      "Chicago Boxing Club offered boxing classes for every skill level. Professional fighters and amateur boxers as well as boxing beginners were trained in an outstanding facility.",
      "Classes were available seven days a week with full class schedules in evening and daytime hours. Professional and competing amateur training took place during daytime, with Saturday morning sparring sessions available.",
      "Chicago Boxing Club continues to serve as an expert information source for true fighters, boxers, and boxing fans who are interested in finding Chicago's serious training gyms for boxing and self defense.",
    ]}
    features={[
      "Boxing classes for beginners through professional level",
      "Classes available seven days a week",
      "Full class schedules in evening and daytime hours",
      "Professional and competing amateur training during daytime",
      "Saturday morning sparring sessions",
      "Expert coaching and personalized training",
    ]}
    relatedPages={relatedPages}
  />
);

export default BoxingClassesPage;
