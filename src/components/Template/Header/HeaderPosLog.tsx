import React from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'

import imageLogo from '../../../assets/music.png'
import imageProfile from '../../../assets/profile.png'

function HeaderPosLog() {
    return (
        <header className="w-full h-11 text-red-400">
            <div className="w-full h-11 flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex-none">
                    <img src={imageLogo} alt={'Music4Ear Logo'} className="h-8 size-8" />
                </div>

                {/* Spacing */}
                <div className=""></div>

                {/* Right */}

                <div className='flex space-x-8'>
                    {/* Menu Items */}
                    <div className="flex space-x-8">
                        <div className="flex-none"><Link to="/home">Home</Link></div>
                        <div className="flex-none"><Link to="/browse">Browse</Link></div>
                        <div className="flex-none"><Link to="/favorite">Favorite</Link></div>
                    </div>

                    {/* Profile */}
                    <div className="flex">
                        <Link to="/profile">
                            <img className="size-7" src={imageProfile} alt={'Your Profile'} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderPosLog;
