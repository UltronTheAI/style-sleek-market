import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ProductSection } from "@/components/ProductSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import storeData from "@/data/store-data.json";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center bg-primary/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              {storeData.brand.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto fade-in">
              {storeData.brand.tagline}
            </p>
          </div>
        </section>

        <ProductSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;