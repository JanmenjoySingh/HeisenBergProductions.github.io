var firebaseConfig = {
    apiKey: "AIzaSyCGxX6HONOH-cPwASLkg69HK6S7N2OTxrQ",
    authDomain: "contact-9ae24.firebaseapp.com",
    databaseURL: "https://contact-9ae24.firebaseio.com",
    projectId: "contact-9ae24",
    storageBucket: "contact-9ae24.appspot.com",
    messagingSenderId: "998231282571",
    appId: "1:998231282571:web:66f1a72551db55d1ce958e"
  };
//Init firebase
firebase.initializeApp(firebaseConfig());
var firestore = firebase.firestore();

//grab data
const submitBtn=document.querySelector('#submit');

let userName = document.querySelector('#name');
let userNumber = document.querySelector('#number');
let userEmail = document.querySelector('#email');
let userMessage = document.querySelector('#message');

const db = firestore.collection("contactData");

submitBtn.addEventListener('click',function(){
    let userNameInput = userName.value;
    let userNumberInput = userNumber.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;
    
    //access database
    db.doc().set({
        name: userNameInput,
        number: userNumberInput,
        email: userEmailInput,
        message: userMessageInput,
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log(error);
    });
});
