import React from "react";
import image from "../assets/img/Slide-Back.png";

function Header() {
    return (
        <div className="header-topo" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <p><span>#</span>FIQUE<span>EM</span>CASA</p>
            <h1><i>Tascom - Gabriel Milanez</i></h1>
            <h2>Resumo <span>Covid19</span></h2>
        </div>
    );
}

export default Header;