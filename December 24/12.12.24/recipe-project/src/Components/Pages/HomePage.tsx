import img from "../../assets/img-1.jpg"
import second from "../../assets/img-2.jpg"
import third from "../../assets/img-3.jpg"
import { Card, CardContent } from "@/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"


function HomePage() {
    const imges="w-[350px] rounded-lg "
    const cards ="flex gap-4 text-center items-center"
  return (
    <>
     <div className="flex justify-center text-white flex-col italic">
        <h1 className="text-center text-2xl text-orange-300">"Delicious Recipes for Every Occasion"</h1>
         <Carousel className="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
             </Carousel>
             </div>
         
             <div className="flex flex-col gap-[250px] p-4 text-slate-400 italic">
         <div className={cards}>
             <img className={imges}
             src={img} alt="?" />
             <p>"A comforting and wholesome dish that combines tender, juicy chicken thighs with caramelized sweet potatoes. Slow-roasted with aromatic herbs like rosemary and thyme, this meal is a perfect balance of savory and sweet. A drizzle of olive oil and a hint of garlic elevate the natural flavors, making it a family favorite for cozy dinners."</p>
         </div>
         <div className={cards}>
             <p>
             "A light and elegant dish featuring thinly sliced raw beef, delicately seasoned with a drizzle of olive oil and fresh lemon juice. Topped with shaved Parmesan, arugula, and capers, this Italian classic is a refreshing starter that showcases simplicity and sophistication in every bite."
                </p>
             <img className={imges}
             src={second} alt="?" />
         </div>
         <div className={cards}>
             <img src={third} alt="?"
             className={imges} />
             <p>"A juicy, flavorful beef patty served on a toasted bun with all the classic toppings: crisp lettuce, ripe tomatoes, tangy pickles, and melted cheese. Add your favorite condiments—ketchup, mustard, or mayo—for the ultimate comfort food. Perfectly customizable, this iconic burger is a guaranteed crowd-pleaser for any occasion."</p>
         </div>
             </div>

    
</>
  )
}

export default HomePage