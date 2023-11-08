import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/Project/ProjectPage";
import ServicePage from "./pages/Service/ServicePage";
import AboutPage from "./pages/About/AboutPage";
import Navbar from "./pages/Home/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/Service" element={<ServicePage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
