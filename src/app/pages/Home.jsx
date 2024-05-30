import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/loaders/Loader";
import About from "../sections/About";
import Articles from "../sections/Articles";
import { Faqs } from "../sections/Faqs";
import Footer from "../sections/Footer";
import Gallery from "../sections/Gallery";
import PieChartFunctional from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3 * 1000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="bg-pattern text-white px-2">
          <Navbar />
          <About />
          <PieChartFunctional />
          <Articles />
          <Testimonials />
          {/* <Gallery /> */}
          {/* <Form /> */}
          {/* <Form2 /> */}
          <Faqs />
          {/* <DrawerDemo/> */}
          <Footer />
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Home;
