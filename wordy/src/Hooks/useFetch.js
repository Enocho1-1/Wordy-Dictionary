import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryWord = "") => {
    const [word, setWord ] = useState("")
    const [pos, setPOS ] = useState("")
    useEffect( () => {
        async function fetchWord(){
          try{
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/${apiPath}${queryWord}?key=${process.env.REACT_APP_API_KEY}`)
            const result = await response.json()
            console.log(result[0])
            setWord(result[0].meta.id)
            setPOS(result[0].fl)
          }catch(error){
            console.log(error)
          }
        }
        fetchWord()
      },[apiPath])

  return { word, pos }
}
