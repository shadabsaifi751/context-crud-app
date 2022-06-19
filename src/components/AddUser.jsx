import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid'
const AddUser = () => {
    const userKey = 'USERS';
    const { AddUser } = useContext(GlobalContext);
    let navigate = useNavigate();

    const [name, setName] = useState('')


    function onSubmit() {

        const newUser = {
            id: uuid(),
            name
        }
        AddUser(newUser)
        // localStorage.setName(userKey, JSON.stringify(AddUser(newUser)));
        navigate("/", { replace: true });
    }
    // console.log(AddUser(newUser),'ddddd')

    // useEffect(() => {
    //     localStorage.setName(userKey, JSON.stringify(AddUser.newUser));
    // }, [AddUser.newUser]);

    // useEffect(() => {
    //     const name = JSON.parse(localStorage.getItem(userKey));
    //     if (name) {
    //         setName(name);
    //     }
    // }, []);


    const onChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <form onSubmit={onSubmit} className="mt-5">
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
                        Email
                    </span>
                    <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={name}
                        onChange={onChange} />
                </label>
                <button className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Add User</button>
                <Link to="/">
                    <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
                </Link>
            </form>
        </>
    )
}

export default AddUser