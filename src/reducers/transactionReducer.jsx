export const transactionReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('transaction'))

    switch (action.type) {
        case "INSERT":
            list.push(action.payload)
            localStorage.setItem('transaction', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "UPPDATE":
            list[state.currentIndex] = action.payload
            localStorage.setItem('transaction', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "DELETE":
            list.slice(action.payload, 1)
            localStorage.setItem('transaction', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "UPDATE-INDEX":
            return { list, currentIndex: action.payload }


        default:
            return state
    }
}