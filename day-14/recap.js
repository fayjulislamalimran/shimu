/*
JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.*/
document.write("Hello javaScript");

// 3 type of JS Variable
var mobilePrice = "10000";
const mobilePrice = "10000";
let mobilePrice = "10000";
document.write(mobilePrice);

// If Statement
var age = 18;
if (age >= 18) {
  document.write("You are adult");
} else {
  document.write("You are not adult");
}

// Else If Statement
var marks = 101;
if (marks >= 80 && marks <= 100) {
  document.write("A+");
} else if (marks < 80 && marks >= 70) {
  document.write("A");
} else if (marks < 70 && marks >= 60) {
  document.write("A-");
} else if (marks < 60 && marks >= 50) {
  document.write("B");
} else {
  document.write("Error");
}

// Switch Case
var weekDay = "Sunday"

switch (weekDay) {
    case "Saturday":
        document.write("Today is closed")
        break;
        case "Sunday":
        document.write("Today is Open")
        break;
    
    default:
    document.write("Error")
        break;
}

// For Loop 
for ( i /= 1 ; i <= 20 ; i++) {
   document.write(i + "<br/>")
    
}
// While loop 
var i=10
while (i <=16) {
    document.write(i + "<br/>"); i ++;
}

 //   Javascript function
 function addFourNum() {
    var a = 10;
    var b = 20;
    var c = 30;
    var d = 40;
    var e = a + b + c + d;
    document.write(e + "<br/>");
  }
  //   addFourNum();

  //   Function Parameter
  function addTwoNum(a, b) {
    var e = a + b;
    document.write(e + "<br/>");
  }
  //   addTwoNum(11, 22);
  //   addTwoNum(1040, 200);
  //   addTwoNum(100000, 29000);

  //   Function Return
  function fullName() {
    return "Mess";
  }
  var messiName = fullName() + "i";
  //   document.write(messiName);

  //   Javascript Object
  var person = {
    Name: "Fayjul Islam Al Imran",
    Age: 21,
    City: "Nabiganj",
    Muslim: true,
    Country: "BD",
  };
  //   document.write(person["Country"]);

  // JavaScript Array
  var argentinaTeam = ["Lionel Messi", "Emiliano Martínez ", "Alejandro Garnacho"];
  //   document.write(argentinaTeam[2]);
  //   For Loop Over Array
  var argentinaTeam = ["Lionel Messi", "Emiliano Martínez ", "Alejandro Garnacho"];
  for (i = 0; i < argentinaTeam.length; i++) {
    document.write(argentinaTeam[i] + "<br/>");
  }

   // For In Loop Over Array
   var friendsName = ["A", "B", "C"];
   for (var friendship in friendsName) {
     //   document.write(friendsName[friendship]);
   }
   //   For In Loop Over Object
   var person = {
     name: "Messi",
     age: 40,
     height: "5.6 Feet",
   };
   for (var personInfo in person) {
     // document.write(person[personInfo] + "<br>");
   }
   //   Array Concat And Array Form
   var shimuFriends = ["Sabrina", "Nishat", "Shammi"];
   var lubaFriends = ["Sanjida", "Sadiya", "Radiya"];
   var friendship = shimuFriends.concat(lubaFriends);
   document.write(friendship);

   //  JavaScript Date Object
   var dateObject = new Date();
   // document.write(dateObject.getMonth() + " - ", dateObject.getDate() + " - ", dateObject.getFullYear());

   // JavaScript Math Object
   var num1 = -359;
   // document.write(Math.abs(num1));

   var num2 = 99.1;
   document.write(Math.ceil(num2));

//    The window object represents a window in browser. An object of window is created automatically by the browser.
   
   function ObjAlert() {
    alert("Your message");
  }
  function ObjConfirm() {
    confirm("Your message");
  }
  function ObjPrompt() {
    prompt("Your message");
  }
  function ObjOpen() {
    open("Your message");
  }
  function ObjClose() {
    close("Your message");
  }
