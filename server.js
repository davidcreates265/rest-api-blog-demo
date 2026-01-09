
import express from "express";
import axios from "axios";
import methodOverride from "method-override";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = process.env.API_URL || "http://localhost:4000";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// List posts
app.get("/", async (req, res) => {
  try {
    const { data: posts } = await axios.get(`${API_URL}/posts`);
    res.render("index.ejs", { posts });
  } catch (err) {
    console.error(err.message);
    res.status(500).render("error.ejs", { message: "Error fetching posts" });
  }
});

// New post form
app.get("/new", (req, res) => {
  res.render("modify.ejs", { heading: "New Post", submit: "Create Post", post: null });
});

// Edit form
app.get("/edit/:id", async (req, res) => {
  try {
    const { data: post } = await axios.get(`${API_URL}/posts/${req.params.id}`);
    res.render("modify.ejs", { heading: "Edit Post", submit: "Update Post", post });
  } catch (err) {
    res.status(err.response?.status || 500).render("error.ejs", { message: "Error fetching post" });
  }
});

// Create
app.post("/api/posts", async (req, res) => {
  try {
    await axios.post(`${API_URL}/posts`, req.body);
    res.redirect("/");
  } catch (err) {
    res.status(500).render("error.ejs", { message: "Error creating post" });
  }
});

// Update (PATCH)
app.patch("/api/posts/:id", async (req, res) => {
  try {
    await axios.patch(`${API_URL}/posts/${req.params.id}`, req.body);
    res.redirect("/");
  } catch (err) {
    res.status(500).render("error.ejs", { message: "Error updating post" });
  }
});

// Delete
app.delete("/api/posts/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/posts/${req.params.id}`);
    res.redirect("/");
  } catch (err) {
    res.status(500).render("error.ejs", { message: "Error deleting post" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
