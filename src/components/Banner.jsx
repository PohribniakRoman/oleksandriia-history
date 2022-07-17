import {BsArrowDown} from 'react-icons/bs'

export default function Banner() {
    return <>
        <div className="banner">
            <div className="banner__container">
                <div className="banner__subtitle">Вся історія містя в одному сайті</div>
                <div className="banner__title">історія олександрії</div>
                <div className="banner__description"> архітектура,фольклор,урбаністика,видатні постаті,музеї</div>
            </div>
            <div className="banner__scroll">
                <span>
                    <BsArrowDown/>
                </span>
            </div>
        </div>
    </>
}