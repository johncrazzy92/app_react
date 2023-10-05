
import { uuidv4 } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref,uploadBytes} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDVHsWL2cN23SA9o3snYIERSI43ef_Ai0M",
  authDomain: "minga-69542.firebaseapp.com",
  projectId: "minga-69542",
  storageBucket: "minga-69542.appspot.com",
  messagingSenderId: "453662409047",
  appId: "1:453662409047:web:eb19cd62708fec6f383e12",
  measurementId: "G-D9HVH707JF"
};

const app = initializeApp(firebaseConfig);
export const firestorage = getStorage(app)

export async function uploadImg(img,path){
   const storageRef = ref(firestorage, `${path}/${uuidv4()}` )
   await uploadBytes(storageRef,img)
   const imgUrl = await getDownloadURL(storageRef)
   return imgUrl
}


