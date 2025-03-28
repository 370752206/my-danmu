// 初始化Supabase客户端
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error("请确保SUPABASE_URL和SUPABASE_KEY环境变量已正确设置。");
}

const supabase = supabase.createClient(
  process.env.SUPABASE_URL, // 从环境变量读取
  process.env.SUPABASE_KEY // 从环境变量读取
);

// 验证客户端是否正常工作
supabase
  .from("danmu")
  .select("*")
  .limit(1)
  .then((response) => {
    if (response.error) {
      console.error("Supabase客户端初始化失败：", response.error.message);
    } else {
      console.log("Supabase客户端初始化成功！");
    }
  })
  .catch((error) => {
    console.error("Supabase客户端初始化过程中发生错误：", error);
  });

// 开发环境直接使用（本地测试时）
// const supabase = supabase.createClient(
//   "https://wlncxbmtiewyjvplkree.supabase.com",
//   "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbmN4Ym10aWV3eWp2cGxrcmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMzgzNTgsImV4cCI6MjA1ODcxNDM1OH0.0iThJ4U2n8yNsolaHmt8YY6zwbo6ZI5deCtY8Qt69_U"
// );
