//YOUR FIRE BASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDlxN0ib-vU2OtA5xrxl418WrxXHaCKgR0",
  authDomain: "pokechat-4aea7.firebaseapp.com",
  databaseURL: "https://pokechat-4aea7-default-rtdb.firebaseio.com",
  projectId: "pokechat-4aea7",
  storageBucket: "pokechat-4aea7.appspot.com",
  messagingSenderId: "1044289418536",
  appId: "1:1044289418536:web:08e079728faffae46f4c1d"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Inicia el código
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4> "+ name +"</h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
 
  row = name_with_tag + message_with_tag +like_button;       
 document.getElementById("output").innerHTML += row;
//Termina el código
} });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}



      