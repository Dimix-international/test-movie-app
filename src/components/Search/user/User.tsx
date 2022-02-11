import s from './User.module.scss'
import style from './../Search.module.scss'
import {useWindowSize} from "../../../hooks/useWindowSize";
import {useState} from "react";

export const User = () => {
    const[height, width] = useWindowSize();
    const isVisibleName = width > 576 ;
    const[isShowName, setShowName] = useState(false);

    const showInfoPanelHandler = () => {
        if(!isVisibleName) setShowName(!isShowName)
    }

    return(
        <div className={`${s.body} ${style.user}`}>
            <div className={s.icon} onClick={showInfoPanelHandler}>
                <svg width="25" height="25"
                     fill="currentColor" className="bi bi-person-fill"
                     viewBox="0 0 16 16">
                    <path
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                {
                    isShowName && <h6 className={s.info}>Alexandr Borisenko</h6>
                }
            </div>
            {
                isVisibleName && <h6 className={s.title}>Alexandr Borisenko</h6>
            }

        </div>
    )
}