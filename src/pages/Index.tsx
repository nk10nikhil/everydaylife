import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from 'gsap';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import FeaturedCollections from "@/components/FeaturedCollections";
import Values from "@/components/Values";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { products, categories } from "@/data/products";

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useScrollAnimation({ y: 100 });
  const featuredRef = useScrollAnimation({ delay: 0.2 });
  const newArrivalsRef = useScrollAnimation({ y: 50, delay: 0.3 });
  const aboutRef = useScrollAnimation({ scale: 0.9, delay: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
        y: 50,
        ease: "power3.out",
      });

      // Text reveal animation
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[90vh] bg-neutral-100 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1500"
              alt="Modern minimalist living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>

          <div className="relative container-custom h-full flex flex-col justify-center">
            <h1 className="hero-text text-5xl md:text-7xl text-white font-serif mb-6 max-w-2xl">
              Elevate Your Space with Timeless Design
            </h1>
            <p className="hero-text text-white/90 text-xl md:text-2xl mb-8 max-w-xl">
              Discover our collection of minimalist home goods designed to transform your everyday experience.
            </p>
            <div className="hero-text flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/shop">Explore Collection</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <Values />

        {/* Featured Collections */}
        <FeaturedCollections />

        {/* Categories Section */}
        <section ref={categoriesRef} className="py-20">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
              <h2 className="text-3xl md:text-4xl font-serif">Shop by Category</h2>
              <Link to="/categories" className="flex items-center group text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0">
                View All Categories
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 sm:gap-8">
              {categories.slice(0, 3).map(category => (
                <Link
                  // to={`/category/${category.id}`}
                  to="/shop"
                  key={category.id}
                  className="group relative overflow-hidden aspect-square rounded-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-serif text-center">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section ref={featuredRef} className="py-20 bg-secondary">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
              <h2 className="text-3xl md:text-4xl font-serif">Featured Products</h2>
              <Link to="/shop" className="flex items-center group text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0">
                View All Products
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* New Arrivals */}
        <section ref={newArrivalsRef} className="py-20">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
              <h2 className="text-3xl md:text-4xl font-serif">New Arrivals</h2>
              <Link to="/shop" className="flex items-center group text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0">
                View All New Arrivals
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* About Section */}
        <section ref={aboutRef} className="py-20 bg-neutral-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Thoughtfully Designed. Sustainably Crafted.</h2>
                <p className="text-muted-foreground mb-8">
                  At Every Day Life, we believe in the power of intentional living. Our products are designed to bring beauty and functionality to your everyday routines, while respecting our planet and its resources.
                </p>
                <Button asChild>
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800"
                  alt="Our workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20">
          <div className="container-custom text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Follow Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join our community and share how you style our pieces in your home.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-0">
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=300"
                alt="Instagram post 1"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=300"
                alt="Instagram post 2"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=300"
                alt="Instagram post 3"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=300"
                alt="Instagram post 4"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556185781-a47769abb7ee?q=80&w=300"
                alt="Instagram post 5"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
            <a href="#" className="group relative aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=300"
                alt="Instagram post 6"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">@everydaylife</span>
              </div>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
