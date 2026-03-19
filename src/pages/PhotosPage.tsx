import Layout from "@/components/layout/Layout";
import heroImg from "@/assets/hero-boxing-gym.jpg";
import boxingTraining from "@/assets/boxing-training.jpg";
import youthBoxing from "@/assets/youth-boxing.jpg";
import womenBoxing from "@/assets/women-boxing.jpg";
import muayThai from "@/assets/muay-thai.jpg";
import wrestlingImg from "@/assets/wrestling.jpg";
import jiujitsuImg from "@/assets/jiujitsu.jpg";
import boxingEvent from "@/assets/boxing-event.jpg";

const photos = [
  { src: heroImg, alt: "Chicago Boxing Club gym interior" },
  { src: boxingTraining, alt: "Boxing training session" },
  { src: youthBoxing, alt: "Youth boxing class" },
  { src: womenBoxing, alt: "Women's boxing training" },
  { src: muayThai, alt: "Muay Thai training" },
  { src: wrestlingImg, alt: "Wrestling training" },
  { src: jiujitsuImg, alt: "Jiu-Jitsu training" },
  { src: boxingEvent, alt: "Boxing Fight Night event" },
];

const PhotosPage = () => (
  <Layout>
    <section className="section-darker pt-28 pb-10">
      <div className="container-site">
        <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Gallery</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Boxing Gym Photos</h1>
        <p className="text-white/60 max-w-xl">Photos from Chicago Boxing Club's training sessions, fight nights, and championship events.</p>
      </div>
    </section>

    <section className="section-darker section-padding pt-10">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="md:hidden h-20" />
  </Layout>
);

export default PhotosPage;
