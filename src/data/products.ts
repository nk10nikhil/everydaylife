import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Ceramic Vase",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?q=80&w=700",
    category: "Home Decor",
    description: "Elevate your space with this handcrafted ceramic vase, perfect for minimalist interiors. Each piece is uniquely made with careful attention to detail and finished with a matte glaze."
  },
  {
    id: "2",
    name: "Organic Cotton Throw Blanket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=700",
    category: "Home Textiles",
    description: "This luxuriously soft organic cotton throw blanket adds warmth and texture to any room. Ethically made using sustainable practices and natural dyes."
  },
  {
    id: "3",
    name: "Scandinavian Side Table",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?q=80&w=700",
    category: "Furniture",
    description: "This elegant side table combines form and function with its clean lines and solid oak construction. Perfect as a nightstand or accent piece in any room."
  },
  {
    id: "4",
    name: "Linen Lounge Chair",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=700",
    category: "Furniture",
    description: "Experience ultimate comfort with this minimalist lounge chair upholstered in premium natural linen. The solid wood frame provides durability and style."
  },
  {
    id: "5",
    name: "Handcrafted Walnut Desk Organizer",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=700",
    category: "Office",
    description: "Keep your workspace tidy with this beautiful desk organizer made from sustainably harvested walnut. Features compartments for all your essentials."
  },
  {
    id: "6",
    name: "Japanese Ceramic Teapot Set",
    price: 89.99,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F58fd82dbbf629ab224f81b68%2F1661667761984-RFXJW1T19JI0K23LN2T1%2FRed-Clay-Teapot.jpg&f=1&nofb=1&ipt=57abc01fe19c9f2fbacc2b0dde8cc503b3737e2b77ac3055eafefcc4d56eb01c",
    category: "Dining",
    description: "Elevate your tea experience with this handcrafted Japanese ceramic teapot set. Includes one teapot and four matching cups in a harmonious design."
  },
  {
    id: "7",
    name: "Linen Bedding Set",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=700",
    category: "Bedding",
    description: "Transform your bedroom with our premium stone-washed linen bedding set. Naturally temperature-regulating and gets softer with each wash."
  },
  {
    id: "8",
    name: "Minimalist Wall Clock",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?q=80&w=700",
    category: "Home Decor",
    description: "This sleek wall clock features clean lines and a silent sweep movement. The perfect accent piece for any room needing a touch of minimalist elegance."
  },
  {
    id: "9",
    name: "Artisan Ceramic Plates Set",
    price: 119.99,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81uybjGpvDL.jpg&f=1&nofb=1&ipt=1c33ab3ebdbb6cef5065ece6f2038d888dada94febcf2ee02c60c73d617a2bbd",
    category: "Dining",
    description: "This set of four handcrafted ceramic plates brings organic shapes and textures to your dining table. Each piece is unique and microwave-safe."
  },
  {
    id: "10",
    name: "Cotton Macramé Wall Hanging",
    price: 69.99,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F25725494%2Fr%2Fil%2F2a2267%2F2727232538%2Fil_fullxfull.2727232538_p4hn.jpg&f=1&nofb=1&ipt=bfaa3c0fb0c5d32f3fafc81b06d0f995630daf70ddc46a842f305d619ccc1d6a",
    category: "Home Decor",
    description: "Add texture and warmth to any wall with this handcrafted macramé hanging. Made from 100% organic cotton rope by skilled artisans."
  },
  {
    id: "11",
    name: "Wooden Serving Board",
    price: 54.99,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F04%2Fd8%2F99%2F04d8998afbff11ea1d93e326a07cc257.jpg&f=1&nofb=1&ipt=a05adf97d9d1349806c9b4986f082890aca307caa8cf64269f7260cd7402cf01",
    category: "Dining",
    description: "This beautiful serving board is crafted from solid walnut wood. Perfect for presenting cheese, charcuterie, or appetizers at your next gathering."
  },
  {
    id: "12",
    name: "Linen Table Napkins Set",
    price: 39.99,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F7833298%2Fr%2Fil%2Ff67474%2F1482892809%2Fil_fullxfull.1482892809_iap3.jpg&f=1&nofb=1&ipt=b906affff39cc02f78b4f87ffe3e322cf612665c3f4f70bbd27da26267eeb648",
    category: "Dining",
    description: "Set of four stone-washed linen napkins in neutral tones. Adds an elegant, natural touch to your table setting while being environmentally friendly."
  }
];

export const categories = [
  {
    id: "home-decor",
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=700"
  },
  {
    id: "furniture",
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=700"
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=700"
  },
  {
    id: "bedding",
    name: "Bedding",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=700"
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=700"
  }
];
