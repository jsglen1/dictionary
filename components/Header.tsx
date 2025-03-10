import {SelectTypography} from "@/components/SelectTypography";
import SwitchDark from "@/components/SwitchDark";
import {LuBookMinus} from "react-icons/lu";


export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between h-[4rem] p-2 w-full">
        <LuBookMinus  size={25}  />
        <div className='flex items-center justify-center gap-2'>
          <SelectTypography/>
          <div className='border h-[1.5rem]'/>
          <SwitchDark/>
        </div>
      </nav>
    </header>
  )
}