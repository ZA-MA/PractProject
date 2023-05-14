import React from 'react';
import Input from "../components/Input";
import Button from "../components/Button";

const Dashboard = () => {
    return (
        <div>
            <h1>dashboard page</h1>
            <h1>dashboard page</h1>
            <h1>dashboard page</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h3>Пример input</h3>
                <Input type="number" width={200} height={50} fontSize={20}/>
                <h3>Пример button</h3>
                <Button>sdd</Button>
            </div>
        </div>
    );
};

export default Dashboard;