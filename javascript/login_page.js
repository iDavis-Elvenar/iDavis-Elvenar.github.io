function log_in(){
    let username = document.getElementById('inputName');
    let password = document.getElementById('inputPassword');
    if (username.value !== "" && password.value !== ""){
        if (is_correct_username(username.value) || is_correct_password(password.value)){
            return;
        }
        $.post('login_AJAX/login.php',{
            username: username.value,
            password: password.value
        },function(data){
            if (data){
                if (typeof data === 'object'){
                    if (data['role']  === 'admin' ){
                        window.open("index.html","_self");
                    }
                }else if (data.includes('$')){
                    create_exception(data.split('$')[1],13,'warning');
                }else{
                    create_exception(data,23,'danger');
                }
            }else{
                create_exception("Could not connect to the server. Please check your <strong>internet connection</strong>.",23,'danger');
            }
        });
    }else{
        create_exception("Both <strong>email</strong> and <strong>password</strong> are required.",13,'warning');
    }

}

setTimeout(first_load, 200);

function first_load() {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
    {
        //create_exception("Using <strong>Chrome</strong> or <strong>Edge</strong> is recommended for better performance.", 10, "warning");
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        //alert('Chrome');
    }
}

