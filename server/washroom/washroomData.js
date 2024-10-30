import { ObjectId } from "mongodb"
import { collection } from "../db.js"

export async function findAllWashrooms(nameFragment) {
    let mongoQuery = {}
    if(nameFragment !== undefined){
        mongoQuery.name = nameFragment
    }
    const washroomCollection = await collection('washrooms')
    //const cursor = await heroCollection.find() // Step 1: no query finds everything! --Step1
    // const cursor = await heroCollection.find({name:'flash'}) // Step 2: query finds hardcoded data for exact name match! -- Step 2
    //const cursor = await heroCollection.find({name:nameFragment}) // Step 3:  query finds query data from parameter for exact name match! -- Step 3
    const cursor = await washroomCollection.find(mongoQuery)  // Step 4: find the data exact match 
    const washrooms = await cursor.toArray()
    return washrooms
}

export async function findWashroomById(id) {
    const washroomCollection  = await collection('washrooms')
    const singleWashroom =  await washroomCollection.findOne({_id: new ObjectId(id)})
    return singleWashroom
}

export async function createWashroom(data) {
    const washroomCollection  = await collection('washrooms')
    const insertResult = await washroomCollection.insertOne(data)
    console.log('Inserted Washroom ', insertResult.insertedId)
    return await washroomCollection.findOne({_id: insertResult.insertedId})
}