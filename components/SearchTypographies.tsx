'use client'

import {Input} from "@/components/ui/input";
import React, {ChangeEvent, useState} from "react";
import {WordResponse} from "@/interfaces/word.interface";
import {useDispatch} from "react-redux";
import {onChangeWord} from "@/store/word/wordSlice";
import {CiSearch} from "react-icons/ci";

const URL_DICTIONARY = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default function SearchTypographies() {
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const word: string = e.target.value;
    isValidWord(word)
  };

  const isValidWord = (word: string) => {
    if (/^[a-zA-Z\s]*$/.test(word)) {
      setWord(word);
      setError("");
    } else {
      setError("Only letters are allowed");
    }
  }

  const handleSearch = async () => {
    if (!word.trim()) {
      setError("Invalid field");
      return;
    }

    try {
      const descriptionByWord: WordResponse = await requestWord(word);
      dispatch(onChangeWord(descriptionByWord));
    } catch {
      setError("English words only not found");
      dispatch(onChangeWord([]))
    }
  }

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch().then()
    }
  };

  const requestWord = async (word: string): Promise<WordResponse> => {
    const response = await fetch(`${URL_DICTIONARY}/${word}`);

    if (!response.ok) throw new Error("Error fetching dictionary data");

    return response.json();
  };

  return (
    <div className='flex items-center justify-center p-2 relative'>
      <div className='w-full flex flex-col space-y-2'>
        <Input
          type="text"
          placeholder="search a word..."
          value={word}
          onChange={handleChange}
          className={`bg-[#F4F4F4] dark:text-black w-full ${error ? "border border-red-500" : ""}`}
          onKeyDown={handleKeyDown}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <CiSearch
        size={25}
        className='text-[#916AB5] absolute right-4 top-3 cursor-pointer'
        onClick={handleSearch}
      />
    </div>
  )

}
