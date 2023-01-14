function markAllAsRead(){
    document.getElementById('counter').innerHTML= '0';
    if(document.getElementsByClassName('msg-unread').length){
       do {
        var msgUnRead = document.getElementsByClassName('msg-unread');
        msgUnRead[0].classList.remove('msg-unread');
        } while (document.getElementsByClassName('msg-unread').length); 
    }
    
}