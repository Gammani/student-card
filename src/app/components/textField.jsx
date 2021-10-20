import React from "react";
import PropTypes from "prop-types";

const TextField = ({label, name, value, error, onChange}) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className={"mb-4"}>
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input type="text" id={name} name={name} value={value} onChange={onChange} className={getInputClasses()}/>
                {error && <div className={"invalid-feedback"}>{error}</div>}
            </div>
        </div>
    );
};
TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
}
export default TextField;