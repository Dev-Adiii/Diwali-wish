import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const { name } = await request.json();
    
    await client.connect();
    const database = client.db('Adiii');
    const collection = database.collection('names');
    
    await collection.insertOne({ name, timestamp: new Date() });
    
    return new Response(JSON.stringify({ message: 'Name submitted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Error submitting name' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}