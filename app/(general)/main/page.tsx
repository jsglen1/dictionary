'use client'

import {CiSearch} from "react-icons/ci";
import SearchTypographies from "@/components/SearchTypographies";
import DisplayInformationWord from "@/components/DisplayInformationWord";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function MainPage() {

  const {word} = useSelector((state: RootState) => state.word)

  return (
    <div className='mb-4'>

      <div className='flex items-center justify-center p-2 relative'>
        <SearchTypographies/>
        <CiSearch size={25} className='text-[#916AB5] absolute right-4 top-3'/>
      </div>

      {word.length > 0 && (<DisplayInformationWord/>)}

    </div>
  )
}



