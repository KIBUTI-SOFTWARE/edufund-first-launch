import { Route, Routes } from "react-router-dom";
import Home from "../src/app/pages/Home";
import ApplyForScholarship from "./app/pages/ApplyForScholarship";
import Eligibility from "./app/pages/Eligibility";
import Scholarships from "./app/pages/Scholarships";
import Stories from "./app/pages/Stories";
import NotFound from "./app/pages/NotFound";
import { useEffect } from "react";
import Fundraiser from "./app/pages/Fundraiser";
import CustomCursor from "./app/components/CustomCursor";
function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
    <Routes className="bg-pattern">
      <Route path="/" element={<Home />} />
      <Route path="/Apply" element={<ApplyForScholarship />} />
      <Route path="/Eligibility" element={<Eligibility />} />
      <Route path="/Scholarships" element={<Scholarships />} />
      <Route path="/success-stories" element={<Stories />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/fundraiser" element={<Fundraiser />} />
    </Routes>
    <CustomCursor/>
    </>
  );
}

export default App;
