const setIsReleasing = (payload) => dispatch => {
    dispatch({
        type: 'SET_IS_RELEASING',
        payload
    });
}


const sendLidvidSearchRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_LIDVID_SEARCH_REQUEST",
        payload
    })
}


const sendSearchRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_SEARCH_REQUEST",
        payload
    })
}

const resetSearch = (payload) => dispatch => {
    dispatch({
        type: 'RESET_SEARCH',
        payload
    });
}

export default{
    setIsReleasing,
    sendLidvidSearchRequest,
    sendSearchRequest,
    resetSearch
}

