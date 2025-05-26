const { startServer } = require("@modelcontextprotocol/server-postgres");

startServer({
  connectionString: process.env.DATABASE_URL
}).then(() => {
  console.log("✅ MCP Server running");
}).catch((err) => {
  console.error("❌ Error al iniciar el servidor MCP:", err);
});
