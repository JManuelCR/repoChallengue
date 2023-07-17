import { assideOptions } from "../data/assideLeftOptions";
import { logos } from "../data/networklogos";

export interface Props {
    icon: string;
    option: string;
  }
  export interface NetworkLogos {
    icon: string;
  }

export default function CanvaAsideLeft () {
    return (
       <>
       <ul>
       {assideOptions
         .filter((item, index, arr) => index < 13)
         .map((item, index) => {
           return (
             <a href="">
               <li
                 className="flex p-2 justify-start gap-2 cursor-pointer relative"
                 key={`item-${index}`}
               >
                <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
                 <span className="w-6 ">
                   <img
                     className="w-full h-auto"
                     src={item.icon}
                     alt="Option icon"
                   />
                 </span>
                 <p className="text-4 font-normal text-[#404040]">
                   {item.option}
                 </p>
                 
               </li>
             </a>
           );
         })}
     </ul>
     <nav className="mb-4">
       <h2 className="font-bold text-[#404040] p-2 text-4 ps-3">Other</h2>
       <ul>
         {assideOptions
           .filter((item, index, arr) => index > 12)
           .map((item, index) => {
             return (
               <a href="">
                 <li
                   className="flex p-2 justify-start gap-2 relative"
                   key={`item-nav-${index}`}
                 >
                        <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
                   <span className="w-6">
                     <img
                       className="w-full h-auto"
                       src={item.icon}
                       alt="Option icon"
                     />
                   </span>
                   <p className="text-4 font-normal text-[#404040]">
                     {item.option}
                   </p>
                 </li>
               </a>
             );
           })}
       </ul>
     </nav>
     <div className=" flex mb-4">
       {logos.map((logo, index) => {
         return (
           <a key={`logo-${index}`} className="p-2 relative" href="">
                  <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
             <img className="w-6 h-6" src={logo.icon} alt="" />
           </a>
         );
       })}
     </div></> 
    )
}

