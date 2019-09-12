
//скролы
window.addEventListener('scroll', function(){
    document.getElementById('showScroll').innerHTML = pageYOffset + '10000px';
});
//Кнопки
document.getElementById("button_add").onclick = function(event){
    forma.style.cssText='display: inherit;' +
        'margin: 2% 0%;';
    event.preventDefault();
};

document.getElementById("forma_close").onclick = function(event){

    forma.style.cssText='display:none;';
    event.preventDefault();
};
 document.getElementById("close_note").onclick = function(event){

     forma.style.cssText='display:none;';
     event.preventDefault();
 };
 // Формирование  List

let  toDoList = [];
let  importantList = [];
let  completedList = [];
let  mediumList = [];
let  lowList = [];
 // function storage() {
 //     if (localStorage.getItem('text_todo')!==undefined){
 //         toDoList = JSON.parse(localStorage.getItem("text_todo"));
 //         out_toDo();
 //     }
 //     if (localStorage.getItem('text_important')!==undefined){
 //         importantList = JSON.parse(localStorage.getItem("text_important"));
 //         out_important();
 //     }
 //     if (localStorage.getItem('text_medium')!==undefined){
 //         mediumList = JSON.parse(localStorage.getItem("text_medium"));
 //         out_medium();
 //     }
 //     if (localStorage.getItem('text_low')!==undefined){
 //         lowList = JSON.parse(localStorage.getItem("text_low"));
 //         out_low();
 //     }
 // }
 // storage();



 document.getElementById("add_note").onclick = function (){
   let text = document.getElementById("input-review").value;
     let chek_important = document.getElementById('important_note');
     let chek_medium = document.getElementById('medium_note');
     let chek_low = document.getElementById('low_note');
     if (chek_important.checked) {
         let important = {};
         important.text_important = text;
         let j = importantList.length;
         importantList[j] = important;
         out_important();
         localStorage.setItem('text_important',JSON.stringify(importantList));

     }

   else if(chek_medium.checked) {
         let medium = {};
         medium.text_medium = text;
         let k = mediumList.length;
         mediumList[k] = medium;
         out_medium();
         localStorage.setItem('text_medium',JSON.stringify(mediumList));
     }
     else if(chek_low.checked) {
         let low = {};
         low.text_low = text;
         let m = lowList.length;
         lowList[m] = low;
         out_low();
         localStorage.setItem('text_low',JSON.stringify(lowList));
     }
    else {
         let toDo = {};
         toDo.text_todo = text;
         let i = toDoList.length;
         toDoList[i] = toDo;
         out_toDo();
         localStorage.setItem('text_todo',JSON.stringify(toDoList));

     }
 };

function out_important(){
    let out_1 = '';
    for(let key_important in importantList){
        out_1 +=  '<div class="to_do_text"><div class="row"><div class="col-sm-12"><div class="text_out"><div' +
            ' class="logo_priority"><p>L</p></div><div' +
            ' class="name_note">fdsfdsdsdsf<div' +
            ' class="text_note">' + importantList[key_important].text_important +' </div></div> </div></div></div></div>';
    }
    document.getElementsByClassName("important_note")[0].innerHTML = out_1;

}

function out_medium() {
    let out_2 = '';
    for(let key_medium in mediumList){
        out_2 +=  '<div class="to_do_text"><div class="row"><div class="col-sm-12"><div class="text_out"><div' +
            ' class="logo_priority"><p>L</p></div><div' +
            ' class="name_note">fdsfdsdsdsf<div' +
            ' class="text_note">' + mediumList[key_medium].text_medium +' </div></div> </div></div></div></div>';
    }
    document.getElementsByClassName("medium_note")[0].innerHTML = out_2;

}

function out_low() {
    let out_3 = '';
    for(let key_low in lowList){
        out_3 +=  '<div class="to_do_text"><div class="row"><div class="col-sm-12"><div class="text_out"><div' +
            ' class="logo_priority"><p>L</p></div><div' +
            ' class="name_note">fdsfdsdsdsf<div' +
            ' class="text_note">' + lowList[key_low].text_low +' </div></div> </div></div></div></div>';
    }
    document.getElementsByClassName("low_note")[0].innerHTML = out_3;

}

function out_toDo() {
    let out = '';
    for(let key_toDo in toDoList){
        out +=  '<div class="to_do_text"><div class="row"><div class="col-sm-12"><div class="text_out"><div' +
            ' class="logo_priority"><p>L</p></div><div' +
            ' class="name_note">fdsfdsdsdsf<div' +
            ' class="text_note">' + toDoList[key_toDo].text_todo +'</div><button type="button"  id="delete_todo"' +
            ' data-dismiss="modal" aria-hidden="true">\n' +
            '                                        <i class="fas fa-trash-alt"></i></button>\n' +
            '                                    <button type="button"  id="edit_todo" data-dismiss="modal"' +
            ' aria-hidden="true">\n' +
            '                                        <i class="fas fa-edit"></i></button></div> </div></div></div></div>';

    }
    document.getElementById("to_do_note").innerHTML =out;


}

document.getElementById("delete_todo").onclick = function () {

    toDoList.splice(1,1)
};












