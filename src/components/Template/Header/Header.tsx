import React from "react";
import './header.css';
import '../../../index.css';


function Header() {
    return (
        <div className="bg-black w-full h-11 text-white">
            <div className="border-red-600 w-full h-11 border">
                <div className="border border-green-500 p-2 pl-24">
                    logo
                </div>
                <div className="border border-blue-500 text-black">
                    <div>plans</div>
                    <div>features</div>
                    <div>music</div>
                </div>
            </div>
        </div>
    );
}

export default Header;