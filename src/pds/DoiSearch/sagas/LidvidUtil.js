const isLidOrLidvid = (text) => {
    return text.includes("urn:");
  }
  
  const isProductLidvid = (text) => {
    if(!text.includes("urn:")){
      return false;
    }
  
    let colonCount = [...text].filter(x => x === ':').length;
    if(!(colonCount === 5 || colonCount === 7)){
      return false
    }
  
    return true;
  }
  
  const isCollectionLid = (text) => {
    if(!text.includes("urn:")){
      return false;
    }

    if(text.includes("::")){
      return false;
    }
  
    let colonCount = [...text].filter(x => x === ':').length;
   
    if(colonCount !== 4){
      return false
    }
  
    return true;
  }
  
  const trimProductLidvidToCollectionLid = (text) => {
    let doubleColonIndex = text.lastIndexOf('::');
    text = text.slice(0, doubleColonIndex);
  
    let lastColonIndex = text.lastIndexOf(':');
    text = text.slice(0, lastColonIndex);
    text = text + '::';
  
    return text;
  }
  
  const trimCollectionLidToBundle = (text) => {
    let lastColonIndex = text.lastIndexOf(':');
    text = text.slice(0, lastColonIndex);
    text = text + '::';
  
    return text;
  }
  
  const removeDoubleColon = (text) => {
    let doubleColonIndex = text.lastIndexOf('::');
    text = text.slice(0, doubleColonIndex);
  
    return text;
  }
  
  export const LidvidUtil = {
    isLidOrLidvid,
    isProductLidvid,
    isCollectionLid,
    trimProductLidvidToCollectionLid,
    trimCollectionLidToBundle,
    removeDoubleColon
  }
  