const { query } = require("express");
const createPool = require("../config/databaseConfig").default;
const { sql } = require("mssql");


const executeQuery = async (query, params) => {
    try {
      const pool = await createPool;
      const request = pool.request();
      for (const param of params) {
        request.input(param.name, param.value);
      }
      const result = await request.query(query);
      return result.recordset;
    } catch (error) {
      console.error("Database query error:", error);
      throw new DatabaseQueryError(error, query);
    }
  };

  const selectData = async () => {
    const query = "SELECT * FROM notes";
    return await executeQuery(query);
  }

