import React, { useState, useContext, useEffect, useId } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [selecteduser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const { updateUser, users } = useContext(GlobalContext);
    const params = useParams()
    let navigate = useNavigate();


    const CurrentUserId = params.id;

    useEffect(() => {
        const userId = CurrentUserId;
        const selecteduser = users.find(user =>
            user.id === userId
        )
        setSelectedUser(selecteduser)
    }, [users, CurrentUserId])



    function onSubmit() {
        updateUser(selecteduser)
        console.log(selecteduser, "8989898989")
        navigate("/", { replace: true });
    }

    const onChange = (e) => {
        setSelectedUser({ ...selecteduser, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={onSubmit} className="mt-5">
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-pink-500 block text-sm font-medium text-slate-700 dark:text-slate-50">
                        Email
                    </span>
                    <input type="text" name="name" className="mt-2 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Please Enter Your Name" value={selecteduser.name}
                        onChange={onChange} />
                </label>
                <button className="px-4 py-2 bg-pink-600 mr-4 text-white rounded font-semibold">Edit User</button>
                <Link to="/">
                    <button className="px-4 py-2 bg-cyan-600 text-md text-white rounded font-semibold">Cancle</button>
                </Link>
            </form>
    )
}

export default EditUser