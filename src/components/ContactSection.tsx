import { Mail, Phone, MapPin } from "lucide-react";
import storeData from "../data/store-data.json";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${storeData.brand.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {storeData.brand.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href={`tel:${storeData.brand.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {storeData.brand.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  {storeData.brand.address}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden fade-in">
            <iframe
              src={storeData.brand.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};