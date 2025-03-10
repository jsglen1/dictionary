import {ReactNode} from "react";
import Header from "@/components/Header";

export default function GeneralLayout({children}: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='p-2 w-full md:min-w-[768px] md:max-w-[1024px]  '>
        <Header/>
        {children}
      </div>
    </div>
  )
}