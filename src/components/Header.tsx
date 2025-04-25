import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, X, User, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SearchResults from "./SearchResults";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
  };
  
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container-custom flex items-center justify-between py-4">
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
        
        <div className="flex-1 md:flex-initial text-center md:text-left">
          <Link to="/" className="font-serif text-2xl font-medium">Aesthetic Haven</Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="hover:text-primary/80 transition">Shop</Link>
          <Link to="/categories" className="hover:text-primary/80 transition">Categories</Link>
          <Link to="/collections" className="hover:text-primary/80 transition">Collections</Link>
          <Link to="/about" className="hover:text-primary/80 transition">About</Link>
          <Link to="/contact" className="hover:text-primary/80 transition">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch} className="p-2" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="p-2 hidden sm:block" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link to="/account" className="p-2 hidden sm:block" aria-label="Account">
            <User size={20} />
          </Link>
          <Link to="/cart" className="p-2 relative" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
          </Link>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in">
          <div className="container-custom py-4 flex justify-between items-center">
            <Link to="/" className="font-serif text-2xl font-medium">Aesthetic Haven</Link>
            <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <div className="container-custom flex flex-col space-y-6 pt-10">
            <Link to="/shop" className="text-2xl font-medium" onClick={toggleMenu}>Shop</Link>
            <Link to="/categories" className="text-2xl font-medium" onClick={toggleMenu}>Categories</Link>
            <Link to="/collections" className="text-2xl font-medium" onClick={toggleMenu}>Collections</Link>
            <Link to="/about" className="text-2xl font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-2xl font-medium" onClick={toggleMenu}>Contact</Link>
            <div className="pt-6 flex space-x-6">
              <Link to="/account" className="flex items-center">
                <User size={18} className="mr-2" /> Account
              </Link>
              <Link to="/wishlist" className="flex items-center">
                <Heart size={18} className="mr-2" /> Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {isSearchOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in">
          <div className="container-custom py-4 flex justify-between items-center">
            <span className="font-medium">Search products</span>
            <button onClick={toggleSearch} className="p-2" aria-label="Close search">
              <X size={22} />
            </button>
          </div>
          <div className="container-custom">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full py-6 px-4 text-lg border-b rounded-none focus-visible:ring-0"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                size={20} 
              />
            </div>
            <SearchResults query={searchQuery} onClose={toggleSearch} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
