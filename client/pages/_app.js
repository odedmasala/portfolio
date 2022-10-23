import { Navbar } from "../components";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  //  const {project} = router
  const [darkMode, setDarkMode] = useState(false);
  // console.log(darkMode);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Navbar dark={setDarkMode} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
