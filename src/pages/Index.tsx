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
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
                {storeData.brand.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                {storeData.brand.tagline}
              </p>
              <div className="mt-8 flex justify-center gap-4 animate-fade-in">
                <a 
                  href="#products" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Shop Now
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
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