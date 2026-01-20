//MP1
function replaceAll(){
    let text = document.getElementById("string1").value;
    console.log(text);

        //apply logic whitespace replacement
        let newText = text.replaceAll(" ", "");
        console.log(newText);
        document.getElementById("txtResult").innerHTML = newText;
}

//MP2
function searchWord(){
    let sentence = document.getElementById("string2").value;
    let word = document.getElementById("word2").value;
    let result = "Found";
    console.log(sentence);

    if(sentence.includes(word)){
        document.getElementById("txtResult2").innerHTML = result;
    }else{
        result = "Not Found";
        document.getElementById("txtResult2").innerHTML = result;
    }
}

//MP5
function replaceWord(){
    let sentence = document.getElementById("string3").value;
    let wordToReplace = document.getElementById("word3").value;
    let newWord = document.getElementById("newWord").value;
    console.log(sentence);

    let newSentence = sentence.replace(wordToReplace, newWord);
    console.log(newSentence);
    document.getElementById("txtResult3").innerHTML = newSentence;
}

//MP4
function countCharacters(){
    let countText = document.getElementById("word1").value;
    console.log(countText);

    let charCount = countText.trim().length;
    console.log(charCount);
    document.getElementById("charResult").innerHTML = charCount;
}

//MP5
function emailCheck(){
    let email = document.getElementById("email").value;
    let result = "Valid";
    console.log(email);

    if(email.includes("@")){
        document.getElementById("emailResult").innerHTML = result;
    }else{
        result = "Invalid";
        document.getElementById("emailResult").innerHTML = result;
    }
}