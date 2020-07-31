

export const required =  (value) => {
    if (value) return undefined;
    return "Please write any symbol"
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return undefined
}