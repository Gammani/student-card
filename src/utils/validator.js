export function validator(data, config) {
    const errors = {};

    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.message;
                break;
            case "isPortfolioLink":
                const portfolioRegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
                if(!portfolioRegExp.test(data)) return config.message;
                break;
            case "isValidYear":
                const currentYear = (new Date()).getFullYear();
                if(currentYear < data || data < 1900) return config.message;
                break;
            default:
                break;
        }
    };
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if(error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
export const validatorConfig = {
    firstName: {
        isRequired: {
            message: "Поле 'Имя' обязательно для заполнения"
        }
    },
    lastName: {
        isRequired: {
            message: "Поле 'Фамилия' обязательно для заполнения"
        }
    },
    yearOfBirth: {
        isRequired: {
            message: "Поле 'Год рождения' обязательно для заполнения"
        },
        isValidYear: {
            message: "Поле 'Год рождения' введено не корректно"
        }
    },
    portfolio: {
        isRequired: {
            message: "Поле 'Портфолио' обязательно для заполнения"
        },
        isPortfolioLink: {
            message: "Ссылка введена не корректно"
        }
    }
};
