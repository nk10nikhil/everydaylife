
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Package, Truck, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  
  // Simulate order data
  const orderData = {
    id: orderId || "12345678",
    date: new Date().toLocaleDateString(),
    shipping: {
      name: "John Doe",
      address: "123 Main St, Anytown, ST 12345",
      method: "Standard Shipping (3-5 business days)"
    },
    items: [
      { name: "Minimalist Ceramic Vase", price: 49.99, quantity: 1 },
      { name: "Organic Cotton Throw Blanket", price: 79.99, quantity: 2 }
    ],
    total: 209.97,
    status: "processing"
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container-custom py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle size={60} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-serif mb-4">Thank you for your order!</h1>
            <p className="text-muted-foreground mb-2">
              Your order #{orderData.id} has been successfully placed.
            </p>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your email address.
            </p>
          </div>
          
          {/* Order details card */}
          <div className="bg-secondary rounded-lg p-6 mb-10">
            <h2 className="text-xl font-medium mb-6">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-2">ORDER NUMBER</h3>
                <p>{orderData.id}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-2">DATE</h3>
                <p>{orderData.date}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-2">SHIPPING ADDRESS</h3>
                <p>{orderData.shipping.name}</p>
                <p>{orderData.shipping.address}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-2">SHIPPING METHOD</h3>
                <p>{orderData.shipping.method}</p>
              </div>
            </div>
            
            {/* Order summary */}
            <h3 className="font-medium border-b pb-2 mb-4">Order Summary</h3>
            <div className="space-y-4">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span>${orderData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Order tracking */}
          <div className="mb-10">
            <h2 className="text-xl font-medium mb-6">Order Tracking</h2>
            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-6 top-8 h-[calc(100%-32px)] w-0.5 bg-primary"></div>
              
              {/* Steps */}
              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium">Order Placed</h3>
                    <p className="text-muted-foreground text-sm">
                      Your order has been placed successfully.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                    <Package size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium">Processing</h3>
                    <p className="text-muted-foreground text-sm">
                      We're preparing your order for shipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                    <Truck size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-muted-foreground">Shipped</h3>
                    <p className="text-muted-foreground text-sm">
                      Your order is on its way to you.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                    <Home size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-muted-foreground">Delivered</h3>
                    <p className="text-muted-foreground text-sm">
                      Your order has been delivered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/account/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
