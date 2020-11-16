const required = (value) => {
    if(value) {
        return undefined
    }
    else{
        return 'Обязательное поле для заполнения!'
    }
}

const maxLength = (length) => (value) => {
    if(value.length > length) {
        return `Максимальная длинна символов: ${length}`
    }
    else{
        return undefined
    }
}


export {required, maxLength};