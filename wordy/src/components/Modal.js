import close from "../assests/close-button.png"

export const Modal = ({show,setShow}) => {
  return (
    <>
        <section className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex justify-center items-center z-40" id="overlay">
            <div className="bg-white h-[500px] w-[500px] z-30">
               <header className="flex justify-between w-auto border-b">
                    <span onClick={() => {setShow(!show)}} className="hover:cursor-pointer">
                        <img src={close} className="h-12" alt="close" />
                    </span>
               </header>
            </div>
        </section>
    </>
  )
}
