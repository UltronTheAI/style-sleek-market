import storeData from "../data/store-data.json";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold mb-6">{storeData.brand.name}</h2>
          <p className="text-xl mb-4 text-primary">{storeData.brand.tagline}</p>
          <p className="text-muted-foreground leading-relaxed">
            {storeData.brand.description}
          </p>
        </div>
      </div>
    </section>
  );
};