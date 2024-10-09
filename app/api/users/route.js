import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const { client } = await connectToDatabase();
    const db = client.db("Adiii");  // Connect to the "Adiii" database
    const users = await db.collection("names").find({}).toArray();
    return Response.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}