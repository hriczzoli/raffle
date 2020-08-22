import React from 'react';
import { connect } from 'react-redux';
import { Icon } from "@blueprintjs/core";

const Profile = ({ user, history }) => {

    //Check if object is empty
    const isEmpty = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return (
        <div className="flex flex-col w-full h-screen ">
            <button 
                className="self-start absolute mt-20 ml-2" 
                onClick={() => history.push('/todo')}
            >&#8592; BACK
            </button>
            <div className="self-center m-auto flex flex-col rounded shadow-md p-4 justify-center items-center w-2/5 h-2/5">
                <p className="text-lg font-semibold mb-6 mt-4 self-start">Your user profile</p>
                <Icon icon="user" iconSize={25}/>
                {
                    !isEmpty(user) && <span className="font-bold">{user.toUpperCase()}</span>
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

export default connect(mapStateToProps)(Profile);