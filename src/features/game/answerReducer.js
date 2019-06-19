export default (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD ANSER':
            return state.concat([action.payload])
        case 'CLEAR ANDERS':
            return []
        default:
            return state
    }
}
