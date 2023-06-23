import close from "../assests/close-button.png"

export const Modal = ({show,setShow, word, pos, synonyms,antonyms}) => {

  return (
    <>
        <section className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex justify-center items-center z-40" id="modalOverlay">
            <div className="bg-white w-[500px] max-sm:w-[350px] max-[375px]:h-fit">
               <header className="flex justify-between w-auto border-b">
                    <aside className="flex items-center max-sm:flex-col">
                        <h1 className="text-5xl m-4 font-extrabold max-sm:m-2">{word}</h1>
                        <p className="text-3xl text-coral font-bold mt-4 max-sm:mt-0">{pos}</p>
                    </aside>
                    <span onClick={() => {setShow(!show)}} className="hover:cursor-pointer self-center mx-2">
                        <img src={close} className="h-10" alt="close" />
                    </span>
               </header>
               {/* modal content */}
               <div className="mt-4 p-2">
                    <h1 className=" mb-3 text-2xl font-extrabold">Synonyms & Similar Words</h1>
                    <aside className="h-[200px] flex flex-wrap overflow-y-auto">
                        {synonyms ? synonyms.map( (item, index) => (
                             <span key={index} className=" h-fit p-2 m-2 bg-coral text-white text-xl rounded-lg">{item}</span>
                        )):""}
                    </aside>
               </div>

               <div className="mt-4 p-2">
                    <h1 className=" mb-3 text-2xl font-extrabold">Antonyms & Near Antonyms</h1>
                    <aside className="h-[200px] flex flex-wrap overflow-y-auto">
                        {antonyms ? antonyms.map( (item, index) => (
                             <span key={index} className=" h-fit p-2 m-2 bg-olive text-white text-xl rounded-lg">{item}</span>
                        )) : "" }
                    </aside>
               </div>
            </div>
        </section>
    </>
  )
}
