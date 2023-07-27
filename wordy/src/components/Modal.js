

export const Modal = ({children}) => {

  return (
    <>
        <section className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex justify-center items-center z-40" id="modalOverlay">
            <div className="bg-white w-[600px] max-sm:w-[350px] max-[375px]:h-fit lg:h-[500px] lg:overflow-y-scroll">
              {children}
            </div>
        </section>
    </>
  )
}
