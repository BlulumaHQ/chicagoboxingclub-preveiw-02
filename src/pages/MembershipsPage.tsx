import ServicePage from "@/components/ServicePage";
import boxingTraining from "@/assets/boxing-training.jpg";

const MembershipsPage = () => (
  <ServicePage
    title="Boxing Gym Memberships"
    heroImage={boxingTraining}
    intro="Membership information for Chicago's serious fight training gyms offering boxing, Muay Thai, wrestling, and MMA."
    content={[
      "Chicago Boxing Club offered membership options for fighters at every level — from beginners taking their first boxing class to professional fighters preparing for competition.",
      "Memberships included access to classes seven days a week with full schedules in evening and daytime hours. Professional and competing amateur training was available during daytime, with Saturday morning sparring sessions.",
      "Chicago Boxing Club continues to serve as an information source for those looking for membership options at Chicago's serious fight training gyms. Two new boxing gyms have grown out of Chicago Boxing Club — Sam Colonna Boxing Gym and Bodyshot Boxing Club.",
    ]}
    features={[
      "Classes available seven days a week",
      "Full class schedules in evening and daytime hours",
      "Professional and amateur training during daytime",
      "Saturday morning sparring",
      "Access to all combat sports disciplines",
      "Training for all skill levels",
    ]}
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Free Coupons", path: "/chicagoboxingclubcoupons" },
      { label: "Coaches", path: "/boxingtrainers" },
      { label: "Contact Us", path: "/contactus" },
    ]}
  />
);

export default MembershipsPage;
