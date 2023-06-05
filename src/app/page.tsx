import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function(){
  return(
    <div>
      <h3 className="font-bold flex justify-center py-4 text-2xl bg-slate-500">
      Hello World! I am Kazim Hussain Full Stack Develper
      </h3>
      <div className="py-2 px-4">
      <Button variant={"destructive"}>This is Button</Button>
      </div>
    </div>
  )
}
