import { useState } from "react";
import { Search, MessageCircle, Star, StarHalf } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import storeData from "../data/store-data.json";

export const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});

  const filteredProducts = storeData.products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsApp = (product: typeof storeData.products[0]) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const color = selectedColors[product.id] || product.colors[0];
    const message = `Hi! I'm interested in purchasing the ${product.name} (${color}, Size ${size}) for $${product.price}`;
    const url = `https://wa.me/${storeData.brand.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-primary text-primary" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-primary text-primary" />);
    }

    return stars;
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <span className="text-lg font-bold">${product.price}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="flex items-center gap-1 mb-3">
                {renderStars(product.rating)}
                <span className="text-sm text-muted-foreground ml-2">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <Select
                  value={selectedSizes[product.id] || product.sizes[0]}
                  onValueChange={(value) => 
                    setSelectedSizes((prev) => ({ ...prev, [product.id]: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        Size {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedColors[product.id] || product.colors[0]}
                  onValueChange={(value) =>
                    setSelectedColors((prev) => ({ ...prev, [product.id]: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={() => handleWhatsApp(product)} className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Buy on WhatsApp
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};