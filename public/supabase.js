// 初始化Supabase客户端
const supabase = supabase.createClient(
  process.env.SUPABASE_URL, // 从环境变量读取
  process.env.SUPABASE_KEY // 从环境变量读取
);

// 开发环境直接使用（本地测试时）
// const supabase = supabase.createClient(
//   "https://wlncxbmtiewyjvplkree.supabase.com",
//   "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbmN4Ym10aWV3eWp2cGxrcmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMzgzNTgsImV4cCI6MjA1ODcxNDM1OH0.0iThJ4U2n8yNsolaHmt8YY6zwbo6ZI5deCtY8Qt69_U"
// );
