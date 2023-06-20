
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from "react-router-dom"
import { useState } from 'react';
import { useFetch } from "../Hooks/useFetch"
import { NotFound } from "./NotFound"
import { Modal } from '../components/Modal';
import star from "../assests/star.png"


export const Search = ({apiPath, favoriteList, setFavorites}) => {

  const [search] = useSearchParams()
  const [show, setShow] = useState(false)
  const queryWord = search.get("word")
  const {word, pos, variants, def, pronounce} = useFetch(apiPath, queryWord)
  const wordArray = [variants[0], variants[1], variants[2]]

  const notify = () => toast.success("Word Has Been Added!");

  const handleFavoriteWord = () => {
    const favWord = {
      id: Math.floor(Math.random() * 10000),
      word: word
    }

    setFavorites([...favoriteList, favWord])
  }

  return (
    <>
        <section className="absolute z-10 h-full max-w-7xl flex justify-center items-center">
          {/* Found/Not Found conditional rendering */}
          { def.length === 0 
            ?< NotFound/>
            :  
              <div className=" relative p-6">
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
                <span onClick={() => {handleFavoriteWord() ; notify()}} className=" absolute top-5 right-5 hover:cursor-pointer" title="favorite"><img className="animate-bounce h-10 w-10" src={star} alt="" /></span>
                {/* User Word & Part of Speech */}
                <div className="flex flex-col">
                  <aside className="flex items-center">
                    <h1 className="text-7xl font-extrabold">{word}</h1>
                    <p className="text-5xl text-coral font-bold self-end my-[2px] mx-4">{pos}</p>
                  </aside>
                  <p className="mt-4 text-4xl mx-2">{pronounce}</p>
                </div>

                {/* Word Variants List */}
                <div className="mt-2 flex flex-wrap">
                  {wordArray.map((item, index) => (
                    <p className="text-2xl text-olive font-bold mx-1" key={index}>{item}</p>
                  ))}
                </div>

                {/* Definition Section */}
                <div className="mt-4">
                  <ol>
                    {def.map((item, index ) => (
                      <div key={index}  className=""> 
                        <li className="text-3xl font-semibold my-3" ><span className="text-2xl text-lime mx-3">{index}:</span>{item}</li>
                      </div>
                    
                    ))}
                  </ol>
                </div>
                <button onClick={() => {setShow(!show)}} type="button" class="focus:outline-none text-white bg-olive hover:bg-lightRed rounded-lg text-xl font-sans font-semibold px-5 py-2.5 mt-4  mb-2">Thesaurus</button>
                </div>
          }
      </section>
      {show && <Modal show={show} setShow={setShow}/>}
    </>
  
  )
}
