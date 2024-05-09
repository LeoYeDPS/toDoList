"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/count", (req, res) => {
    const { count } = req.body;
    console.log("Received count:", count);
    res.status(200).send(`Count received: ${count}`);
});
const port = 3001;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// New route to fetch Todos from an external API
app.get("/api/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Axios request with type assertion using generics
        const response = yield axios_1.default.get("https://dummyjson.com/todos");
        // The response.data here is now typed as TodoApiResponse
        res.json(response.data.todos); // Directly access the todos array
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Failed to fetch todos" });
    }
}));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
