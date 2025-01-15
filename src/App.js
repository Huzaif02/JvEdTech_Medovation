import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
import Blogs from "./ui/Blogs";
import BlogDetailPage from "./ui/BlogDetailPage";
import NewsletterPage from "./ui/NewsletterPage";
import PrivacyPolicyPage from "./ui/PrivacyPolicyPage";
import TnC from "./ui/TnC";
import ShippingPolicy from "./ui/ShippingPolicy";
import RefundPolicy from "./ui/RefundPolicy";
import ReturnPolicy from "./ui/ReturnPolicy";
import Webinars from "./ui/Webinars";
import Workshops from "./ui/Workshops";
import Campaigns from "./ui/Campaigns";

const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const NoPage = lazy(() => import("./layout/NoPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={ <Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="careers" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="events/webinars" element={<Webinars />} />
            <Route path="events/workshops" element={<Workshops />} />
            <Route path="events/campaigns" element={<Campaigns />} />
            <Route path="blogs/:id" element={<BlogDetailPage />} />
            <Route path="newsletters" element={<NewsletterPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="tnc" element={<TnC />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="return-policy" element={<ReturnPolicy />} />
            <Route path="*" element={<NoPage />} />       
          </Routes>
        </Suspense>
      </Router> 
    </>
  );
}

export default App;
