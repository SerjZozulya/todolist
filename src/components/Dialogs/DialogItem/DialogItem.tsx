import { FC } from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from 'react';

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    return <div className={s.item}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}

export default DialogItem