import { connectDb } from "@/database/connect";
import Post from "@/models/post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDb(); // Assuming connectDb returns a promise, make sure to await it
      const { imageUrl, title, description } = req.body;
      console.log(imageUrl, title, description);

      const newPost = new Post({ imageUrl, title, description });
      await newPost.save();
      res.status(200).json({ success: "success" });
    } catch (e) {
      console.error("Error:", e); // Log the entire error object for more details
      res.status(500).json({ message: e.message });
    }
  } else if (req.method === "GET") {
    try {
      await connectDb();
      const posts = await Post.find({});
      res.status(200).json(posts);
    } catch (e) {
      console.error("Error:", e.message);
      res.status(500).json({ error: e.message });
    }
  } else if (req.method == "DELETE") {
    const id = req.query.id;
    try {
      await connectDb;
      const post = await Post.findByIdAndDelete({ _id: id });
      res.status(200).json({ message: "Deleted" });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
