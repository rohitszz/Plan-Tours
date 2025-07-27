import { useEffect, useState } from "react";
import data from "./data"
import "./App.css";
import Tours from "./components/Tours";

function App() {

  const [tours,setTours]=useState(data);
   
  function removeTour(id){
  const newTour=tours.filter((tour) => tour.id!==id);
    setTours(newTour);
    }

    if(tours.length==0){
      return (<div className="noTours h-screen w-screen content-center flex items-center justify-center flex-col gap-y-5 ">
      <h2 className="font-bold text-[1.8rem]">No Tours Left</h2>
        <button onClick={()=>setTours(data)} className="btn rounded-[10px] border-black text-[1.2rem] w-[10rem] h-[2.5rem] ">Refresh</button>
      </div>);
    }
  
  return (
    <Tours tours={tours} removeTour={removeTour}></Tours>
  );
}

export default App;
