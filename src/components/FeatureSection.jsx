import React from 'react'
import { HandCoins, Armchair,MapPin,Headset,Truck} from 'lucide-react'
import FeatureCard from './FeatureSection/FeatureCard';
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
]
function FeatureSection() {
  return (
    <div>
      <h2 className='text-center text-3xl pt-[100px]'>why we choose buying a furniture service</h2>

      <div className=' flex flex-row flex-wrap  justify-center mt-10 '>
        {FEATURES_CONFIG.map((featureObj)=>{
        const {title,description,icon}=featureObj;
        return (
          <FeatureCard 
          title={title} 
          description={description} 
          icon={icon} 
          key={title}/>
        );
        })} 
    </div>
    </div>
  );
}

export default FeatureSection
