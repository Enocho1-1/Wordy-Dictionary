import { AllLinks } from "./Routes/AllLinks";
import { Link } from "react-router-dom";
import Logo from "./assests/dictionary.png"
import videoBg from "./assests/videoBg.mp4"

function App() {
  return (
    <main className="relative w-full h-screen flex justify-center items-center">
       <header className="z-20 absolute top-[3em]">
            <div className="flex">
                <Link to="/"><img src={Logo} className="h-12 max-sm:h-9 self-center mx-4" alt="" /></Link>
                <h1 className="font-sans font-extrabold text-7xl max-sm:text-4xl text-coral" id="homeTitle">Wordy Dictionary</h1>
            </div>
        </header>
      <div className="absolute top-0 left-0 h-full w-full z-10" id="overlay"></div>
      < video src={videoBg} className="absolute h-full w-full object-cover z-0" autoPlay loop muted />
      <AllLinks /> 
    </main>
  );
}

export default App;
