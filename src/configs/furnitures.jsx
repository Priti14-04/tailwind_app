import Img1 from "../assets/furnitureImg/1.jpg";
import Img2 from "../assets/furnitureImg/2.jpg";
import Img3 from "../assets/furnitureImg/3.jpg";
import Img4 from "../assets/furnitureImg/4.jpg";    
import Img5 from "../assets/furnitureImg/5.jpg";
import Img6 from "../assets/furnitureImg/6.jpg";


const FURNITURE_CONFIG = [
    {
        id: 1,
        name: "Dining Table 1",
        description: "A stylish table for family meals and gatherings.",
        rentalPrice: "₹3000/month",
        rating: 4.5,
        category: "dining",
        imageUrl: [Img1, Img2, Img3, Img4]
    },
    {
        id: 2,
        name: "Sofa Set 1",
        description: "Comfortable sofa set perfect for your living room.",
        rentalPrice: "₹4500/month",
        rating: 4.7,
        category: "sofa",
        imageUrl: [Img4, Img5, Img6, Img1]
    },
    {
        id: 3,
        name: "King Size Bed",
        description: "Spacious and comfy bed for restful sleep.",
        rentalPrice: "₹5000/month",
        rating: 4.6,
        category: "bed",
        imageUrl: [Img6, Img1, Img2, Img3]
    },
    {
        id: 4,
        name: "Office Chair",
        description: "Ergonomic chair for home office and workspaces.",
        rentalPrice: "₹1500/month",
        rating: 4.4,
        category: "chair",
        imageUrl:[Img5, Img3, Img4, Img2]
    },
    {
        id: 5,
        name: "Wardrobe 1",
        description: "Spacious wardrobe with multiple compartments.",
        rentalPrice: "₹3500/month",
        rating: 4.5,
        category: "wardrobe",
        imageUrl: [Img2, Img4, Img6, Img1]
    },
    {
        id: 6,
        name: "Study Desk",
        description: "Perfect desk for studying or working from home.",
        rentalPrice: "₹2000/month",
        rating: 4.3,
        category: "desk",
        imageUrl: [Img3, Img1, Img5, Img2]
    },
    {
        id: 7,
        name: "Bookshelf",
        description: "Modern bookshelf for your books and decor.",
        rentalPrice: "₹1800/month",
        rating: 4.2,
        category: "shelf",
        imageUrl:[  Img4, Img2, Img1, Img3]
    },
    {
        id: 8,
        name: "Recliner Chair",
        description: "Relax in style with this comfy recliner.",
        rentalPrice: "₹2500/month",
        rating: 4.6,
        category: "sofa",
        imageUrl: [Img5, Img6, Img3, Img4]
    },
    {
        id: 9,
        name: "Coffee Table",
        description: "Perfect center table for your living room.",
        rentalPrice: "₹1200/month",
        rating: 4.3,
        category: "table",
        imageUrl: [Img1, Img3, Img5, Img6]
    },
    {
        id: 10,
        name: "Dining Table 2",
        description: "Classic dining table with wooden finish.",
        rentalPrice: "₹3200/month",
        rating: 4.5,
        category: "dining",
        imageUrl:[  Img2, Img4, Img6, Img1]
    }
  
];

export { FURNITURE_CONFIG };
