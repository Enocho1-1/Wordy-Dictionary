import { useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"

export const Search = ({apiPath}) => {

  const [search] = useSearchParams()
  const queryWord = search.get("word")
  const {word, pos, variants} = useFetch(apiPath, queryWord)
  console.log(variants)
  return (
    <section className="absolute z-10 h-full w-full flex justify-center items-center">
        <div className="p-6">
          {/* User Word & Part of Speech */}
          <div className="flex items-center p-2">
            <h1 className="text-7xl font-extrabold mx-4">{word}</h1>
            <p className="text-5xl text-coral font-bold self-end my-[2px] ">{pos}</p>
          </div>
          {/* Word Variants List */}
          <div className="mt-2 flex flex-wrap">
             
            {variants.map(item => (
              <p className="text-2xl text-lightRed mx-1">{item}</p>
            ))}
          </div>
        </div>

    </section>
  )
}
