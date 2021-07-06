alert("Welcome to DBZ!")
var x;
x = prompt("Who's the main character of the show?");
alert(" It's Goku!");
var x;
x=prompt("What's your favorite form?");
alert("I like that form too!")
var x;
x=prompt("How many Dragon Balls do you need to make a wish?");
alert("You need 7 Dragon Balls!")

function askQuestion(){
    var dbz = false;
    while(dbz ==false){
        dbz=prompt("How many do you have 0-7?");
        if (dbz <7) {
            alert("You can't make a wish.");
            dbz = true;    
      }
      else{
          alert("All 7!? Go summon Shenron and make your wish!");
      }
    }

}
     
askQuestion();

var amount = prompt ("How many Dragon Balls do you want?");
for(let i = 0; i < amount; i++){
    document.write("<img src ='https://www.poopoopanda.com/assets/images/BAN85487-07.jpg'>");
}

//var dbz = false;
//while(dbz ==false){

//}
//dbz=prompt("How many do you have 0-7?");
//if (dbz <"7") {
    //alert("You can't make a wish.");
    //dbz = true;
    
//}
//else{

    //alert("All 7!? Go summon Shenron and make your wish!");

//}

//askQuestion();

//var amount = prompt ("How many Dragon Balls do you want?");
//for(let i = 0; i < amount; i++){
//    document.write("<img src ='https://www.poopoopanda.com/assets/images/BAN85487-07.jpg>");
//}
