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
    default:
      return state;
  }
}