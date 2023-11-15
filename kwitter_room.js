//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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

document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de sala"
      });

      localStorage.setItem("room_name", room_name);
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Nombre de la sala" + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }












































































