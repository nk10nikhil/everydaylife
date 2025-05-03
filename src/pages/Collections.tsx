
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

const collections = [
  {
    id: "summer-2024",
    name: "Summer 2025",
    description: "Light and airy pieces perfect for the warmer months",
    image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=700",
  },
  {
    id: "minimalist-essentials",
    name: "Minimalist Essentials",
    description: "Timeless pieces for the modern home",
    image: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?q=80&w=700",
  },
  {
    id: "artisan-crafted",
    name: "Artisan Crafted",
    description: "Handmade pieces with unique character",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=700",
  }
];

const Collections = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-secondary py-16">
          <div className="container-custom">
            <h1 className="text-4xl font-serif mb-4">Our Collections</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our carefully curated collections, each telling its own unique story through design.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/collection/${collection.id}`}
                  className="group relative overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
                    <div className="text-white">
                      <Package className="mx-auto mb-3" size={32} />
                      <h2 className="text-3xl font-serif mb-2">{collection.name}</h2>
                      <p className="text-white/90">{collection.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
