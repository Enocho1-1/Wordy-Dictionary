import { useNavigate } from "react-router-dom"
import { FavoriteList } from "../components/FavoriteList"

export const Home = () => {
    const navigate = useNavigate()
    // Handle Submit
    const handleSumbit = (event) => {
        event.preventDefault()
        navigate(`/search?word=${event.target.word.value}`)
            
    }
  return (
    <section className="z-50 w-full max-[414px]:w-fit flex flex-col justify-center items-center max-sm:overflow-x-hidden">
        <div className="h-auto w-[750px] max-sm:w-max lg:mt-8 mb-[5em] p-6">
            <form onSubmit={handleSumbit} className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" name="word" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Search Wordy Dictionary..." autoComplete="off" required/>
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-lightRed rounded-lg hover:bg-lime focus:ring-4 focus:outline-none">
                    <svg className="w-5 h-5" fillRule="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
        </div>

        <FavoriteList />
        
    </section>
  )
}
