import { AllLinks } from "./Routes/AllLinks";
import { Link } from "react-router-dom";
import Logo from "./assests/dictionary.png"
import videoBg from "./assests/videoBg.mp4"

function App() {
  return (
    <main className="relative w-full h-screen flex justify-center">
       <header className="z-20 absolute w-fit top-[12%] max-sm:top-[10%] max-[360px]:top-[5%] min-[360px]:max-[375px]:top-[5%] min-[390px]:max-[414px]:top-[5%] lg:top-[2%]">
            <div className="flex max-[414px]:w-fit">
                <Link to="/"><img src={Logo} className="h-12 max-[414px]:mt-4 max-sm:h-9 mx-4  " alt="" /></Link>
                <h1 className=" font-sans font-extrabold text-7xl max-[414px]:text-4xl max-[414px]:mt-3 max-[414px]:self-center text-coral" id="homeTitle">Wordy Dictionary</h1>
            </div>
        </header>
      <div className="absolute top-0 left-0 h-full w-full z-10" id="overlay"></div>
      < video src={videoBg} className="absolute h-full w-full object-cover z-0" autoPlay loop muted />
      <AllLinks /> 
    </main>
  );
}

export default App;
