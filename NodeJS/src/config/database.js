require("dotenv").config();
const sql = require('mssql')
const { request } = require("express");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

// async function createPool() {
//   try {
//     const pool = await sql.connect(dbConfig);
//     console.log("Connected to database");
//     return pool;
//   } catch (error) {
//     console.error("Failed to connect:", error);
//     throw error; // Ném lỗi để báo lỗi cho phần gọi
//   }
// }

//export config to use in other files

module.exports = dbConfig;


  