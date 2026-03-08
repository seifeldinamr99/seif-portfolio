import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ResumePage } from "./pages/ResumePage";
import { ContactPage } from "./pages/ContactPage";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Show loading spinner until the page has finished loading.
    const onLoad = () => setAppReady(true);

    window.addEventListener("load", onLoad);
    const fallback = window.setTimeout(onLoad, 1500);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <LoadingScreen visible={!appReady} />
      <BrowserRouter>
        <div className="app" aria-hidden={!appReady}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
