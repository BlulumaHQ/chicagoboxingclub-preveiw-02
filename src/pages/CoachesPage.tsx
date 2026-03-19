import ServicePage from "@/components/ServicePage";
import boxingTraining from "@/assets/boxing-training.jpg";

const CoachesPage = () => (
  <ServicePage
    title="Boxing Coaches"
    heroImage={boxingTraining}
    intro="Meet the expert coaches and trainers who built Chicago Boxing Club into a four-time Gold Glove championship team."
    content={[
      "Chicago Boxing Club was home to expert boxing coaches and trainers who developed champions across multiple combat sports disciplines. Under their guidance, the team captured four consecutive Chicago Gold Glove Tournament Team Championships from 2009 to 2012.",
      "The coaching staff trained athletes including Kristin Gearhart, who went on to compete at the Olympic Trials — a testament to the caliber of instruction at Chicago Boxing Club.",
      "Two new boxing gyms have grown out of Chicago Boxing Club. Sam Colonna now runs Sam Colonna Boxing Gym, and Rick Ramos runs Bodyshot Boxing Club. Both continue the tradition of excellence established at Chicago Boxing Club.",
    ]}
    features={[
      "Championship-winning coaching staff",
      "Olympic-level training capability",
      "Professional fighter development",
      "Amateur competition preparation",
      "Beginner instruction expertise",
      "Multi-discipline coaching",
    ]}
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Memberships", path: "/boxingstudents" },
      { label: "Events", path: "/goldglovesfightnights" },
    ]}
  />
);

export default CoachesPage;
