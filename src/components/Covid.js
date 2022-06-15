import React, { useEffect, useState } from "react";

const Covid = () => {

    const [newdeaths, setNewdeaths] = useState({})

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19api.com/summary');
            const actualData = await res.json();
            console.log(actualData);
            setNewdeaths(actualData.Global.NewDeaths);

            console.log(actualData.Global);
            console.log(actualData.Global.NewConfirmed);
            
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>

        </div>
    )
}

export default Covid;