/* Checking browser support*/

function CheckBrowser() {
    if('localStorage' in window && window['localStorage'] !== null){
        //we can use localStorage object to store data.
        return true;
    }else {
        return false;
    }
}

if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;

    //for a more advanced feature, you can set a cap on max items in the cart 
    for ( i = 0; i <= localStorage.length-1; i++) {
        key = localStorage.key(i);
        list += "<tr><td>" + key + "</td></tr>\n";
    }
    //if no item exist in the cart
    if (list == "<tr><th>Item</th><th>value</th></tr>\n") {
        list += "<tr><td><i>empty</i></td><"
        
    }
}