import s from './Container.module.scss'
import React from "react";

export function Container({children}: any) {

    return <div className={s.container}>{children}</div>
}
