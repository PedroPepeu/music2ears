import React from "react"

import HeaderPosLog from "../Template/Header/HeaderPosLog.tsx"
import History from "../Template/Music/History.tsx"
import Recomendation from "../Template/Music/Recomendation.tsx";

function Home() {
    return (
        <div>
            <HeaderPosLog />
            <History />
            <Recomendation />
        </div>
    );
}

export default Home;
