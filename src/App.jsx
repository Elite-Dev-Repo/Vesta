import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";
import Choose from "./components/Choose";
import Feature from "./components/Feature";
import vestalogo from "./assets/vestalogo.png";

function App() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Trending", href: "#" },
    { name: "Features", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Faqs", href: "#" },
  ];

  return (
    <div className="bg-background">
      <nav className=" sticky top-0 z-999 border-b border-primary/20 backdrop-blur-sm">
        <div className="cont h-[80px] flex items-center justify-between">
          <a href="bg-background w-[150px]">
            <img src={vestalogo} alt="" className="w-35" />
          </a>
          <ul className="flex items-center gap-4 text-primary">
            {navItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className=" capitalize text-primary/50 text-sm font-light hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>

          <button className="bg-primary text-background px-4 py-2 rounded-sm">
            Sign Up
          </button>
        </div>
      </nav>
      <Header />
      <Feature />
      <Choose />
      <Works />
      <Testimonial />
      <Pricing />
      <Faqs />
      <footer></footer>
    </div>
  );
}

export default App;
