"use client"

import { useState } from "react"

export default function Content() {

    function handleEvent(event: any) {
        setText(event.target.value)
    }
    const handleLowClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase)
    }
    const handleUppClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase)
    }
    const handleCapClick = () => {
        let capitalized = text.split(" ").map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ")

        setText(capitalized)

    }
    const clearText = () => {
        setText("")
    }
    const [text, setText] = useState("hi")
    return (
        <div>
            <div className="p-10">
                <h1 className="font-extrabold  xs:text-2xl xs:text-center md:text-left md:text-3xl my-5 text-white ">ENTER THE TEXT TO ANALYZE</h1>
                <textarea className="py-8 px-8 rounded-md border-2 b w-full h-64 border-gray-500 my-5" rows={4} value={text} onChange={handleEvent}></textarea>
                <div className="md:flex md:flex-row gap-7 xs:grid xs:grid-cols-2">
                    <button onClick={handleLowClick} className=" xs:w-full md:w-[20%]  md:py-4 rounded-lg font-bold bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:py-3 hover:border-blue-600 hover:border-2">Convert to LowerCase</button>
                    <button onClick={handleUppClick} className=" xs:w-full md:w-[20%]  py-4 rounded-lg font-bold bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:py-3 hover:border-blue-600 hover:border-2">Conver to UpperCase</button>
                    <button onClick={handleCapClick} className=" xs:w-full md:w-[20%] py-4 rounded-lg font-bold bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:py-3 hover:border-blue-600 hover:border-2">Convert to Capitalized</button>
                    <button onClick={clearText} className=" xs:w-full md:w-[20%] py-4 rounded-lg font-bold bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:py-3 hover:border-blue-600 hover:border-2">Clear Text</button>
                </div>
                <br /><br />
                <hr />
                <div className="text-left pb-7">

                    <h1 className="font-extrabold text-2xl mt-9 text-white">YOUR TEXT SUMMARY :</h1>
                    <p className="text-white my-4">Your Text have (<b> {text.length}  </b>) Characters</p>
                    <p className="text-white my-4">Your Text have (<b> {text.split(" ").length} </b> ) Words</p>
                    <p className="text-white my-4">Your Text have (<b> {text.split(".").length || text.split(",").length} </b>) Sentences</p>
                    <br /><br />
                    <hr />
                    <h2 className="font-extrabold text-2xl mt-5 text-white">Preview Text</h2>
                    <p className="text-white">{text}</p>
                </div>
            </div>
        </div>
    )
}