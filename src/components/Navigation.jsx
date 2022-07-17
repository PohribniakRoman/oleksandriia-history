import { useState } from "react"

export default function Navigation() {
    const [isOpen,toOpen] = useState(false);
    return (
    <> 
        <div className={`navigation__modal ${isOpen?"modalOpend":""}`} >
            <div className={`navigation__modal--curtain ${isOpen?"curtainDowned":""}`} onClick={()=>toOpen(!isOpen)}></div>
            <div className={`navigation__modal--menu ${isOpen?"menuOpend":""}`}>
                <div className="navigation__modal--menu-exit" onClick={()=>toOpen(!isOpen)}></div>
            </div>
        </div>
        <div className="navigation">
            <div className="navigation__logo">
                <div className="navigation__logo--icon"></div>
                <div className="navigation__logo--title">історія <span>олександрії</span></div>
            </div>
            <div className="navigation__menu" onClick={()=>toOpen(!isOpen)}>
                <div className="navigation__menu--icon"></div>
            </div>
        </div>
    </>)
}