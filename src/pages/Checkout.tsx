
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    paymentMethod: "credit-card",
    saveInfo: true,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 
      'address', 'city', 'state', 'zip', 'country'
    ];
    
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Simulate order processing
    setLoading(true);
    setTimeout(() => {
      // Generate random order number
      const orderNumber = Math.floor(10000000 + Math.random() * 90000000).toString();
      
      // Clear cart and redirect to success page
      clearCart();
      navigate(`/order-confirmation/${orderNumber}`);
    }, 1500);
  };
  
  // If cart is empty, redirect to cart page
  if (cart.length === 0 && !loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container-custom flex-grow py-16">
          <h1 className="text-3xl font-serif mb-10">Checkout</h1>
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="mb-8 text-muted-foreground max-w-lg mx-auto">
              You need to add items to your cart before proceeding to checkout.
            </p>
            <Button onClick={() => navigate("/shop")}>Shop Now</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const SHIPPING_COST = 5.99;
  const showFreeShipping = cartTotal >= 50;
  const orderTotal = showFreeShipping ? cartTotal : cartTotal + SHIPPING_COST;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container-custom py-10">
        <Button variant="ghost" className="mb-6" onClick={() => navigate("/cart")}>
          <ArrowLeft className="mr-2" size={18} />
          Back to Cart
        </Button>
        
        <h1 className="text-3xl font-serif mb-10">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Customer Info and Shipping */}
            <div className="space-y-10">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-medium mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zip">ZIP/Postal Code *</Label>
                      <Input
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                <RadioGroup
                  defaultValue={formData.paymentMethod}
                  className="space-y-4"
                  onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                >
                  <div className="flex items-center space-x-2 border rounded p-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex-grow cursor-pointer">Credit Card</Label>
                    <CreditCard size={20} className="text-muted-foreground" />
                  </div>
                  <div className="flex items-center space-x-2 border rounded p-4">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-grow cursor-pointer">PayPal</Label>
                    <span className="text-blue-600 font-medium">PayPal</span>
                  </div>
                </RadioGroup>
                
                {formData.paymentMethod === "credit-card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-secondary p-6 rounded sticky top-24">
                <h2 className="font-medium text-lg mb-6">Order Summary</h2>
                
                {/* Product List */}
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex">
                        <div className="w-12 h-12 relative">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute -top-2 -right-2 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                {/* Totals */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{showFreeShipping ? "Free" : `$${SHIPPING_COST.toFixed(2)}`}</span>
                  </div>
                  {showFreeShipping && (
                    <div className="text-green-600 text-sm flex items-center">
                      <Check size={14} className="mr-1" />
                      Free shipping applied
                    </div>
                  )}
                  <div className="border-t pt-4 flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? "Processing..." : "Place Order"}
                </Button>
                
                <div className="mt-6 text-sm text-center text-muted-foreground">
                  By placing your order, you agree to our 
                  <a href="/terms" className="text-primary hover:underline mx-1">Terms of Service</a> 
                  and 
                  <a href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</a>.
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
