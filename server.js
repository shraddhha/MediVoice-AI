import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/analyze", async (req, res) => {
  const { symptoms } = req.body;

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=YOUR_API_KEY", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `Analyze these symptoms and classify risk level: ${symptoms}` }]
          }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "AI analysis failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
