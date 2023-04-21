import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "../serviceaccount.js";

initializeApp({
    credential: cert(serviceAccount),
})

export const db = getFirestore()