import React, {useEffect} from "react";
import PropTypes from "prop-types";
import TextField from "./textField";
import {validator, validatorConfig} from "../../utils/validator";
import {useHistory} from "react-router-dom";

const ChangeUser = ({data, setData, errors, setErrors, modal, setModal}) => {
    const handleChange = ({target}) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const history = useHistory();
    const addData = () => {
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        setModal(true);
    }
    const HideModal = () => {
        history.push("/");
        setModal(false);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className={"mb-4"}>Изменить</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField label={"Имя"} name={"firstName"} value={data.firstName} error={errors.firstName}
                                   onChange={handleChange}/>
                        <TextField label={"Фамилия"} name={"lastName"} value={data.lastName} error={errors.lastName}
                                   onChange={handleChange}/>
                        <TextField label={"Год рождения"} name={"yearOfBirth"} value={data.yearOfBirth}
                                   error={errors.yearOfBirth} onChange={handleChange}/>
                        <TextField label={"Портфолио"} name={"portfolio"} value={data.portfolio}
                                   error={errors.portfolio} onChange={handleChange}/>
                        <button type={"submit"} disabled={!isValid} className={"btn btn-primary"} onClick={addData} data-toggle="modal" data-target="#exampleModalCenter">Сохранить</button>
                    </form>
                </div>
            </div>
            {modal === true ? <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h3 className={"mb-4"}>Сохранено</h3>
                        <button type={"button"} className={"btn btn-primary"} onClick={HideModal}>Готово</button>
                    </div>
                </div>
            </div> : ""}
        </div>
    );
};
ChangeUser.propTypes = {
    data: PropTypes.object,
    setData: PropTypes.func,
    errors: PropTypes.object,
    setErrors: PropTypes.func,
    modal: PropTypes.bool,
    setModal: PropTypes.func
}
export default ChangeUser;