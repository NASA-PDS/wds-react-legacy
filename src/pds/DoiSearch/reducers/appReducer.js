const initialState = {
  isReleasing: false,
  reserveExcel: null,
  reserveResponse: null,
  doiSearchResponse: null,
  urlSearchResponse: null,
  saveResponse: null,
  doi: null,
  isRegistered: null,
  releaseXml: null,
  releaseKeywords: null,
  releaseResponse: null,
  searchClear: true,
  searchIdentifier: null,   // doi, lidvid, or partial
  searchResponse: null,
  submitter: "",
  node: null
}
  
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_RELEASING':
      return {
        ...state,
        isSelecting: false,
        isCreating: false,
        isReleasing: action.payload,
        isSearching: false,
        isFaq: false
      }
    case 'UPDATE_RESERVE_EXCEL':
      return {
        ...state,
        reserveExcel: action.payload
      }
    case 'RENDER_RESERVE_RESPONSE':
      return {
        ...state,
        reserveResponse: action.payload
      }
    case 'RETRY_RESERVE':
      return {
        ...state,
        reserveResponse: null
      }
    case 'RESET_RESERVE':
      return {
        ...state,
        reserveResponse: null,
        reserveExcel: null,
        submitter: "",
        node: null,
        isRegistered: null
      }
    case 'RETRY_RELEASE':
      return {
        ...state,
        releaseResponse: null
      }
    case 'RETRY_SAVE':
      return {
        ...state,
        saveResponse: null
      }
    case 'RENDER_DOI_SEARCH_RESULTS':
      return {
        ...state,
        doiSearchResponse: action.payload.data,
        doi: action.payload.data.doi,
        releaseKeywords: action.payload.keywords,
        releaseXml: action.payload.xml,
        submitter: action.payload.data.submitter,
        node: action.payload.data.node
      }
    case 'RENDER_URL_SEARCH_RESULTS':
      if (action.payload.xml) {
        return {
          ...state,
          urlSearchResponse: action.payload.data,
          releaseKeywords: action.payload.keywords,
          releaseXml: action.payload.xml
        }
      } else {
        return {
          ...state,
          urlSearchResponse: action.payload.data
        }
      }
    case 'RESET_RELEASE':
      return {
        ...state
      }
    case 'UPDATE_RELEASE_XML':
      return {
        ...state,
        releaseXml: action.payload
      }
    case 'UPDATE_RELEASE_KEYWORDS':
      return {
        ...state,
        releaseKeywords: action.payload
      }
    case 'RENDER_RELEASE_RESPONSE':
      return {
        ...state,
        releaseResponse: action.payload
      }
    case 'RENDER_SAVE_RELEASE_RESPONSE':
      return {
        ...state,
        saveResponse: action.payload
      }
    case 'RENDER_SEARCH_RESULTS':
      return {
        ...state,
        searchClear: false,
        searchIdentifier: action.payload.identifier,
        searchResponse: action.payload.data
      }
    case 'RESET_SEARCH':
      return {
        ...state,
        searchClear: true,
        searchIdentifier: null,
        searchResponse: null
      }
    case 'SET_SUBMITTER':
      return {
        ...state,
        submitter: action.payload
      }
    case 'SET_NODE':
      return {
        ...state,
        node: action.payload
      }
    case 'SET_IS_REGISTERED':
      return {
        ...state,
        isRegistered: action.payload
      }
    case 'RESET_STORED_DATA':
      return {
        ...state,
        reserveResponse: null,
        doiSearchResponse: null,
        urlSearchResponse: null,
        releaseResponse: null,
        doi: null,
        releaseXml: null,
        releaseKeywords: null,
        releaseIdentifier: null,
        submitter: "",
        node: null
      }
    default:
      return state;
  }
}