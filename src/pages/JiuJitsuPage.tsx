import ServicePage from "@/components/ServicePage";
import jiujitsuImg from "@/assets/jiujitsu.jpg";

const JiuJitsuPage = () => (
  <ServicePage
    title="Jiu-Jitsu and MMA Classes"
    heroImage={jiujitsuImg}
    intro="Ground game mastery through Jiu-Jitsu classes and complete MMA training for all levels."
    content={[
      "Chicago Boxing Club offered Jiu-Jitsu classes and lessons as part of its comprehensive MMA training programs. Jiu-Jitsu training focused on submissions, ground control, and self-defense techniques.",
      "Combined with boxing, Muay Thai, and wrestling, the Jiu-Jitsu program provided a complete mixed martial arts training experience for fighters at every level.",
      "Chicago Boxing Club continues to serve as an information source for those interested in finding Jiu-Jitsu and MMA training at Chicago's serious fight gyms.",
    ]}
    features={[
      "Jiu-Jitsu fundamentals and advanced techniques",
      "Submission grappling",
      "Ground control and escapes",
      "Self-defense applications",
      "Complete MMA training integration",
      "All skill levels welcome",
    ]}
    relatedPages={[
      { label: "Wrestling", path: "/wrestlingclasses" },
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Muay Thai", path: "/muaythai" },
    ]}
  />
);

export default JiuJitsuPage;
