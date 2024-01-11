const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

function PrintLanguageName(str1,str2){
    console.log(`The extension ${str1} refers to a ${str2} file`);
}

myCoding.forEach( (element) => {PrintLanguageName(element.languageFileName , element.languageName)} )