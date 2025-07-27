import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){

    const [readmore,setReadmore]=useState(false);
    const description=readmore? info:`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card  my-[0rem] w-[21.9rem] justify-center items-center">

        <div className="cardchild flex items-center justify-center flex-col w-[21.5rem]  ">

        <img src={image} className="image h-[21rem] w-[20.8rem] object-cover "></img>
        
        <div className="flex flex-col items-start gap-3 my-5 ">
        <div className="mx-4 text-green-600 text-[1.3rem] font-bold">₹{price}</div>

        <div className="name font-bold text-[1.5rem] mx-3">{name}</div>
        
        <div className="desc mx-3">{description}

        <span onClick={readmoreHandler} className=" text-blue-500 font-semibold">{readmore==false?"read more":"--show less"}</span>

        </div>
        <div className="flex items-center justify-center h-full w-full">
        <button onClick={()=>{removeTour(id)}} className="notInt flex items-center justify-center">Not Interested</button> 
       </div>
        </div>

        </div>

        </div>
    )

}

export default Card;