import star from "../assests/star.png"

export const FavoriteList = ({favoriteList}) => {
  return (
    <div className=" flex flex-col justify-center w-[650px] p-6">
        <header className="flex justify-center">
            <div className="flex">
              <img src={star} className="h-6 self-center mx-4" alt="" />
                <h1 className="font-sans font-extrabold text-4xl text-coral" id="favoriteTitle">Favorites</h1>
            </div>
        </header>
        <aside className="mt-4 h-[150px] p-2 w-fit flex justify-center flex-wrap overflow-y-scroll">
            {favoriteList.map(item => (
                <div key={item.id} className="flex flex-col justify-center items-center h-[100px] w-[150px] mx-3 my-4">
                    <p className="text-xl text-coral font-semibold">{item.word}</p>
                </div>
            ))}
        </aside>
    </div>
  )
}
