import { useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"

export const Search = ({apiPath}) => {

  const [search] = useSearchParams()
  const queryWord = search.get("word")
  const { data:word } = useFetch(apiPath, queryWord)
  console.log(word)
  return (
    <section className="absolute z-10 h-full w-full flex justify-center items-center">
        <div className="">
            <h1 className="text-red-500 text-5xl">Search</h1>
        </div>

    </section>
  )
}
