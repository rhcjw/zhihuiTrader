<h1 align="center">ZhiHui Trader | 志辉交易系统</h1>

<p align="center">
  <strong>AI 驱动的全栈金融交易终端 | AI-Powered Full-Stack Trading Terminal</strong>
</p>

<p align="center">
  <strong>V1.0</strong> · 著作权人：肖荣华 · 开发完成日期：2026年06月10日
</p>

---

## 概述 | Overview

**中文：** 志辉交易系统是一款集行情分析、手动交易、自动化策略执行、风险控制、历史回测及账户管理于一体的综合性金融交易终端。系统面向专业交易员、普通投资者以及交易团队，覆盖外汇、贵金属、原油、数字货币、指数及股票等多类金融产品。

**English:** ZhiHui Trader is a comprehensive financial trading terminal integrating market analysis, manual trading, automated strategy execution, risk control, historical backtesting, and account management. Targeting professional traders, retail investors, and trading teams, it covers forex, precious metals, crude oil, cryptocurrencies, indices, and stocks.

---

## 架构 | Architecture

| 层级 Layer | 技术栈 Tech Stack |
|---|---|
| 前端 Frontend | 轻量级图表库, 高性能 K 线渲染 / Lightweight chart lib, high-performance candlestick rendering |
| 后端 Backend | Python 量化计算引擎 + DeepSeek 大语言模型 / Python quant engine + DeepSeek LLM |
| 数据库 Database | PostgreSQL（主/Main） + Redis（缓存与消息队列/Cache & Queue） |
| Web 服务器 | Nginx（HTTPS 反代与静态资源/Reverse proxy & static assets） |

**前后端分离架构**，支持多周期、多品种实时行情展示。AI 引擎可自然语言生成策略代码并自动执行。

**Frontend-backend decoupled architecture**, supports multi-period, multi-symbol real-time quotes. AI engine generates strategy code from natural language and executes automatically.

---

## 平台支持 | Platforms

| 平台 Platform | 说明 Description |
|---|---|
| Windows 桌面版 / Desktop | 核心交易功能 / Core trading functions |
| Android 手机 APP | 移动交易 / Mobile trading |
| 浏览器 / Browser | 登录注册等公开页面 / Login & registration only |

> 核心交易与管理功能仅限专用客户端使用，浏览器仅可访问公开页面，有效防止代码泄露与未授权访问。
> Core trading and management functions are limited to dedicated clients; browser access is restricted to public pages to prevent code leakage and unauthorized access.

---

## 核心功能 | Core Features

### 行情分析 | Market Analysis

- 多周期 K 线图表（支持自由切换）/ Multi-period candlestick charts (seamless switching)
- 技术指标：成交量(Volume)、MA、MACD、KDJ、RSI、布林带(Bollinger Bands)
- 绘图工具：趋势线、水平线、文字注释、箭头标记、测量工具
- 指标自由组合显示/隐藏

### 手动交易 | Manual Trading

- 市价单买入/卖出，支持手数输入
- 止损/止盈价格设置（支持金额与价格两种方式）
- 挂单管理与修改（限价单等）
- 盘面直接拖动止盈止损线调整
- 一键平仓（快速平掉全部持仓）

### AI 自动交易 | AI Automated Trading

- **博弈结构识别引擎** — 自动识别盘面形态并执行交易，参数可调 / Auto-detect chart patterns and execute trades with adjustable parameters
- **AI 策略生成** — 自然语言描述策略逻辑 → DeepSeek 大模型生成可执行交易策略 / Natural language strategy description → DeepSeek LLM generates executable trading strategy
- **策略回测** — 回测净值、交易量等数据 / Backtest with NAV, volume statistics
- **策略审核上线** — 通过安全审核后可在交易端运行 / After review, strategies can run live

### 历史回放 | Historical Replay

- 选择品种和时间范围，按时间顺序播放历史 K 线
- 支持自动播放与手动逐帧播放
- **自由切换 K 线周期无缝衔接**（行业独有功能，对日内交易者复盘训练至关重要）
- VIP 用户可自行上传历史数据

### 赛事中心 | Competition Center

- 赛事报名与排名实时更新
- 参赛者交易排名和净值动态展示

### 交易社区 | Trading Community

- 社区帖子浏览、点赞、回复
- 不离开交易画面即可参与社交互动
- 个人主页展示证书、赛事排名、交易数据

### 教学中心 | Teaching Center

- 老师创建班级、添加学员、布置/批改作业
- 学员学习进度跟踪与提醒
- 完成课程后自动生成结业证书

### 挑战考核 | Challenge Assessment

- 考核账户进度实时跟踪
- 通过后获得考核证书
- 风控指标实时监控与预警

---

## 系统要求 | System Requirements

| 组件 Component | 要求 Requirement |
|---|---|
| 操作系统 OS (服务器) | Windows 10/11 (64-bit) + Linux |
| Python | 3.9+ |
| 数据库 Database | PostgreSQL + Redis |
| Web 服务器 | Nginx |
| 网络 Network | 公网 IP 或域名 / Public IP or domain |

---

## 管理员功能 | Admin Features

- 用户充值审核 / User deposit review
- 身份实名认证审批 / Identity verification approval
- 佣金管理与批量发放 / Commission management & batch distribution
- 在线咨询回复 / Online consultation reply
- 群发消息（按用户等级/活跃度筛选）/ Mass messaging with user segmentation
- 挑战赛事管理 / Challenge competition management
- APP 版本管理与下载统计 / App version management & download analytics

---

## 版权 | Copyright

```
Copyright (c) 2026 肖荣华 (Xiao Ronghua). All rights reserved.

本软件及其用户使用说明书的著作权归肖荣华所有，受《中华人民共和国著作权法》
及国际版权公约保护。未经著作权人书面许可，任何单位和个人不得以任何形式复制、
修改、发行或传播本软件及文档的全部或部分内容。

This software and its user manual are the intellectual property of Xiao Ronghua,
protected by the Copyright Law of the People's Republic of China and international
copyright treaties. Unauthorized reproduction, modification, distribution, or
transmission of any part is strictly prohibited.
```

---

## 联系方式 | Contact

如需技术支持或有商务合作意向，请联系著作权人。

For technical support or business inquiries, please contact the copyright holder.
