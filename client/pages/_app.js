import { Navbar } from "../components";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>

        <div className={darkMode ? "dark w-full" : "w-full"}>
          {router.pathname != "/404" && <Navbar dark={setDarkMode} />}
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp;
