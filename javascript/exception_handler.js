let html_alert = undefined;
let html_close= undefined;
let html_text= undefined;
let alert_timer = 0;
let format_for_password = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let format_for_username = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
let format_for_date_config = new RegExp('[0-9]{2}-[0-9]{2}');

window.onload = function() {
    html_alert = document.getElementById('alert');
    html_close = document.getElementById('close');
    html_text = document.getElementById('text');
}
function lengthOK(text_length, min_count_of_characters, max_count_of_characters, what){
    if( text_length < min_count_of_characters || text_length > max_count_of_characters){
        create_exception( 'Your <strong>'+what+'</strong> has incorrect length.' +
            '<br> - the minimal length is <strong>'+min_count_of_characters+'</strong>,' +
            '<br> - the maximal length is <strong>'+max_count_of_characters+'</strong>.',13,'warning');
        return true;
    }else{
        return false;
    }
}

function isCorrectPassword(text_string){
    return lengthOK(text_string.length,3,50,'password');
}

function isCorrectUsername(email_string){
    if (format_for_username.test(email_string) ){
        create_exception( 'Your <strong>email</strong> has the wrong format. Do not use any of the following symbols: '+format_for_username,13,'warning');
        return true;
    }else{
        return lengthOK(email_string.length,3,50,'email');
    }
}
function create_exception(insert_text,time_of_display,type_of_style){
    html_alert.className = 'alert alert-'+type_of_style+' alert-dismissible fade show fixed-top ';
    html_text.innerHTML = insert_text;
    html_close.disabled = false;
    html_alert.style.opacity = 1+'';
    html_alert.style.display = 'revert';
    if (alert_timer !== 0){
        alert_timer = time_of_display
    }else{
        alert_timer = time_of_display
        fade(alert_timer)
    }
}
function fade(){
    if (alert_timer === 0 ){
        html_alert.style.display = 'none';
    }else if (alert_timer <= 3){
        html_close.disabled = true;
        html_alert.style.opacity = alert_timer/10+'';
        alert_timer -= 0.5;
        setTimeout(fade,50,alert_timer);
    }else{
        alert_timer -= 1;
        setTimeout(fade,1000,alert_timer);
    }

}

function close_alert(){
    html_close.disabled = true;
    alert_timer = 3;
}
