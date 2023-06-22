import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import star from "../assests/star.png"
import trash from "../assests/trash-can.png"
import definition from "../assests/open-book.png"

export const FavoriteList = ({favoriteList, setFavorites, setWord}) => {

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
    <div className=" flex flex-col justify-center w-[650px] max-sm:w-[350px] p-6">
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
              <img src={star} className="h-6 self-center mx-4" alt="" />
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
                          <button onClick={() => handleRedefine(item.id)} type="button"><img src={definition} className="h-[20px] mx-2 hover:cursor-pointer"  alt="" /></button>
                          <button onClick={() => {handleDelete(item.id); notify()}} type="button"><img src={trash} className="h-[20px] mx-2 hover:cursor-pointer"  alt="" title="delete"/></button>
                        </span>
                    </aside>
                </div>
            ))}
        </aside>

       
    </div>
  )
}
