import { useState } from "react"
import Logo from "./Navigation/Logo";
import MenuItem from "./Navigation/MenuItem";
import SubMenu from "./Navigation/SubMenu";

export default function Navigation() {
    const [isOpen,toOpen] = useState(false);
    const [isSubmenuOpen,updateSubmenuStatus] = useState(false);
    return (
    <> 
        <div className={`navigation__modal ${isOpen?"modalOpend":""}`} >
            <div className={`navigation__modal--curtain ${isOpen?"curtainDowned":""}`} onClick={()=>toOpen(!isOpen)}></div>
            <div className={`navigation__modal--menu ${isOpen?"menuOpend":""}`}>
                <SubMenu isOpen={isSubmenuOpen} update={updateSubmenuStatus}/>
                <div className="navigation__modal--menu-exit" onClick={()=>toOpen(!isOpen)}></div>
                <div className="navigation__modal--menu-tile">меню</div>
                <MenuItem title={"Архітектура"} clickHandle={updateSubmenuStatus}/>
            </div>
        </div>
        <div className="navigation">
            <Logo/>
            <div className="navigation__menu" onClick={()=>toOpen(!isOpen)}>
                <div className="navigation__menu--icon"></div>
            </div>
        </div>
    </>)
}