function markAllAsRead(){
    document.getElementById('counter').innerHTML= '0';
    if(document.getElementsByClassName('msg-unread').length){
       do {
        var amountMsgUnRead = document.getElementsByClassName('msg-unread');
        amountMsgUnRead[0].classList.remove('msg-unread');
        } while (document.getElementsByClassName('msg-unread').length); 
    }
    if(document.getElementsByClassName('dot').length){
        do {
         var amountMsgUnRead = document.getElementsByClassName('dot');
         amountMsgUnRead[0].classList.remove('dot');
         } while (document.getElementsByClassName('dot').length); 
     }
    
}