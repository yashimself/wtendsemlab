function check(){
    var str = document.getElementById('inpt').value;
    str = str.toLowerCase();
    const len = str.length;
    var i;
    for (i = 0; i<len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            alert("It is not a palindrome");
            window.location.href="index.html";
            exit();
        }
    }
    alert("It is a palindrome");
    window.location.href="index.html";
}