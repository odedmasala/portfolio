import { Navbar } from "../components";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
function MyApp({ Component, pageProps }) {
  library.add(fab, faCheckSquare, faCoffee)
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
