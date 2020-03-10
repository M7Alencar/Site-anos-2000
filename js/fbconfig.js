// Configuração do Firebase para este App
var firebaseConfig = {
    apiKey: "AIzaSyB_6BEL_aW_SLOlbLTwPhzH0OS9oIYzxdA",
    authDomain: "mecscrip.firebaseapp.com",
    databaseURL: "https://mecscrip.firebaseio.com",
    projectId: "mecscrip",
    storageBucket: "mecscrip.appspot.com",
    messagingSenderId: "93455478230",
    appId: "1:93455478230:web:2c92f0324eb40161788877"
};

// Initializa o Firebase
firebase.initializeApp(firebaseConfig);


//Conexão com o firestore
var db = firebase.firestore();