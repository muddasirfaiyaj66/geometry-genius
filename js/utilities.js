function inputFieldValue(inputFieldName){
    const inputField = document.getElementById(inputFieldName);
    const inputFieldTextString = inputField.value;
    const inputFieldText = parseFloat(inputFieldTextString);
    inputField.value ='';
    return inputFieldText;

}

