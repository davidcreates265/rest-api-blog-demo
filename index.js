import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory Temp data store for tests
let posts = [
  {
    id: 1,
    title: "Practical Uses of Artificial Intelligence in Everyday Software",
    content:
      "Artificial Intelligence is no longer limited to experimental labs or large tech corporations. Today, even small applications leverage AI for features like recommendations, search, automation, and personalization. From chatbots that improve customer support to intelligent data validation in web apps, AI has become an accessible tool for developers looking to build smarter and more efficient software products.",
    author: "David Malunga",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Why Machine Learning Is a Game Changer for Modern Applications",
    content:
      "Machine Learning enables applications to learn from data rather than rely solely on hard‑coded rules. This shift allows systems to adapt, improve accuracy, and uncover insights that would be difficult to detect manually. Developers and businesses are applying machine learning to areas such as recommendation systems, predictive analytics, fraud detection, and user behavior analysis to deliver more intelligent digital experiences.",
    author: "David Malunga",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Responsible AI: Building Trust in Intelligent Systems",
    content:
      "As AI adoption grows, so does the responsibility to build systems that are fair, transparent, and reliable. Responsible AI focuses on minimizing bias, protecting user data, and ensuring that automated decisions can be explained and audited. By prioritizing ethical considerations alongside performance, developers can create AI‑powered solutions that earn user trust and deliver long‑term value.",
    author: "David Malunga",
    date: "2023-08-10T09:15:00Z",
  },
];


let lastId = 3;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Getting all posts
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

// Getting a specific post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// New post
app.post("/posts", (req, res) => {
  const newId = lastId += 1;
  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  lastId = newId;
  posts.push(post);
  res.status(201).json(post);
});

// Patching a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

// Deleting a specific post by providing the post id

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "Invalid post id" });
  }

  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const [deleted] = posts.splice(index, 1);
  return res.status(200).json({ message: "Post deleted", deleted });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
