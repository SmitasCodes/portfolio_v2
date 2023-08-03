import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const contactService = async (userInput) => {
  await addDoc(collection(db, `messages/`), userInput);
};

export default contactService;
