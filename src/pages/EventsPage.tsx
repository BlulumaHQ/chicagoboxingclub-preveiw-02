import ServicePage from "@/components/ServicePage";
import boxingEvent from "@/assets/boxing-event.jpg";

const EventsPage = () => (
  <ServicePage
    title="Boxing Event Production"
    heroImage={boxingEvent}
    intro="Chicago's leading producer of Boxing Fight Night events featuring exciting live amateur boxing in the Chicago area."
    content={[
      "Chicago Boxing Club is Chicago's leading producer of Boxing Fight Night events. We produce exciting live amateur boxing events in the Chicago area that showcase the talent of competing amateur boxers.",
      "From 1920s-style events to modern fight nights, our productions bring the excitement of competitive boxing to audiences throughout Chicago and the south Chicago suburbs.",
      "Get live updates from our amateur boxing events by following the action on Twitter @boxing_joe.",
      "Beautiful nights outdoors on south Chicago suburbs watching amateur boxing. Great nights of competition and entertainment for the whole community.",
    ]}
    features={[
      "Professional fight night event production",
      "Live amateur boxing competitions",
      "1920s-style themed boxing events",
      "Indoor and outdoor venues",
      "Chicago and south suburban locations",
      "Live social media updates via @boxing_joe",
    ]}
    ctaText="Contact Us About Events"
    relatedPages={[
      { label: "Boxing Classes", path: "/boxingclasses" },
      { label: "Coaches", path: "/boxingtrainers" },
      { label: "Photos", path: "/boxinggymphotos" },
      { label: "Videos & Articles", path: "/chicagoboxingclubvideosandnews" },
    ]}
  />
);

export default EventsPage;
