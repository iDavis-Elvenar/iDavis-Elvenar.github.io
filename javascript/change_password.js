function change_password(){
    let old_password = document.getElementById('inputOldPassword');
    let new_password = document.getElementById('inputNewPassword');
    if (old_password.value !== new_password.value){
        if (old_password.value !== '' && new_password.value !== ''){
            checked_if_user_exist(old_password.value , new_password.value);
        }else{
            create_exception("All fields are required.",13,'warning');
        }
    }else{
        create_exception("You cannot use the same password.",13,'warning');
    }
}
function checked_if_user_exist(old_password , new_password){
    if (isCorrectPassword(old_password,3,30,'password')||isCorrectPassword(new_password,3,30,'password')){
        return
    }
    $.post('change_password_AJAX/change_password.php',{
        old_password: old_password,
        new_password: new_password
    },function(data){
        if (data){
            if (data.includes("$")){
                let split = data.split("$")
                if (split[0] === '1'){
                    create_exception(split[1],13,'success');
                    document.getElementById('inputName').value = '';
                    document.getElementById('inputOldPassword').value = '';
                    document.getElementById('inputNewPassword').value = '';

                }else{
                    create_exception(split[1],13,'warning');
                }

            }else{
                create_exception(data,33,'danger');
            }
        }else{
            create_exception("Could not connect to the server. Please check your <strong>internet connection</strong>.",23,'danger');
        }
    });
}