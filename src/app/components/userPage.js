import React from "react";
import { useHistory } from "react-router-dom";

const UserPage = () => {
    const history = useHistory();
    const handleToCreatUser = () => {
        history.push("/creatUser");
    };
    const handleToChangeUser = () => {
        history.push("/changeUser");
    }
    const userRaw = localStorage.getItem("data");
    const user = JSON.parse(userRaw);
    if (user) {
        return (
            <div className={"container center-block"}>
                <h1>Карточка студента</h1>
                <div><b>Имя: </b>{user.firstName}</div>
                <div><b>Фамилия: </b>{user.lastName}</div>
                <div><b>Год рождения: </b>{`${user.yearOfBirth} (${(new Date()).getFullYear() - user.yearOfBirth} лет)`}</div>
                <div><b>Портфолио: </b><a href={`${user.portfolio}`}>{user.portfolio}</a></div>
                <button className={"btn btn-primary mt-2"} onClick={handleToChangeUser}>Редактировать</button>
            </div>
        );
    }
    return (
        <div className={"container center-block"}>
            <h1>Карточка студента</h1>
            <div>Нет данных</div>
            <button className={"btn btn-primary mt-2"} onClick={handleToCreatUser}>Добавить</button>
        </div>
    );
};

export default UserPage;