import React from 'react'

import HeaderPosLog from '../Template/Header/HeaderPosLog.tsx'

import imageProfile from '../../assets/profile.png'

function Profile() {
    return (
        <div>
            <HeaderPosLog />
            <div className='border-2 rounded w-11/12 m-8 bg-slate-100 shadow-2xl'>
                <div className="text-3xl border-b-2 border-opacity-25 border-red-400 mx-8 p-2">My info</div>
                <div className='mt-12'>
                    <img src={imageProfile} alt="Profile" className='mx-auto h-40 w-auto' />
                </div>

            </div>
        </div>
    );
}

export default Profile;