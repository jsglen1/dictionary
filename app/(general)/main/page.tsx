'use client'

import SearchTypographies from "@/components/SearchTypographies";
import DisplayInformationWord from "@/components/DisplayInformationWord";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function MainPage() {

  const {word} = useSelector((state: RootState) => state.word)

  return (
    <div className='mb-4'>
      <SearchTypographies/>
      {word.length > 0 && (<DisplayInformationWord/>)}
    </div>
  )
}



