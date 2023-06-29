import { useState } from 'react';
import { Modal } from '../components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import star from "../assests/star.png"
import trash from "../assests/trash-can.png"
import definitionImg from "../assests/open-book.png"
import close from "../assests/close-button.png"


export const FavoriteList = ({favoriteList, setFavorites}) => {

  const [show, setShow] = useState(false)
  const [word, setWord] = useState({})
  const notify = () => toast.error("Word Has Been Deleted!");

  const handleRedefine = (id) => {
    const selectedWord = favoriteList.find( item => item.id === id)
    setWord(selectedWord)
  }

  const handleDelete = (id) => {
    const filteredList = favoriteList.filter( item => item.id !== id )
    setFavorites(filteredList)
  }

  return (
    <>
      <div className="flex flex-col w-[650px] max-sm:w-[350px] p-6">
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
        theme="dark"
        />
        <header className="flex justify-center">
            <div className="flex">
              <img src={star} className="h-6 self-center mr-2" alt="" />
              <h1 className="font-sans font-extrabold text-4xl text-coral" id="favoriteTitle">Favorites</h1>
            </div>
        </header>
        <aside className="mt-4 h-[150px] p-2 w-fit flex justify-center flex-wrap overflow-y-auto">
            {favoriteList.map(item => (
                <div key={item.id} className="flex flex-col justify-center items-center h-[100px] w-[150px] mx-3 my-4" >
                    <p className="text-xl text-coral font-semibold">{item.word}</p>
                    {/* Buttons */}
                    <aside className="mt-4 flex justify-center">
                        <span className="flex w-auto">
                          <button onClick={() => {handleRedefine(item.id);setShow(!show)}} type="button"><img src={definitionImg} className="h-[20px] mx-2 hover:cursor-pointer"  alt="definition" title='definition' /></button>
                          <button onClick={() => {handleDelete(item.id); notify()}} type="button"><img src={trash} className="h-[20px] mx-2 hover:cursor-pointer"  alt="" title="delete"/></button>
                        </span>
                    </aside>
                </div>
            ))}
        </aside>
    </div>
    {show && 
       <Modal>
          <div key={word.id}>
            <header className="flex justify-between w-auto border-b">
            <aside className="flex items-center max-sm:flex-col">
                <h1 className="text-5xl m-4 font-extrabold max-sm:m-2">{word.word}</h1>
                <p className="text-3xl text-coral font-bold mt-4 max-sm:mt-0"></p>
            </aside>
            <span onClick={() => {setShow(!show)}} className="hover:cursor-pointer self-center mx-2">
                <img src={close} className="h-10" alt="close" />
            </span>
            </header>
          </div>
           {/* modal content */}
           <div className="mt-4 p-2">
                  <h1 className=" mb-3 text-2xl font-extrabold">Definition(s):</h1>
                  <ul className="h-[200px] overflow-y-auto">
                    {word.definition.map( (item, index) => (
                     <li key={index} className='text-xl font-medium'><span className="text-2xl inline-block mr-2">{index}:</span>{item}</li>
                    ))}
                  </ul>
            </div>
       </Modal>
       }
    </>
  
  )
}
