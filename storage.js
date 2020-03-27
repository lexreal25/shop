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
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        //Bind the data to HTML table
        document.getElementById('list').innerHTML = list;

        
    }else {
        alert('Cannot save shopping list as your browser does not support HTML5');
    }
}
localStorage.setItem('propertyName', 'value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');

function SaveItem() {
    var name= document.forms.ShoppingList.name.value;
    var data= document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();
}
//Change an existing key-value in HTML5 storage.

function ModifyItem(){
    var name1= document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;

    //check if name1 exists.
    if(localStorage.getItem(name1) !=null)
    {
        //update
        localStorage.setItem(name1,data1);
        document.forms.ShoppingList.data.value = localStorage;

    }
    doShowAll();
}

function RemoveItem() {
    var name=document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    doShowAll();
}

function ClearAll(){
    localStorage.clear();
    doShowAll();
}