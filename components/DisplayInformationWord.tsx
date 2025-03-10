'use client'

import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

import PlayButton from "@/components/PlayButton";
import MeaningSection from "@/components/MeaningSection";
import {Meaning} from "@/interfaces/word.interface";

export default function DisplayInformationWord() {
  const {word} = useSelector((state: RootState) => state.word)

  const wordMain: string = word[0].word ?? ''
  const wordPhonetic: string = word[0].phonetic ?? '';
  const meaning: Meaning[] = word[0].meanings ?? []


  return (
    <>
      <div className='flex flex-col p-2 space-y-4'>

        <div className='flex justify-between items-center'>
          <div className='flex flex-col space-y-2'>
            <p className='text-6xl font-bold '>
              {wordMain}
            </p>
            <p className='text-xl text-purple-500'>
              {wordPhonetic}
            </p>
          </div>
          <PlayButton phonetics={word[0].phonetics}/>
        </div>

        <MeaningSection meaning={meaning} />

      </div>
    </>
  )
}