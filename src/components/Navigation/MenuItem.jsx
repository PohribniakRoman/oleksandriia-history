import { MdKeyboardArrowRight } from "react-icons/md";

export default function MenuItem({ title,clickHandle }) {
  return (
    <div className="navigation__modal--menu-item" onClick={()=>{
      clickHandle(true)
    }}>
      <h1>{title}</h1>
      <span>
        <MdKeyboardArrowRight />
      </span>
    </div>
  );
}
