import React from "react"
import './App.css';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import { GlobalProvider } from "./Context/GlobalState";
import HomeIcon from "./Assects/icon/house-door.svg"
import exclamation from "./Assects/icon/exclamation-circle.svg"
import cloud from "./Assects/icon/cloud-moon.svg"
import Hbuildingome from "./Assects/icon/building.svg"
import bricks from "./Assects/icon/bricks.svg"
import Background from "./Context/Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faGears, faHomeLg,faProjectDiagram,faUserFriends } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: 'Dashboard',icon: faHomeLg, path:'/', current: true },
  { name: 'Team',icon: faUserFriends, path: '/', current: false },
  { name: 'Projects',icon:faProjectDiagram, path: '/', current: false },
  { name: 'Calendar',icon:faCalendarDays, path: '/', current: false },
  { name: 'Reports', icon:faGears, path: '/', current: false },
]

function App() {

  return (
    <GlobalProvider >
      <Background>
      <BrowserRouter>
        <Navigation />
        <div className="main flex flex-wrap flex-row body-height shadow">
          <header className=" dark:bg-slate-900 dark:border-slate-700 dark:text-slate-50 basis-1/5 border-r hidden md:block transition-all duration-500" >
            <ul className="px-2 pt-4 pb-3 space-y-1 sm:px-3 overflow-y-auto">
              {navigation.map((item) => (
                <Link to={item.path} key={item.name}>
                  <li className={`text-gray-600 dark:text-slate-400 flex gap-x-2 items-center  px-3 py-3 rounded-md text-base font-medium ${item.current ? " bg-gray-300 dark:bg-pink-600 dark:text-gray-50" : ""}`}>
                  <FontAwesomeIcon icon={item.icon} /> {item.name}
                  </li>
                </Link>
              ))
              }
            </ul>
          </header>
          <main className="basis-full md:basis-4/5 overflow-y-auto h-full scroll-smooth bg-gray-200 dark:bg-gray-700">
            <div className="container mx-auto">
              <Routes>
                <Route exext path="/" element={<Home />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
      </Background>
    </GlobalProvider>
  );
}

export default App;
