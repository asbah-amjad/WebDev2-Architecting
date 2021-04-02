import React, { useEffect, useState } from "react";
import {Sandwich} from "../components/Sandwich/Sandwich";
import { mockSandwichList } from "../mocks/sandwiches";
import { SandwichService } from "../services/SandwichService";
import styles from "./SandwichListView.module.css";

export const SandwichListView = () => {
    const [sandwiches, setSandwiches] = useState(mockSandwichList);

    const handleOrder = () => {
        console.log("User");
    };

    /*useEffect(() => {
        SandwichService.getListing().then(setSandwiches);
    }, []);*/

    return (
        <div>
            <h1>Sandwiches</h1>
            <SandwichList sandwiches={sandwiches} onOrder={handleOrder} />
        </div>
    );
};


const SandwichList = ({ sandwiches, onOrder } ) => {
    return (
        <div className={styles.SandwichList}>
            {sandwiches.map(data => <Sandwich key={data.id} {...data} onOrder={onOrder} />)}
        </div>
    );
};
