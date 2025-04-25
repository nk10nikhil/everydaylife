
import { Heart, Star, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Heart,
    title: "Thoughtfully Designed",
    description: "Every piece is crafted with attention to detail and purpose"
  },
  {
    icon: Star,
    title: "Quality Materials",
    description: "We source only the finest sustainable materials"
  },
  {
    icon: Settings,
    title: "Built to Last",
    description: "Durable products that stand the test of time"
  }
];

const Values = () => {
  const containerRef = useScrollAnimation({ y: 30 });

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <value.icon className="mx-auto mb-6 text-primary" size={32} />
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
