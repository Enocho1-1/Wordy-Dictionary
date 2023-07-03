import { AllLinks } from "./Routes/AllLinks";
import { Link } from "react-router-dom";
import Logo from "./assests/dictionary.png"
import videoBg from "./assests/videoBg.mp4"

function App() {
  return (
    <main className="relative w-full h-screen flex justify-center overflow-x-hidden">
       <header className="z-20 absolute w-fit top-[12%] max-sm:top-[5%] max-[360px]:top-[5%] max-[375px]:top-[1%] min-[390px]:max-[414px]:top-[5%] max-[540px]:top-[2%]">
            <div className="flex max-[414px]:w-[300px]">
                <Link to="/"><img src={Logo} className="h-12 max-[414px]:h-14 max-[414px]:mt-4 max-[414px]:ml-2 max-sm:h-9 mx-4  " alt="" /></Link>
                <h1 className=" font-sans font-extrabold text-7xl max-[414px]:text-5xl max-[414px]:ml-4 text-coral" id="homeTitle">Wordy Dictionary</h1>
            </div>
        </header>
      <div className="absolute top-0 left-0 h-full w-full z-10" id="overlay"></div>
      < video src={videoBg} className="absolute h-full w-full object-cover z-0" autoPlay loop muted />
      <AllLinks /> 
    </main>
  );
}

export default App;
