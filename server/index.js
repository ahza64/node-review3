const path = require('path');
const express = require("express");

let team_members = [
  { id: 1, name: "john1", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 2, name: "john2", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 3, name: "john3", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 4, name: "john4", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 5, name: "john5", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 6, name: "john6", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 7, name: "john7", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 8, name: "john8", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 9, name: "john9", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 10, name: "john10", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 11, name: "john11", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 12, name: "john12", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 13, name: "john13", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 14, name: "john14", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
  { id: 15, name: "john15", title: "developer", picture: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
]

let jobs = [
  { id: 1, title: "developer", url: "https://www.job1.com" },
  { id: 2, title: "developer", url: "https://www.job2.com" },
  { id: 3, title: "developer", url: "https://www.job3.com" },
  { id: 4, title: "developer", url: "https://www.job4.com" },
  { id: 5, title: "developer", url: "https://www.job5.com" }
]

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/team_members", (req, res) => {
  res.json(team_members);
});

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/job/:id", (req, res) => {
  // res.status(200)
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
