'use client';

import {Button} from "@/components/ui/button"
import {
  Dialog, DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {FaHistory} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {clearHistory} from "@/store/word/wordSlice";

interface Props {
  onSearchWord: (word: string) => void;
}

export function DialogHistory({onSearchWord}: Props) {

  const wordHistory = useSelector((state: RootState) => state.word.wordHistory);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaHistory/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>History word</DialogTitle>

          {wordHistory.length > 0 ? (
            <div className='flex flex-col space-y-3 pt-4'>
              {wordHistory.map((word, index) => (
                <DialogClose asChild key={index}>
                  <Button
                    type="button"
                    onClick={() => onSearchWord(word)}
                    className='hover:cursor-pointer ml-4'
                  >
                    {word}
                  </Button>
                </DialogClose>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No history available</p>
          )}

        </DialogHeader>
        <DialogFooter className='flex flex-row justify-between items-center w-full'>

          {wordHistory.length <= 0 && (
            <DialogClose asChild>
              <Button
                type="button"
                className='hover:cursor-pointer max-w-[7rem] ml-auto bg-purple-900 hover:bg-purple-800'
              >
                Close
              </Button>
            </DialogClose>
          )}

          {wordHistory.length > 0 && (
            <Button
              type="button"
              className='hover:cursor-pointer max-w-[7rem] ml-auto bg-purple-900 hover:bg-purple-800'
              onClick={handleClearHistory}
            >
              Clear History
            </Button>
          )}

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
