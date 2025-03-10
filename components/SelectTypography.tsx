'use client'

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setFont} from "@/store/font/fontSlice";

export function SelectTypography() {

  const dispatch = useDispatch();
  const font = useSelector((state: RootState) => state.font.font);

  const handleChange = (value: string) => {
    dispatch(setFont(value as "sans-serif" | "serif" | "monospace"));
  };

  return (
    <Select defaultValue={font} onValueChange={handleChange}>
      <SelectTrigger className="hover:cursor-pointer" >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='text-purple-500'>Typographies</SelectLabel>
          <SelectItem value="sans-serif">Sans Serif</SelectItem>
          <SelectItem value="serif">Serif</SelectItem>
          <SelectItem value="monospace">Monospace</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
