import React from "react";
import styles from './styles.module.scss'

export interface ClickableDropdownProps {
title: string;
}
export default function ClickableDropdown(props: ClickableDropdownProps) {

    return (
        <React.Fragment>
            <div><h3>{props.title}</h3></div>
        </React.Fragment>
    )
}