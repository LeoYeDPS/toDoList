import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// Define the structure of the API response
interface TodoApiResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

const app: express.Application = express();
app.use(cors());

app.use(express.json());

app.post("/count", (req, res) => {
  const { count } = req.body;
  console.log("Received count:", count);
  res.status(200).send(`Count received: ${count}`);
});

const port = 3001;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// New route to fetch Todos from an external API
app.get("/api/todos", async (req: Request, res: Response) => {
  try {
    // Axios request with type assertion using generics
    const response = await axios.get<TodoApiResponse>(
      "https://dummyjson.com/todos"
    );
    // The response.data here is now typed as TodoApiResponse
    res.json(response.data.todos); // Directly access the todos array
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
