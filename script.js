document.getElementById('button').onclick = function() {
    if (document.getElementById('firstName').value.length < 1) {
        document.getElementById('firstName-container').style.borderColor = "red";
        return false;
    } else if (document.getElementById('lastName').value.length < 1) {
        document.getElementById('lastName-container').style.borderColor = "red";
        return false;
    }
}
