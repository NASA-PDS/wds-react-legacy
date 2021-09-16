const setIsReleasing = (payload) => dispatch => {
    dispatch({
        type: 'SET_IS_RELEASING',
        payload
    });
}

const setIsRegistered = (payload) => dispatch => {
    dispatch({
        type: 'SET_IS_REGISTERED',
        payload
    });
}

const updateReserveExcel = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_RESERVE_EXCEL',
        payload
    });
}

const sendReserveRequest = (payload) => dispatch => {
    dispatch({
        type: 'SEND_RESERVE_REQUEST',
        payload
    });
}

const retryReserve = () => dispatch => {
    dispatch({
        type: 'RETRY_RESERVE'
    })
}

const resetReserve = () => dispatch => {
    dispatch({
        type: 'RESET_RESERVE'
    })
}

const sendLidvidSearchRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_LIDVID_SEARCH_REQUEST",
        payload
    })
}

const sendDoiSearchRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_DOI_SEARCH_REQUEST",
        payload
    })
}

const sendPds4LabelSearchRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_PDS4_LABEL_SEARCH_REQUEST",
        payload: {
            ...payload,
            
        }
    })
}

const sendSaveReleaseRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_SAVE_RELEASE_REQUEST",
        payload
    });
}

const retrySave = () => dispatch => {
    dispatch({
        type: 'RETRY_SAVE'
    })
}

const sendReleaseRequest = (payload) => dispatch => {
    dispatch({
        type: "SEND_RELEASE_REQUEST",
        payload
    })
}

const retryRelease = () => dispatch => {
    dispatch({
        type: 'RETRY_RELEASE'
    })
}

const resetRelease = (payload) => dispatch => {
    dispatch({
        type: 'RESET_RELEASE'
    })
}

const updateReleaseXml = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_RELEASE_XML',
        payload
    })
}

const updateReleaseKeywords = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_RELEASE_KEYWORDS',
        payload
    })
}


const sendSearchRequest = (payload) => dispatch => {
    console.log("send search request");
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

const setSubmitter = (payload) => dispatch => {
    dispatch({
        type: 'SET_SUBMITTER',
        payload
    })
}

const setNode = (payload) => dispatch => {
    dispatch({
        type: 'SET_NODE',
        payload
    })
}

const resetStoredData = (payload) => dispatch => {
    dispatch({
        type: 'RESET_STORED_DATA',
        payload
    })
}

export default{
    setIsReleasing,
    setIsRegistered,
    updateReserveExcel,
    sendReserveRequest,
    retryReserve,
    resetReserve,
    retryRelease,
    retrySave,
    sendLidvidSearchRequest,
    sendDoiSearchRequest,
    sendPds4LabelSearchRequest,
    sendSaveReleaseRequest,
    sendReleaseRequest,
    resetRelease,
    updateReleaseXml,
    updateReleaseKeywords,
    sendSearchRequest,
    resetSearch,
    setSubmitter,
    setNode,
    resetStoredData
}

