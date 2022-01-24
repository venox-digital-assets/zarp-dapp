import { Web3ReactProvider } from "@web3-react/core";
import { useEffect } from "react";

import Demo, { getLibrary } from "../components/Demo";
import useLocalStorage from "../hooks/useLocalStorage";
import {Hero} from "../components/Hero";
import Header from "../components/Header";
const App = function () {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "light" : "dark");
      return prevTheme === "dark" ? "light" : "dark";
    });
  };
  return (
    <>
      {/* <div className="fixed top-0 right-0 mt-2 mr-4">
        <button type="button" onClick={toggleTheme} className="btn">
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div> */}
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="min-h-screen mx-auto ">
          <Header />
          <Hero />
        
        </div>
        <footer className="p-1 flex flex-col footer text-center items-center">
         <p className="text-sm w-4/12"> Terms of Service

Made in Cape Town with ❤
© Copyright 2022 Venox Digital Assets (Pty) Ltd registered in South Africa
All rights reserved.</p>
        </footer>
      </Web3ReactProvider>
    </>
  );
};

export default App;
