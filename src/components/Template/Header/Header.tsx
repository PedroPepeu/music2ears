import React from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'

import imageLogo from '../../../assets/music.png'

function Header() {
    return (
        <header className="w-full h-11 text-red-400">
            <div className="w-full h-11 flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex-none">
                    <img src={imageLogo} alt={'Music4Ear Logo'} className="h-8" />
                </div>

                {/* Spacing */}
                <div className=""></div>

                {/* Right */}

                <div className='flex space-x-8'>
                    {/* Menu Items */}
                    <div className="flex space-x-8">
                        <div className="flex-none"><Link to="/plans">Plans</Link></div>
                        <div className="flex-none"><Link to="/features">Features</Link></div>
                        <div className="flex-none"><Link to="/show-music">Musics</Link></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-2">
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                            <Link to="/logon">
                                Logon
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
