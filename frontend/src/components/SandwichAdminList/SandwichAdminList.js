import React, {useEffect, useState} from "react";
import {SandwichService} from "../../services/SandwichService";
import {Button} from "../Button/Button";
import styles from "./SandwichAdminList.module.css";

export const SandwichAdminList = ({ onEdit, onDelete }) => {
    const [sandwichList, setSandwichList] = useState([]);

    useEffect(() => {
        SandwichService.getListing().then(setSandwichList);
    }, []);

    return (
        <ul className={styles.SandwichAdminList}>
            {sandwichList.map(sandwich => (
                <li key={sandwich._id}>
                    {sandwich.name}{" "}
                    <Button text="Edit" data-sandwich-id={sandwich._id} onClick={onEdit}/>{" "}
                    <Button text="Delete" data-sandwich-id={sandwich._id} onClick={onDelete}/>
                </li>
            ))}
        </ul>
    );
};
