'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {IoMoonOutline} from "react-icons/io5";
import {useTheme} from "next-themes";
import {useState} from "react";

export default function SwitchDark() {

  const {setTheme} = useTheme()

  const [onDark, setOnDark] = useState(false)

  const handleSwitchDark = () => {
    setOnDark(!onDark)

    if(onDark) setTheme("light")
    else {
      setTheme("dark")
    }
  }

  return (
    <div className="flex items-center space-x-2 ">
      <Switch
        id="switch-dark"
        checked={onDark}
        onCheckedChange={ ()=> handleSwitchDark()}
        className='hover:cursor-pointer'
        aria-readonly

      />
      <Label htmlFor="switch-dark">
        <IoMoonOutline />
      </Label>
    </div>
  )
}
