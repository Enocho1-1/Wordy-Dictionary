import { useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"

export const Search = ({apiPath}) => {

  const [search] = useSearchParams()
  const queryWord = search.get("word")
  const {word, pos} = useFetch(apiPath, queryWord)
  console.log(pos)
  return (
    <section className="absolute z-10 h-full w-full flex justify-center items-center">
        <div className="p-6">
          <div className="flex items-center p-2">
            <h1 className="text-7xl font-extrabold mx-4">{word}</h1>
            <p className="text-5xl text-coral font-bold self-end my-[2px] ">{pos}</p>
          </div>
        </div>

    </section>
  )
}
