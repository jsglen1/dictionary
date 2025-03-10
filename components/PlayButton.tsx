import {CgPlayButton} from "react-icons/cg";
import {Phonetic} from "@/interfaces/word.interface";
import {useEffect} from "react";

interface Props {
  phonetics: Phonetic[]
}

export default function PlayButton({phonetics}: Props) {

  const handlePlay = () => {
    if (!phonetics) return

    const audioUrl: string | undefined = getAudio(phonetics)

    if (!audioUrl) return

    const audio = new Audio(audioUrl);
    audio.play().catch((error) => alert(`Error playing audio: ${error}`));
  };

  const getAudio = (phonetics: Phonetic[]): string | undefined =>
    phonetics?.find(p => p.audio)?.audio;

  useEffect(() => {
    getAudio(phonetics)
  }, [phonetics])

  return (
    <CgPlayButton
      size={80}
      className='text-purple-600 bg-purple-200 rounded-full cursor-pointer'
      onClick={handlePlay}
    />
  )
}