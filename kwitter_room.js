
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAVsdC5LdlcBZJQY24bfNHK-s-IjwNKjkE",
    authDomain: "let-s-chat-14c5f.firebaseapp.com",
    projectId: "let-s-chat-14c5f",
    storageBucket: "let-s-chat-14c5f.appspot.com",
    messagingSenderId: "568983867737",
    appId: "1:568983867737:web:7f8caa4ccfb936bc627c48"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

function addRoom(){
  
}
