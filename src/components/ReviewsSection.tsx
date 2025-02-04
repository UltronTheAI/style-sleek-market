import { Star } from "lucide-react";
import storeData from "../data/store-data.json";

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeData.reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow fade-in"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">{review.comment}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{review.name}</span>
              <span className="text-sm text-muted-foreground">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};