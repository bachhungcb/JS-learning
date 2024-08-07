//Thiết lập các kết nối đến database
require("dotenv").config();
const { request } = require("express");
const sql = require("mssql");
import { Sequelize } from '@sequelize/core';
import { MsSqlDialect } from '@sequelize/mssql';

const sequelize = new Sequelize({
  dialect: MsSqlDialect,
  server: process.env.DB_HOST,
  instanceName: process.env.DB_INSTANCE,
  port: 1433,
  database: process.env.DB_NAME,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USER,
      password:  process.env.DB_PASS,
    },
  },
});

var dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  options: {
    encrypt: false,
    trustedConnection: true,
    instancename: process.env.DB_INSTANCE,
    requestTimeout: 60000,
  },
 
};

async function createPool() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Connected to database");
    return pool;
  } catch (error) {
    console.error("Failed to connect:", error);
    throw error; // Ném lỗi để báo lỗi cho phần gọi
  }
}
//export config to use in other files
module.exports = createPool();