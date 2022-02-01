 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyASwUEj54HacWDoXRs2RcDdylOu_9W867E",
   authDomain: "myportfoliostw.firebaseapp.com",
   projectId: "myportfoliostw",
   storageBucket: "myportfoliostw.appspot.com",
   messagingSenderId: "286176699731",
   appId: "1:286176699731:web:e197b3659727d74c7fada6",
   measurementId: "G-9GVKW0ZY83"
 };  //configs padrões do firebase

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
 
async function saveForm(){
     await addDoc(collection(db, "mensagens"), {
         nome:document.getElementById('nome').value,
         email: document.getElementById('email').value,
         mensagem:document.getElementById('message').value
       }).then(()=>{
         document.getElementById('nome').value ='';
         document.getElementById('email').value = '';
         document.getElementById('message').value = '';
         alert('Muito obrigado pelo contato. Retornarei o mais breve possível 😁');
       })   
}
document.getElementById('acao').onclick = (e)=>{
    saveForm()
    e.preventDefault();
}