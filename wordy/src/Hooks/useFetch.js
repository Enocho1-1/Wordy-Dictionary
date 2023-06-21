import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryWord = "") => {
    const [word, setWord ] = useState("")
    const [pos, setPOS ] = useState("")
    const [pronounce, setPronounce] = useState("")
    const [aword, setAword] = useState("")
    const [audio, setAudio] = useState("")
    const [def, setDef] = useState([])
    const [variants, setVariants ] = useState([])
    const [syns, setSyns] = useState([])
    const [ants, setAnts] = useState([])
    useEffect( () => {
        async function fetchWord(){
          try{
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/${apiPath}${queryWord}?key=${process.env.REACT_APP_API_KEY}`)
            const result = await response.json()
            
            setWord(result[0].meta.id)
            setPOS(result[0].fl)
            setPronounce(result[0].hwi.hw)
            setAword(result[0].hwi.prs[0].mw)
            setAudio(result[0].hwi.prs[0].sound.audio)
            setDef(result[0].shortdef)
            setVariants(result[0].meta.stems)
          }catch(error){
            console.log("Word not found")
          }
        }
        fetchWord()
      },[apiPath])

      useEffect( () => {
        async function fetchTword(){
          try{
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${queryWord}?key=1ba87066-75da-464f-8573-b253a2504151`)
            const result = await response.json()
            setSyns(result[0].meta.syns[0])
            setAnts(result[0].meta.ants[0])
            // console.log(result)
          } catch(error){
            console.log(error)
          }
        }
        fetchTword()
      }, [queryWord])

  return { word, pos, variants, def, pronounce, aword, audio, syns, ants }
}
