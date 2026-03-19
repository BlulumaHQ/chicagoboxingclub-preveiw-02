import ServicePage from "@/components/ServicePage";
import youthBoxing from "@/assets/youth-boxing.jpg";

const YouthBoxingPage = () => (
  <ServicePage
    title="Youth Boxing Classes"
    heroImage={youthBoxing}
    intro="Building discipline, confidence, and fitness in young athletes through structured youth boxing training programs."
    content={[
      "Chicago Boxing Club's youth boxing program was designed to build discipline, confidence, and physical fitness in young athletes. The program provided structured training in a safe and encouraging environment.",
      "Youth boxing classes focused on proper technique, footwork, and conditioning while instilling values of respect, hard work, and sportsmanship that extend beyond the gym.",
      "Chicago Boxing Club continues to serve as a resource for families looking to find youth boxing programs at Chicago's serious training gyms.",
    ]}
    features={[
      "Structured youth training programs",
      "Focus on proper technique and fundamentals",
      "Building discipline and confidence",
      "Safe and encouraging training environment",
      "Age-appropriate conditioning",
      "Values of respect and sportsmanship",
    ]}
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Boxing for Women", path: "/boxingclassesforwomen" },
      { label: "Free Class Coupons", path: "/chicagoboxingclubcoupons" },
    ]}
  />
);

export default YouthBoxingPage;
