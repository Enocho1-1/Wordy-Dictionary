import sad from "../assests/sad.gif"
import sadFace from "../assests/sad.png"

export const NotFound = () => {
  return (
    <section className="max-w-7xl ">
        <div className="p-6">
            <span className="flex justify-center ">
                <h1 className="text-center font-extrabold text-5xl my-6 text-lightRed" id="notFound">Word Not Found</h1>
                <img className="self-center mx-4 h-12 w-16" src={sadFace} alt="" />
            </span>
            <img className="rounded-md" src={sad} alt="" />
        </div>
    </section>
  )
}
