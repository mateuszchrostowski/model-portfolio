import React from "react";
import Me from '../Uploads/me.png'

export default function Home() {
    return (
        <div>
            <header>
                <img id="header-photo" src={Me}></img>
                <p className="header-text" id="first-name">MATEUSZ</p>
                <p className="header-text" id="last-name">CHROSTOWSKI</p>
            </header>
        </div>
    )

}