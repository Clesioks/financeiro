export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()} - ${now.getMonth() + 1}`
}

export const filterListByMonth = (list, date) => {
    let newList = []
    let [year, month] = date.split(' - ')

    for(let i in list) {
        if (
             list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date = Date()) => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`    
}

const addZeroToDate = (number) => {
    if (number < 10) {
        return  `0${number}`
} else {
    return `${number}`
}
}