import {Meaning} from "@/interfaces/word.interface";
import {GoDotFill} from "react-icons/go";

interface Props {
  meaning: Meaning[]
}

export default function MeaningSection({meaning}: Props) {


  return (
    <div className='flex flex-col space-y-4'>
      {meaning.map((section, index) => (
        <div key={index}>
          <div className='flex items-center justify-center'>
            <p className='font-bold mr-4'>{section.partOfSpeech}</p>
            <div className='flex flex-1 border border-t mt-1'/>
          </div>

          <div className='flex flex-col pt-5'>
            <p className='opacity-50'>Meaning</p>
            <div className='flex flex-col space-y-4 ml-4 pt-4'>
              {section.definitions.map((definition, i) => (
                <div key={i} className='flex flex-col items-start justify-start '>
                  <div className='flex items-start justify-start'>
                    <GoDotFill size={10} className='mr-2 mt-2'/>
                    <p>{definition.definition}</p>
                  </div>

                  {definition.example && <p className='opacity-50 ml-5'>
                    {`"${definition.example}"`}
                  </p>}

                </div>
              ))}
            </div>
          </div>

          {section.synonyms.length > 0 && <div className='flex space-x-4 pt-5'>
              <p className='opacity-50'>Synonyms </p>
              <span className='text-purple-800'>{section.synonyms[0]}</span>
          </div>}

        </div>
      ))}
    </div>
  )
}