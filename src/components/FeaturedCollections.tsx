import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const collections = [
  {
    id: 1,
    name: "Spring Collection",
    description: "Fresh designs for the new season",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1500",
  },
  {
    id: 2,
    name: "Minimalist Living",
    description: "Simplify your space",
    image: "https://plus.unsplash.com/premium_photo-1683910490876-074a2e18ca10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Workspace Essentials",
    description: "Enhance your productivity",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1500",
  },
];

const FeaturedCollections = () => {
  const containerRef = useScrollAnimation({ y: 30 });

  return (
    <section className="py-20 bg-secondary" ref={containerRef}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
          <h2 className="text-3xl md:text-4xl font-serif">Featured Collections</h2>
          <Link
            to="/collections"
            className="flex items-center group text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0"
          >
            Browse All Collections
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative overflow-hidden aspect-[4/5] rounded-lg"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
                <p className="text-white/80 mb-4">{collection.description}</p>
                <div className="flex items-center text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Explore Collection
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
