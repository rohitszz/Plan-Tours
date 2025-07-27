import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
<div className="flex items-center w-screen flex-col border-2">
    <div className="head my-[2.7rem] w-[31rem] h-[5.6rem] text-[48px] border-[6px] flex items-center justify-center border-dashed border-blue-700 rounded-[23px] font-bold ">Plan With Love</div>

  <div className="tourcard flex flex-wrap justify-center items-centerr gap-[2rem] mx-[5rem]">
    {tours.map((tour) => (
       
      <Card key={tour.id} {...tour} removeTour={removeTour} />
    ))}
 
</div>
    

    </div>
  );
}

export default Tours;
