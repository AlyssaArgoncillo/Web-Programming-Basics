function normalizeSpace(){
    let text = document.getElementById("string").value.trim();
    console.log(text);

    let newText = text.replace(/\s+/g, ' ');
    console.log(newText);
    
    document.getElementById("txtResult").innerHTML = newText;

}

function MaskEmail(){
    let email = document.getElementById("emailString").value;
    console.log(email);

    let emailParts = email.split("@");
    let namePart = emailParts[0];
    let domainPart = emailParts[1];
    let maskedName = "";

    for(let i = 1; i < namePart.length - 1; i++){
        maskedName = namePart[0] + "*".repeat(i) + namePart[namePart.length - 1];
    }

    let maskedEmail = maskedName + "@" + domainPart;;
    console.log(maskedEmail);
    document.getElementById("emailResult").innerHTML = maskedEmail;
}

function checkPasswordStrength(){
    let password = document.getElementById("passwordString").value;
    console.log(password);
    let strength = "Weak";

    if(password.length >= 8 && password.match(/[0-9]/)){
        strength = "Strong";
        document.getElementById("passwordResult").innerHTML = strength;
    }else{
        document.getElementById("passwordResult").innerHTML = strength;
    }
}

function reverseEachWord(){
    let sentence = document.getElementById("sentenceString").value;
    console.log(sentence);

    let words = sentence.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    let reversedSentence = reversedWords.join(" ");
    console.log(reversedSentence);
    document.getElementById("reversedResult").innerHTML = reversedSentence;
}