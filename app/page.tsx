import Header from "@/app/_components/header";
import {Button} from "@/app/_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <Header/>
        <div className='text-center'>
            <h1>WorkoutApp</h1>
            <p>Sweat,smile and repeat</p>
            <span>Checkout the most effective exercises</span>
            <Button><Link href={`/exercises`}>Explore Exercises</Link></Button>
        </div>
      </>

  );
}
