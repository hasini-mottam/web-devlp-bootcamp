// alert("hello from js")
const users = [
 {
   "name" : "Jonn Doe",
   "gender" : "Male",
   "image" : "john.png"
 },
   {
   "name" : "Jane Doe",
   "gender" : "Female",
   "image" : "jane.png"
 }
]


var curIndex = 0;


function toggle(){
 if(curIndex == 0)
   curIndex = 1;
 else
   curIndex = 0;


 document.getElementById("card-image").src = users[curIndex].image
 document.getElementById("card-name").innerText =users[curIndex].name
 document.getElementById("card-gender").innerText =users[curIndex].gender
 
}

function random(){
  //fetch('http://randomuser.me/api/')
  fetch('/api/randomuser')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    /*var detail=data.results[0];
    document.getElementById("card-image").src = detail.picture.large
    document.getElementById("card-gender").innerText = detail.gender
    var fullname=detail.name.title +" " + detail.name.first + " " + detail.name.last
    document.getElementById("card-name").innerText = fullname*/
    document.getElementById("card-image").src = data.image;
    document.getElementById("card-name").innerText = data.name;
    document.getElementById("card-gender").innerText = data.gender;
  })
}