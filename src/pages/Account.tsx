
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, ShoppingBag, Heart, LogOut, CreditCard, Settings, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.hash ? location.hash.substring(1) : "profile"
  );
  
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password change if attempting to change password
    if (profile.newPassword) {
      if (!profile.currentPassword) {
        toast.error("Please enter your current password");
        return;
      }
      if (profile.newPassword !== profile.confirmPassword) {
        toast.error("New passwords do not match");
        return;
      }
      if (profile.newPassword.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
    }
    
    // Simulate saving profile
    setTimeout(() => {
      toast.success("Profile updated successfully");
      setIsEditing(false);
      setProfile({
        ...profile,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }, 500);
  };
  
  const handleLogout = () => {
    toast.success("You have been logged out");
    navigate("/");
  };
  
  // Sample orders
  const orders = [
    { 
      id: "ORD12345678", 
      date: "2023-04-18", 
      status: "Delivered", 
      total: 129.99,
      items: [
        { name: "Minimalist Ceramic Vase", price: 49.99, quantity: 1 },
        { name: "Organic Cotton Throw Blanket", price: 79.99, quantity: 1 }
      ]
    },
    { 
      id: "ORD87654321", 
      date: "2023-03-05", 
      status: "Delivered", 
      total: 89.99,
      items: [
        { name: "Japanese Ceramic Teapot Set", price: 89.99, quantity: 1 }
      ]
    }
  ];
  
  // Sample addresses
  const addresses = [
    {
      id: "addr1",
      default: true,
      name: "John Doe",
      line1: "123 Main St",
      line2: "Apt 4B",
      city: "Anytown",
      state: "ST",
      zip: "12345",
      country: "United States"
    },
    {
      id: "addr2",
      default: false,
      name: "John Doe",
      line1: "456 Work Ave",
      line2: "",
      city: "Business City",
      state: "ST",
      zip: "67890",
      country: "United States"
    }
  ];
  
  // Sample wishlist items
  const wishlist = [
    {
      id: "1",
      name: "Scandinavian Side Table",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a694?q=80&w=700",
    },
    {
      id: "2",
      name: "Minimalist Wall Clock",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1563861826100-c596f5cb19fe?q=80&w=700",
    },
    {
      id: "3",
      name: "Cotton Macramé Wall Hanging",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?q=80&w=700",
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container-custom py-10">
        <h1 className="text-3xl font-serif mb-10">My Account</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="border-b">
            <TabsList className="bg-transparent -mb-px">
              <TabsTrigger value="profile" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <User size={18} className="mr-2" /> Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <ShoppingBag size={18} className="mr-2" /> Orders
              </TabsTrigger>
              <TabsTrigger value="addresses" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <MapPin size={18} className="mr-2" /> Addresses
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Heart size={18} className="mr-2" /> Wishlist
              </TabsTrigger>
              <TabsTrigger value="payment" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <CreditCard size={18} className="mr-2" /> Payment Methods
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                <Settings size={18} className="mr-2" /> Settings
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-8">
            <div className="max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Profile Information</h2>
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                ) : (
                  <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                )}
              </div>
              
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">First Name</h3>
                      <p>{profile.firstName}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">Last Name</h3>
                      <p>{profile.lastName}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Email Address</h3>
                    <p>{profile.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Phone Number</h3>
                    <p>{profile.phone}</p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" onClick={handleLogout}>
                      <LogOut size={18} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={profile.firstName}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={profile.lastName}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={profile.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="font-medium mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            value={profile.currentPassword}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            value={profile.newPassword}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={profile.confirmPassword}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button type="submit">Save Changes</Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Order History</h2>
              
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map(order => (
                    <div key={order.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-secondary p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-1">Order Number</h3>
                          <p className="font-medium">{order.id}</p>
                        </div>
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-1">Date</h3>
                          <p>{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-1">Status</h3>
                          <span className="inline-block bg-green-100 text-green-800 py-1 px-2 rounded text-sm">
                            {order.status}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-1">Total</h3>
                          <p>${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-medium mb-4">Items</h3>
                        <div className="space-y-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between">
                              <div>
                                <p>{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                              <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <Button asChild>
                            <Link to={`/order/${order.id}`}>View Order Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-medium mb-2">No orders yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't placed any orders yet.
                  </p>
                  <Button asChild>
                    <Link to="/shop">Start Shopping</Link>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Saved Addresses</h2>
                <Button>Add New Address</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map(address => (
                  <div key={address.id} className="border rounded-lg p-6 relative">
                    {address.default && (
                      <span className="absolute top-2 right-2 bg-primary/10 text-primary text-xs py-1 px-2 rounded">
                        Default
                      </span>
                    )}
                    <h3 className="font-medium mb-2">{address.name}</h3>
                    <p>{address.line1}</p>
                    {address.line2 && <p>{address.line2}</p>}
                    <p>{address.city}, {address.state} {address.zip}</p>
                    <p>{address.country}</p>
                    
                    <div className="mt-4 pt-4 border-t flex gap-4">
                      <Button size="sm" variant="outline">Edit</Button>
                      {!address.default && (
                        <Button size="sm" variant="outline">Set as Default</Button>
                      )}
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Your Wishlist</h2>
              
              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {wishlist.map(item => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                      <div className="aspect-square">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="text-muted-foreground mb-4">${item.price.toFixed(2)}</p>
                        <div className="flex gap-2">
                          <Button className="flex-1">Add to Cart</Button>
                          <Button variant="outline" className="text-destructive">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-medium mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-6">
                    Save items you love to your wishlist.
                  </p>
                  <Button asChild>
                    <Link to="/shop">Explore Products</Link>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Payment Methods Tab */}
          <TabsContent value="payment">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Payment Methods</h2>
                <Button>Add Payment Method</Button>
              </div>
              
              <div className="text-center py-10">
                <h3 className="font-medium mb-2">No saved payment methods</h3>
                <p className="text-muted-foreground mb-6">
                  You haven't saved any payment methods yet.
                </p>
                <Button>Add Payment Method</Button>
              </div>
            </div>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-xl font-medium">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about your orders and products
                    </p>
                  </div>
                  <div>
                    <Button variant="outline">Manage Preferences</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Change Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Update your account email address
                    </p>
                  </div>
                  <div>
                    <Button variant="outline">Update Email</Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Close Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <div>
                    <Button variant="outline" className="text-destructive hover:text-destructive">
                      Close Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
