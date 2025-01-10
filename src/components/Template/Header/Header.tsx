import React from 'react'
import { Link } from 'react-router-dom'
import '../../../index.css'

import imageLogo from '../../../assets/music.png'

function Header() {
    return (
        <header className="bg-black w-full h-11 text-white">
            <div className="border-red-600 w-full h-11 border flex items-center justify-between px-4">
                {/* Logo */}
                <div className="border border-green-500 flex-none">
                    <img src={imageLogo} alt={'Music4Ear Logo'} className="h-8" />
                </div>

                {/* Spacing */}
                <div className=""></div>

                {/* Right */}

                <div className='flex space-x-8'>
                    {/* Menu Items */}
                    <div className="border border-blue-500 flex space-x-8">
                        <div className="flex-none"><Link to="">Plans</Link></div>
                        <div className="flex-none"><Link to="">Features</Link></div>
                        <div className="flex-none"><Link to="">Musics</Link></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-2">
                            <Link to="">
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
