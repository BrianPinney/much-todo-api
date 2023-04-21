import { functions } from "firebase-functions";
import express from "express";
import cors from "cors";
import { addNewItem, getAllItems } from "./src/items";

const app = express()
app.use(cors())
app.use(express.json())

app.post("/itmes", addNewItem)
app.get("/items", getAllItems)

export const api = functions.https.onRequest(app)