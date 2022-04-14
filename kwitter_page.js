//YOUR FIREBASE LINKS
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
      

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0     
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem( "user_name" ); 
      localStorage.removeItem( "room_name" );
      window .location = "index.html" ;
}