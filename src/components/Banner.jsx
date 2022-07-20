import {BsArrowDown} from 'react-icons/bs'

export default function Banner() {
    return <>
        <div className="banner">
            <div className="banner__container">
                <div className="banner__subtitle">Уся історія Олександрії в одному місці</div>
                <div className="banner__title">історія олександрії</div>
                <div className="banner__description"> Архітектура/Мистецтво/Історичні постаті/Фольклор</div>
            </div>
            <div className="banner__scroll">
                <span>
                    <BsArrowDown/>
                </span>
            </div>
        </div>
    </>
}