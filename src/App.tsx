import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import BoxingClassesPage from "./pages/BoxingClassesPage";
import YouthBoxingPage from "./pages/YouthBoxingPage";
import BoxingForWomenPage from "./pages/BoxingForWomenPage";
import MuayThaiPage from "./pages/MuayThaiPage";
import WrestlingPage from "./pages/WrestlingPage";
import JiuJitsuPage from "./pages/JiuJitsuPage";
import EventsPage from "./pages/EventsPage";
import MembershipsPage from "./pages/MembershipsPage";
import CoachesPage from "./pages/CoachesPage";
import CouponsPage from "./pages/CouponsPage";
import PhotosPage from "./pages/PhotosPage";
import VideosPage from "./pages/VideosPage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boxingclasses" element={<BoxingClassesPage />} />
          <Route path="/boxingclasses.html" element={<BoxingClassesPage />} />
          <Route path="/youthboxing" element={<YouthBoxingPage />} />
          <Route path="/youthboxing.html" element={<YouthBoxingPage />} />
          <Route path="/boxingclassesforwomen" element={<BoxingForWomenPage />} />
          <Route path="/boxingclassesforwomen.html" element={<BoxingForWomenPage />} />
          <Route path="/muaythai" element={<MuayThaiPage />} />
          <Route path="/muaythai.html" element={<MuayThaiPage />} />
          <Route path="/wrestlingclasses" element={<WrestlingPage />} />
          <Route path="/wrestlingclasses.html" element={<WrestlingPage />} />
          <Route path="/jiujitsu" element={<JiuJitsuPage />} />
          <Route path="/jiujitsu.html" element={<JiuJitsuPage />} />
          <Route path="/goldglovesfightnights" element={<EventsPage />} />
          <Route path="/goldglovesfightnights.html" element={<EventsPage />} />
          <Route path="/boxingstudents" element={<MembershipsPage />} />
          <Route path="/boxingstudents.html" element={<MembershipsPage />} />
          <Route path="/boxingtrainers" element={<CoachesPage />} />
          <Route path="/boxingtrainers.html" element={<CoachesPage />} />
          <Route path="/chicagoboxingclubcoupons" element={<CouponsPage />} />
          <Route path="/chicagoboxingclubcoupons.html" element={<CouponsPage />} />
          <Route path="/boxinggymphotos" element={<PhotosPage />} />
          <Route path="/boxinggymphotos.html" element={<PhotosPage />} />
          <Route path="/chicagoboxingclubvideosandnews" element={<VideosPage />} />
          <Route path="/chicagoboxingclubvideosandnews.html" element={<VideosPage />} />
          <Route path="/boxingjobopportunities" element={<JobsPage />} />
          <Route path="/boxingjobopportunities.html" element={<JobsPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/contactus.html" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
