import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
export const App = () => {
  return (
    <div className="bg-[#00040f] min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};
