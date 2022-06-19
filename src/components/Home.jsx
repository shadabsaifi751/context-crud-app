import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import UserList from './UserList'
import { Link } from 'react-router-dom'


const Home = () => {
  const { users } = useContext(GlobalContext)
  return (
    <>
      <div className="">
      <div className="flex flex-row mt-5 px-6">
        <div className="basis-full text-end">
          <Link to="/add-user" className="px-4 py-2 bg-pink-600 text-white rounded font-semibold">Add User</Link>
        </div>
      </div>

      <div className="flex flex-row mt-5">
          <div className="w-full">
          <UserList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home