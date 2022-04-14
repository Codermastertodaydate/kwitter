
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA16VDGxX5bx_R0PGLQViSyKLqmuZXQb5s",
      authDomain: "twitter-447ad.firebaseapp.com",
      databaseURL: "https://twitter-447ad-default-rtdb.firebaseio.com",
      projectId: "twitter-447ad",
      storageBucket: "twitter-447ad.appspot.com",
      messagingSenderId: "977083333371",
      appId: "1:977083333371:web:58144aa4ac219a8e9a0e5e"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name  "+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML+=row;    
//End code
      });});}
getData();


function Addroom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room_name"
  })
  localStorage.setItem ("room_name",room_name)
  window.location="kwitter_page.html"
}
function redirecttoRoomName(name){
      console.log (name)
      localStorage.setItem("room_name",room_name) 
      window.location("kwitter_page.html")
}

