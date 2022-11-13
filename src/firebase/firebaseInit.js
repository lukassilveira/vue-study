import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBZIBc4sRjcWCIEOm5CQYz2r0l80QGCNNs",
	authDomain: "vue-study-347e8.firebaseapp.com",
	projectId: "vue-study-347e8",
	storageBucket: "vue-study-347e8.appspot.com",
	messagingSenderId: "638960587643",
	appId: "1:638960587643:web:7815009c044d01974ee3de",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
