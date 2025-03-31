
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encryptBtn").addEventListener("click", encryptText);
    document.getElementById("decryptBtn").addEventListener("click", decryptText);
});

function encryptText() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    if (!message || isNaN(shift)) {
        document.getElementById('output').innerText = "Please enter a message and a valid shift value.";
        return;
    }
    let encryptedMessage = message.split('').map(char => {
        let code = char.charCodeAt(0);
        if (char.match(/[a-z]/i)) {
            let base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
    document.getElementById('output').innerText = encryptedMessage;
}

function decryptText() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    if (!message || isNaN(shift)) {
        document.getElementById('output').innerText = "Please enter a message and a valid shift value.";
        return;
    }
    let decryptedMessage = message.split('').map(char => {
        let code = char.charCodeAt(0);
        if (char.match(/[a-z]/i)) {
            let base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');
    document.getElementById('output').innerText = decryptedMessage;
}