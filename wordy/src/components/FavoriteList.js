

export const FavoriteList = ({favoriteList}) => {
  return (
    <div className=" flex flex-col justify-centerw-[650px] p-6">
        <h1 className="text-3xl text-coral font-bold my-3 text-center" id="favoriteTitle">Favorites</h1>
        <aside className="mt-4 h-[150px] p-2 w-[450px] flex justify-center flex-wrap overflow-y-scroll">
            {favoriteList.map(item => (
                <div key={item.id} className="flex flex-col justify-center items-center h-[100px] w-[150px] mx-3 my-4">
                    <p className="text-xl text-coral font-semibold">{item.word}</p>
                </div>
            ))}
        </aside>
    </div>
  )
}
