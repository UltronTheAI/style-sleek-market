import { useState } from "react";
import { Search, MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import storeData from "../data/store-data.json";

export const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = storeData.products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsApp = (product: typeof storeData.products[0]) => {
    const message = `Hi! I'm interested in purchasing the ${product.name} for $${product.price}`;
    const url = `https://wa.me/${storeData.brand.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="products" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {storeData.categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow fade-in"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button onClick={() => handleWhatsApp(product)}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Buy on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};