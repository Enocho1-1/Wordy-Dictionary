import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryWord = "") => {
    const [word, setWord ] = useState("")
    const [pos, setPOS ] = useState("")
    const [pronounce, setPronounce] = useState("")
    const [def, setDef] = useState([])
    const [variants, setVariants ] = useState([])
    useEffect( () => {
        async function fetchWord(){
          try{
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/${apiPath}${queryWord}?key=${process.env.REACT_APP_API_KEY}`)
            const result = await response.json()
            
            setWord(result[0].meta.id)
            setPOS(result[0].fl)
            setPronounce(result[0].hwi.hw)
            setDef(result[0].shortdef)
            setVariants(result[0].meta.stems)
    
          }catch(error){
            console.log("Word not found")
          }
        }
        fetchWord()
      },[apiPath])

  return { word, pos, variants, def, pronounce }
}
