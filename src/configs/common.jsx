import { HandCoins, Armchair,MapPin,Headset,Truck} from 'lucide-react';
const FEATURES_CONFIG =[
  {
    title:"Low Price",
    description:"We offer competitive pricing on all our furniture products.",
   icon:<HandCoins  className='h-[40px] w-[40px]  text-green-500'/>,
   
  },
  {
    title:"Wide Selection",
    description:"Our extensive catalog features a diverse range of furniture styles, from modern to classic.",
    icon:<Armchair className='h-[40px] w-[40px]  text-red-500'/>,
   
  },{
    title:"Quality Assurance",
    description:"We prioritize quality in every piece of furniture we sell, partnering with trusted manufacture.",
    icon:<MapPin className='h-[40px] w-[40px] text-yellow-500'/>,
 
  },
  {
    title:"24/7 Support",
    description:"Our customer support team is available around the clock to assist you with any inquiries, orders.",
    icon:<Headset className='h-[40px] w-[40px] text-blue-500'/>,
   
  },
  {
    title:"Fast Delivery",
    description:"We offer quick and reliable delivery services, ensuring your furniture arrives safely.",
    icon:<Truck className='h-[40px] w-[40px] text-orange-400'/>,
  
  }
];

const REVIEW_CONFIG=[{
    name:"Priti Jadhav",
    review:"Great furniture store with a wide selection of stylish and affordable pieces.",
    rating:4.5,
     avatar: "https://i.pravatar.cc/150?img=5"
   
   
},
{
    name:"John Doe",
    review:"The quality of the furniture I purchased exceeded my expectations. Highly recommend!",
    rating:5,
      avatar: "https://i.pravatar.cc/150?img=4"

},
{
    name:"Jane Smith",
    review:"Excellent customer service and fast delivery. I'm very satisfied with my purchase.",
    rating:4,
    avatar: "https://i.pravatar.cc/150?img=8",
   
}
]
export {FEATURES_CONFIG,REVIEW_CONFIG};
