const { exec } = require('child_process');

exec('npx -y @modelcontextprotocol/server-postgres "postgresql://postgres:Ls45423455.Lucasoresi2003@aws-0-us-east-2.pooler.supabase.com:6543/postgres" --port 3000', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`❌ Error: ${stderr}`);
    return;
  }
  console.log(`✅ MCP Server running on port 3000`);
});
