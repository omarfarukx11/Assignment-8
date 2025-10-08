const getLocalStorageData = () => {
  const storedAppId = localStorage.getItem('install')
  if(storedAppId) {
    const storedAppData = JSON.parse(storedAppId)
    return storedAppData
  }
  else{
    return []
  }
}
const addToLocalStorage = (id) => {
  const storedAppData = getLocalStorageData();

  if(storedAppData.includes(id)){
    alert("app all ready in install")
  }
  else {
    storedAppData.push(id);
    const setToLocalStorage = JSON.stringify(storedAppData)
    localStorage.setItem('install' , setToLocalStorage)
  }
}

export {addToLocalStorage , getLocalStorageData}
