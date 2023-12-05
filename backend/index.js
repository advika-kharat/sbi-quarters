const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
const data = {
  "December 2023": {
    revenue: "716.57 B",
    netIncome: "154.77 B",
    netProfit: "21.60%",
    operatingIncome: "213.55 B",
  },
  "March 2023": {
    revenue: "607.66 B",
    netIncome: "180.94 B",
    netProfit: "29.78%",
    operatingIncome: "049.95 B",
  },
  "June 2023": {
    revenue: "711.87 B",
    netIncome: "185.37 B",
    netProfit: "26.04%",
    operatingIncome: "252.08 B",
  },
  "September 2023": {
    revenue: "805.33 B",
    netIncome: "161.00 B",
    netProfit: "19.99%",
    operatingIncome: "219.36 B",
  },
};

app.get("/api/metrics/:quarter", (req, res) => {
  const { quarter } = req.params;
  res.json(data[quarter]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
