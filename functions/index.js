import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addNewItem, deleteItem, getAllItems, updateItem } from "./src/items.js";

const app = express()
app.use(cors())
app.use(express.json())

app.post("/items", addNewItem)
app.get("/items", getAllItems)
app.delete("/items/:id", deleteItem)
app.patch("/items/:id", updateItem)

export const api = functions.https.onRequest(app)