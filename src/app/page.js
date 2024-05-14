import Image from "next/image";
import NAVBAR from "./components/navbar/navbar";
import HEADER from "./components/header/header";
import MARKET from "./components/tailwindwidgets/market";
import BLOGCARD from "./components/blogCard/blogcard";
import FOOTER from "./components/footer/footer"
import "./globals.css";

export default function Home() {
  return (
    <>
      {/* <NAVBAR /> */}
      <HEADER />
      <hr />
      <div className="adjust">
        <MARKET />
      </div>
      <hr />

      <div className="prim-blogcard-adjust">
        <h1 className="ml-[1rem] mb-5 text-xl font-semibold ">Market News</h1>
        <div className="blogcard-adjust">
          <BLOGCARD />
          <BLOGCARD />
          <BLOGCARD />
          <BLOGCARD />
          <BLOGCARD />
          <BLOGCARD />
        </div>
      </div>
      <hr />
      {/* <FOOTER /> */}
    </>
  );
}
