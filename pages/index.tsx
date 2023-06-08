import { ThemeProvider } from "next-themes";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";

const Home: React.FC = () => {
  return (
    <div className="text-black dark:text-white">
      <ThemeProvider enableSystem={true} attribute="class">
        {/* Header */}
        <Header />

        <Hero />

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </ThemeProvider>
    </div>
  );
};

export default Home;
