import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryWord = "") => {
    const [data, setData] = useState([])

    useEffect( () => {
        async function fetchWord(){
          try{
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/${apiPath}${queryWord}?key=45545920-5e60-4798-8860-6f94563da892`)
            const result = await response.json()
            setData(result[0].meta)
          }catch(error){
            console.log(error)
          }
        }
        fetchWord()
      },[apiPath])

  return { data }
}
