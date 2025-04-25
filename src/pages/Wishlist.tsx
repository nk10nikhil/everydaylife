
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCart } from "@/context/CartContext";

const Wishlist = () => {
  const { wishlist } = useCart();
  const contentRef = useScrollAnimation({ y: 30, duration: 0.8 });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-secondary py-16">
          <div className="container-custom animate-fade-in">
            <h1 className="text-4xl font-serif mb-4">Your Wishlist</h1>
            <p className="text-muted-foreground max-w-2xl">
              Keep track of all your favorite items in one place.
            </p>
          </div>
        </section>
        
        <section ref={contentRef} className="py-12">
          <div className="container-custom">
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlist.map(item => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Heart size={48} className="mx-auto mb-4 text-muted-foreground animate-pulse" />
                <h2 className="text-2xl font-medium mb-2">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Browse our collections and save your favorite items
                </p>
                <Button asChild className="hover:scale-105 transition-transform">
                  <Link to="/shop">Start Shopping</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
