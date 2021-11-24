//This script will generate a text with all the sessionStorage.setItems filled with the keys and the values of the current browser page

const sessionStorageKeys = Object.keys(sessionStorage);
console.log(sessionStorageKeys);
let resultString = ''
sessionStorageKeys.forEach(value => {

    let sessionStorageValue = sessionStorage.getItem(value)
    resultString += `sessionStorage.setItem('${value}','${sessionStorageValue}');\n`

})
console.log(`Use the following text to create the session key:values \n\n${resultString}`);
