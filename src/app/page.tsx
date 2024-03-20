import Image from "next/image";
import NavBar from "./components/nav"
import mainWatchImage from "../../public/home_image.avif"

export default function Home() {
  return (
    <div>
      {/* Adjusted div to have a relative position */}
      <div className="relative w-full h-screen -mt-3">
        <div className="relative z-10">
          <NavBar></NavBar>
        </div>
        {/* Ensuring Image fills the div under NavBar */}
        <Image src={mainWatchImage} layout="fill" objectFit="cover" alt='main Watch Image'/>
        {/* Overlay h1 with absolute positioning and higher z-index */}
        <div className="flex flex-col justify-between h-full">
          <h1 className="relative text-white text-4xl mt-12 p-4 z-10 text-center">Welcome to Wescheter Watches</h1>
          <button className="relative text-white mt-auto z-10">Browse Now</button>
        </div>
      </div>
    </div>
  );
}
