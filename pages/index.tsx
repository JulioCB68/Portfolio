import { ThemeProvider } from "next-themes";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="text-black dark:text-white">
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Home;
