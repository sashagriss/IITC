const express = require("express");
const sql = require("mssql");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(express.json());

// Database configuration
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true, // Bypass SSL certificate validation
    trustedConnection: true,
    connectTimeout: 30000, // Increase connection timeout to 30 seconds
  },
};
// sasha
// Route to get data
// app.get("/getAllItems", async (req, res) => {
//   try {

//     //     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec getAllItems");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });
// // //////////////////////////////////////////////////
// app.get("/checkOrder", async (req, res) => {
//   try {
//     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec checkOrder");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });
// // ////////////////////////////////////////////////////////

// app.get("/checkSubClients", async (req, res) => {
//   try {
//     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec checkSubClients");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });
// // ////////////////////////////////////////////////////////////////
// app.get("/checkCrdtDebt", async (req, res) => {
//   try {
//     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec checkCrdtDebt");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });
// // ///////////////////////////////////////////////////////////////////

// app.get("/getPendingOrders", async (req, res) => {
//   try {
// //     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec getPendingOrders");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });

// app.get("/data", async (req, res) => {
//   try {
//     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("exec checkSubClients");

// Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });

// TEST ISRAEL
app.get("/babushka", async (req, res) => {
  try {
    res.json({ msg: "hello" });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

app.get("/data", async (req, res) => {
  try {
    res.json({ msg: "hello World" });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

app.add = function () {
  return "success";
};

app.sum = (a, b) => {
  return a + b;
};

app.makeString = (num) => {
  return num.toString();
};

app.post("/baba", (req, res) => {
  const id = req.body.id;
  try {
    res.json({ id: id });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
