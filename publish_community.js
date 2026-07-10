// ===================================================================
// 志辉交易系统 - 社区发布脚本
// 在 https://rhcjw.com/community 打开浏览器控制台 (F12 -> Console)
// 粘贴以下全部代码，按回车执行
// ===================================================================

(async () => {
  const content = `我把 DeepSeek 接进了交易系统——AI 分析盘面、跑自营考核、办交易大赛，一套全搞定

做交易这些年，圈子里有三件事很别扭：

1. 策略要手写。脑子里有想法，得翻译成代码——调试、回测、改参数，等折腾完行情早走完了。不会写代码的交易员，想法永远停在脑子里。

2. 自营考核缺工具。市面上要么是海外平台，要么给个 MT4 账户就说"开始考核"，没有进度追踪、没有风控仪表盘、没有自动发证。

3. 办比赛是体力活。Excel 登记、手工统计排名、群里通知成绩——有机构为一场 50 人的内部赛安排了一个全职运营。

所以我做了志辉交易系统——集成 AI 分析、自动策略、自营考核、赛事管理、教学培训、交易社区的全栈交易终端。覆盖外汇、贵金属、原油、数字货币、指数和股票。不是 Demo，V1.0 已开发完成，Windows 桌面版 + Android APP，Python 量化引擎 + DeepSeek 大模型驱动。

🧠 AI 写策略：用中文描述 → DeepSeek 生成可执行代码 → 一键回测 → 审核后直接跑。不会写代码的交易员，想法终于能落地。策略分析师一天测几十个策略不是梦。

🏆 自营考核基建：多级考核账户、实时进度仪表盘、自动发证、风控预警。你设规则，系统跑全程。筛选操盘手、管理自营资金、对外提供考核服务，一套系统撑起来。

🏅 赛事一条龙：创建赛事、实时排名、批量管理选手、海报管理。一个人运营一场百人交易大赛。

其他亮点：历史回放（自由切换 K 线周期无缝衔接，市面上基本没有）、交易社区（交易端内直接互动）、教学中心（建班+教学+考核+发证）。

我正在找合作伙伴：资管/Prop Firm、交易培训机构、赛事主办方、海外市场。系统完整，著作权在手，缺的是推广和运营伙伴。

GitHub：https://github.com/rhcjw/zhihuiTrader
Gitee：https://gitee.com/rhcjw_com/zhihui-trading-system`;
  
  // 系统截图
  const image_urls = [
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E4%BA%A4%E6%98%93%E7%AB%AF%E4%B8%BB%E7%95%8C%E9%9D%A2.png',
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E9%87%8F%E5%8C%96%E4%BA%A4%E6%98%93.png',
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E6%8C%91%E6%88%98%E8%B4%A6%E5%8F%B7%E4%BB%AA%E8%A1%A8%E7%9B%98.png',
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E4%BA%8B%E8%B5%9B%E4%B8%AD%E5%BF%83%E6%8E%92%E5%90%8D%E6%A6%9C.png',
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E5%8E%86%E5%8F%B2%E6%95%B0%E6%8D%AE%E7%AD%96%E7%95%A5%E5%A4%8D%E7%9B%98.png',
    'https://raw.githubusercontent.com/rhcjw/zhihuiTrader/main/images/screenshots/%E4%BA%A4%E6%98%93%E7%A4%BE%E5%8C%BA.png',
  ];

  try {
    const res = await fetch('/community/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, extra_data: { image_urls } })
    });
    const data = await res.json();
    if (res.ok) {
      console.log('✅ 发布成功！刷新页面查看。');
      console.log('Post ID:', data.id || data);
    } else {
      console.error('❌ 发布失败:', data);
    }
  } catch (err) {
    console.error('❌ 网络错误:', err);
  }
})();
