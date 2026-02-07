import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";
import Choose from "./components/Choose";
import Feature from "./components/Feature";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background">
      <Nav />
      <Header />
      <Feature />
      <Choose />
      <Works />
      <Testimonial />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
