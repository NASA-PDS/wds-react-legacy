const setName = (payload) => dispatch => {
    dispatch({
        type: 'SET_NAME',
        payload
    });
}

export default{
    setName
}

