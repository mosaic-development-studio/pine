export const validate = (validators, value) => validators.reduce((isValid, validator) => {
    return isValid && validator(value);
}, true);