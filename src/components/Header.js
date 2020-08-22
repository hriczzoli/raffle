import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/auth';

const Header = ({ history, user, logout }) => {

    //Check if object is empty
    const isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    const handleLogout = () => {
        console.log('logging out')
        logout()
        history.push('/')
    }
    return (
        <div className="flex w-full bg-gray-200 shadow-lg p-4 fixed justify-between">
            <p className="text-lg font-semibold">Raffle.ai code challenge</p>
            <div>
                {
                    !isEmpty(user) &&
                    <span>
                        <div className="dropdown inline-block relative">
                            <button className="bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="font-bold">{user.toUpperCase()}</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </button>
                            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 right-0">
                                <li className=""><Link to="/profile" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer">Profile</Link></li>
                                <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" onClick={() => handleLogout()}>Logout</a></li>
                            </ul>
                        </div>
                    </span>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);