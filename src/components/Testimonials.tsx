
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "The quality of their products is outstanding. Every piece tells a story and adds character to my clients' spaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Home Owner",
    content: "I'm impressed by the attention to detail in every item. Their customer service is exceptional too!",
    image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=150"
  },
  {
    id: 3,
    name: "Meera Agarwal",
    role: "Architect",
    content: "Their minimalist designs perfectly balance form and function. A go-to source for modern interiors.",
    image: "https://images.unsplash.com/photo-1569124589354-615739ae007b?q=80&w=150"
  }
];

const Testimonials = () => {
  const containerRef = useScrollAnimation({ y: 30 });

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center bg-secondary p-6 rounded-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <h3 className="font-medium">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
