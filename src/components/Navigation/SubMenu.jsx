import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function SubMenu({isOpen,update}) {
    const [isListOpend,openList] = useState(false);
    return (
    <div className={`submenu ${isOpen?"submenuOpend":""}`}>
      <div className="submenu__exit" onClick={()=>{update(false)}}>
        <span>
          <MdKeyboardArrowLeft />
        </span>
        <h1>назад</h1>
      </div>
      <div className="submenu__item" onClick={()=>{
        openList(!isListOpend)
      }}>
     <div>
        <h3>Ампір</h3>
        <span className={isListOpend?"arrowDown":""}>
          <MdKeyboardArrowRight />
        </span>
      </div>
        <ul className={`submenu__item--list ${isListOpend?"listOpend":""}`}>
            <li className="submenu__item--list-item">
                Будівля Ім. ПЕТРА ПОРОШЕНКА
            </li>
        </ul>
      </div>
    </div>
  );
}
