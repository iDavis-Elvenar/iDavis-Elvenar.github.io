function log_out(){
    $.post('log out AJAX/log_out.php',{
    },function(data){
        if (data){
            window.open("index.php","_self");
        }else{
            alert("Could not connect to the server. Please check your <strong>internet connection</strong>.");
        }
    });
}