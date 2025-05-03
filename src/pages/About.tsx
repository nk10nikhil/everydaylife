import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-neutral-100">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1500"
              alt="Our workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative container-custom h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl text-white font-serif mb-6 max-w-2xl">
              Our Story
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
              Crafting mindful products for mindful living
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At Every Day Life, we believe in the power of intentional living. Our mission is to create beautiful, functional products that enhance your everyday routines while respecting our planet and its resources.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded in 2018, we set out to fill a gap in the market for mindfully crafted home goods that don't compromise on style or sustainability. Every piece in our collection is thoughtfully designed and crafted with attention to detail.
                </p>
                <p className="text-muted-foreground">
                  We work closely with skilled artisans and ethical manufacturers to ensure that our products meet the highest standards of quality and sustainability. From the materials we source to the packaging we use, every decision is made with care.
                </p>
              </div>
                <div>
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-neutral-200 animate-pulse"></div>
                    <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                      <div className="w-16 h-16 mb-4 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-center mb-2">Thoughtfully Designed</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Our home decor pieces are crafted with intention, bringing warmth and mindfulness to your everyday spaces.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">01</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We believe in creating products that stand the test of time, both in durability and design. Each item is meticulously crafted with attention to every detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">02</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  From responsibly sourced materials to eco-friendly packaging, we strive to minimize our environmental footprint at every step of our production process.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">03</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Ethical Production</h3>
                <p className="text-muted-foreground">
                  We work with artisans and manufacturers who share our commitment to fair labor practices and safe working conditions, ensuring that our products are made ethically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-serif mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & Creative Director",
                  image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=400"
                },
                {
                  name: "Michael Chen",
                  role: "Head of Product Design",
                  image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=400"
                },
                {
                  name: "Olivia Martinez",
                  role: "Sustainability Manager",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
                }
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-serif mb-6">Join Our Journey</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              We're committed to creating a more sustainable and beautiful future. Join us on our journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link to="/shop">Shop Our Collection</Link>
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
