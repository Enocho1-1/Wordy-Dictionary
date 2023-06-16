import { useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"

export const Search = ({apiPath}) => {

  const [search] = useSearchParams()
  const queryWord = search.get("word")
  const {word, pos, variants, def, pronounce} = useFetch(apiPath, queryWord)

  const wordArray = [variants[0], variants[1], variants[2]]

  return (
    <section className="absolute z-10 h-full w-full flex justify-center items-center">
        <div className="p-6">
          {/* User Word & Part of Speech */}
          <div className="flex flex-col">
            <aside className="flex items-center">
              <h1 className="text-7xl font-extrabold">{word}</h1>
              <p className="text-5xl text-coral font-bold self-end my-[2px] mx-4">{pos}</p>
            </aside>
            <p className="text-4xl mx-2">{pronounce}</p>
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
                <li className="text-3xl font-semibold my-3" key={index}>{item}</li>
              ))}
             </ol>
          </div>
        </div>

    </section>
  )
}
