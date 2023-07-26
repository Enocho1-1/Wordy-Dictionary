
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useList } from '../context/ListContext';
import { useSearchParams } from "react-router-dom"
import { useState } from 'react';
import { useFetch } from "../Hooks/useFetch"
import { NotFound } from "./NotFound"
import { Modal } from '../components/Modal';
import star from "../assests/star.png"
import audioImg from "../assests/speaker-filled-audio-tool.png"
import close from "../assests/close-button.png"


export const Search = ({apiPath}) => {

  const [search] = useSearchParams()
  const [show, setShow] = useState(false)
  const queryWord = search.get("word")

  const {addFavWord} = useList()
  const {word, pos, variants, def, pronounce, aword,  audio, syns, ants} = useFetch(apiPath, queryWord)

  const wordArray = [variants[0], variants[1], variants[2]]

  const notify = () => toast.success("Word Has Been Added!");

  const audioPlay = () => {
    const firstLetter = audio.split('')
    const audioPath = ` https://media.merriam-webster.com/audio/prons/en/us/mp3/${firstLetter[0]}/${audio}.mp3`
    new Audio(audioPath).play()
  }


  return (
    <>
        <section className="absolute z-10 h-full w-full max-[414px]:w-fit flex justify-center items-center">
          {/* Found/Not Found conditional rendering */}
          { def.length === 0 
            ?< NotFound/>
            :  
              <div className=" relative mt-6 p-6 max-[375px]:mt-20 max-[375px]:w-[300px] min-[375px]:max-[420px]:w-[350px] max-[420px]:h-[500px] max-[420px]:overflow-y-scroll" >
                <ToastContainer
                    position="top-left"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                    />
                {/* Favorite Word Button */}
                <span onClick={() => {addFavWord(word,def) ; notify()}} className=" absolute top-5 right-5 hover:cursor-pointer" title="favorite"><img className="animate-bounce h-10 w-10" src={star} alt="" /></span>

                {/* User Word & Part of Speech */}
                <div className="flex flex-col">
                  <aside className="flex max-sm:flex-col ">
                    <h1 className="text-7xl font-extrabold max-sm:text-5xl">{word}</h1>
                    <p className="text-5xl max-sm:text-4xl text-coral font-bold self-end max-sm:self-start max-sm:mx-1 my-[2px] mx-4">{pos}</p>
                  </aside>
                  <aside className="flex max-sm:flex-col mt-2">
                    <p className="mt-4 text-4xl mx-2">{pronounce}</p>
                    <button onClick={audioPlay} type="button" className="flex items-center text-lightRed border border-lightRed hover:bg-red-200 focus:outline-none focus:ring-red-300 font-medium rounded-[45px] text-md max-sm:text-xl max-sm:py-1 mt-4 px-2 text-center align-self-center max-sm:w-fit">{aword}<img className="h-6 mx-2" src={audioImg} alt="audio"/></button>
                  </aside>
                </div>

                {/* Word Variants List */}
                <div className="mt-2 flex flex-wrap">
                  {wordArray.map((item, index) => (
                    <p className="text-2xl text-olive font-bold mx-1" key={index}>{item}</p>
                  ))}
                </div>

                {/* Definition Section */}
                <div className="mt-4 max-w-[700px]">
                  <ol>
                    {def.map((item, index ) => (
                      <div key={index}> 
                        <li className="text-2xl font-semibold my-3" ><span className="text-2xl text-lime mr-1">{index}:</span>{item}</li>
                      </div>
                    
                    ))}
                  </ol>
                </div>
                <button onClick={() => {setShow(!show)}} type="button" className="focus:outline-none text-white bg-olive hover:bg-lightRed rounded-lg text-xl font-sans font-semibold px-5 py-2.5 mt-4  mb-2">Thesaurus</button>
              </div>
          }
      </section>
      {show && 
        <Modal>
          <header className="flex justify-between w-auto border-b">
            <aside className="flex items-center max-sm:flex-col">
                <h1 className="text-5xl m-4 font-extrabold max-sm:m-2">{word}</h1>
                <p className="text-3xl text-coral font-bold mt-4 max-sm:mt-0">{pos}</p>
            </aside>
            <span onClick={() => {setShow(!show)}} className="hover:cursor-pointer self-center mx-2">
                <img src={close} className="h-10" alt="close" />
            </span>
            </header>
            {/* modal content */}
            <div className="mt-4 p-2">
                  <h1 className=" mb-3 text-2xl font-extrabold">Synonyms & Similar Words</h1>
                  <aside className="h-[200px] flex flex-wrap overflow-y-auto">
                      {syns ? syns.map( (item, index) => (
                          <span key={index} className=" h-fit p-2 m-2 bg-coral text-white text-xl rounded-lg">{item}</span>
                      )):""}
                  </aside>
            </div>

            <div className="mt-4 p-2">
                  <h1 className=" mb-3 text-2xl font-extrabold">Antonyms & Near Antonyms</h1>
                  <aside className="h-[200px] flex flex-wrap overflow-y-auto">
                      {ants ? ants.map( (item, index) => (
                          <span key={index} className=" h-fit p-2 m-2 bg-olive text-white text-xl rounded-lg">{item}</span>
                      )) : "" }
                  </aside>
            </div>
        </Modal>
      }
    </>
  
  )
}
