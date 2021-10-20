import React, { useState } from "react";
import "../App.css";
import {Route, Switch} from "react-router-dom";
import UserPage from "./components/userPage";
import CreatUser from "./components/creatUser";
import ChangeUser from "./components/changeUser";

function App() {
    const [data, setData] = useState({ firstName: "", lastName: "", yearOfBirth: "", portfolio: "" });
    const [errors, setErrors] = useState({});
    const [modal, setModal] = useState(false);
    return (
        <div>
            <Switch>
                <Route exact path={"/"} render={() => <UserPage data={data} />}/>
                <Route path={"/creatUser"} render={() => <CreatUser
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    modal={modal}
                    setModal={setModal}
                />}/>
                <Route path={"/changeUser"} render={() => <ChangeUser
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    modal={modal}
                    setModal={setModal}
                />}/>
            </Switch>
        </div>
    );
};


export default App;
