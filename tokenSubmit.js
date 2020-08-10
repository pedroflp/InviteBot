function tokenSubmit(){
    var tokenId = document.getElementById('token-id');
    var token = document.getElementById('token-id').value;
    var error1 = document.getElementById('error-warning-invalid');
    var error2 = document.getElementById('error-warning-null');

    if (token != '' && token.length == 18) {
        window.location.assign('https://discord.com/oauth2/authorize?client_id=' + token + '&scope=bot&permissions=3072');
    }
    else if (token.length <= 17 && token.length > 0){
        error1.classList.add('error-warning-active');
        document.getElementById('token-length').innerHTML = token.length + ' characters!';
        setTimeout(function() { 
            error1.classList.remove('error-warning-active');
        }
        , 5000);
    } 
    else if (token == '') {
        error2.classList.add('error-warning-active');
        setTimeout(function() { 
            error2.classList.remove('error-warning-active');
        }
        , 5000);
    }
}