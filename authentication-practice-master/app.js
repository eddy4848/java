// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyAVlFuQkKNpgk_KLj24obqbYHABxaQO9gQ",
    authDomain: "authentication-d6771.firebaseapp.com",
    projectId: "authentication-d6771",
    storageBucket: "authentication-d6771.appspot.com",
    messagingSenderId: "482235027474",
    appId: "1:482235027474:web:7dc0e72ff2a6e3072c48cb"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signupButton = document.getElementById("signup")

signupButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
    })
    .catch((error) => {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
    });
});


//Signin Function
let signInButton = document.getElementById("signin")

signInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signin click");
    
    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .signInWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
        window.location = "home.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.email;
        var users = document.getElementById("user");
        users.appendChild(text);
        console.log(users);
    }
    else {

    }
});