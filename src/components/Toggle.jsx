import React,{useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";

const Toggle = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2 leading-none mr-3 h-8 w-8 flex justify-center items-center bg-gray-900 dark:bg-gray-50">
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faLightbulb}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-700 dark:text-gray-700 text-xl cursor-pointer"
        />
      ) : (
        <FontAwesomeIcon icon={faMoon}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-50 dark:text-gray-50 text-xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;