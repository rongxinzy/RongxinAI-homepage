const header = document.querySelector("[data-header]");
const tabsRoot = document.querySelector("[data-tabs]");
const languageButtons = [...document.querySelectorAll("[data-lang]")];

const translations = {
  zh: {
    pageTitle: "RongxinAI - OpenClaw 智能体桌面控制台",
    pageDescription:
      "RongxinAI 是面向 OpenClaw AI 智能体的本地优先桌面应用。无需长期使用终端，即可配置模型提供商、技能、消息渠道、定时任务和本地模型。",
    ogTitle: "RongxinAI - OpenClaw 智能体桌面控制台",
    ogDescription:
      "一个更现代的 OpenClaw 桌面界面：聊天、技能、渠道、定时任务、模型提供商和本地模型工作流。",
    skip: "跳到主要内容",
    navProduct: "产品",
    navWorkflows: "工作流",
    navLocal: "本地优先",
    navFaq: "FAQ",
    navDownload: "获取",
    heroEyebrow: "本地优先的 OpenClaw 桌面体验",
    heroTitle: "RongxinAI 智能体桌面控制台",
    heroCopy:
      "把 OpenClaw 的模型、技能、渠道和定时任务收进一个本地桌面应用。配置更清楚，运行更稳定，团队不必在终端和配置文件之间切换。",
    heroPrimary: "获取 RongxinAI",
    heroSecondary: "查看 GitHub",
    statPlatforms: "桌面平台",
    statRuns: "定时智能体任务",
    statProviders: "模型提供商",
    tickerProvider: "模型提供商配置",
    tickerKeychain: "系统钥匙串存储",
    tickerCron: "定时任务自动化",
    tickerSkills: "技能市场",
    tickerChannels: "渠道路由",
    tickerOllama: "Ollama 工作流",
    tickerAgents: "智能体切换",
    tickerTranscripts: "本地会话记录",
    productKicker: "产品",
    productTitle: "智能体需要的能力，都变成你能操作的软件。",
    productCopy:
      "RongxinAI 保留 OpenClaw 的完整能力，同时用清晰的工作流、即时校验和持久化界面状态，替代分散的配置文件和终端上下文切换。",
    tabChat: "聊天",
    tabCron: "定时任务",
    tabSkills: "技能",
    tabChannels: "渠道",
    tabModels: "模型",
    panelChatTitle: "直接和智能体对话",
    panelChatCopy: "现代聊天界面内置 Markdown、数学公式、智能体路由和隔离工作区。",
    panelCronTitle: "让任务按计划持续运行",
    panelCronCopy: "通过可视化表单创建周期任务、投递目标和渠道通知，不再手写 JSON。",
    panelSkillsTitle: "安装技能，不需要包管理器心智负担",
    panelSkillsCopy: "浏览内置和已发现技能，查看真实目录，并保持托管技能目录同步。",
    panelChannelsTitle: "把智能体接入真实渠道",
    panelChannelsCopy: "在同一界面管理 Telegram、微信、Discord 等渠道工作流和账号绑定。",
    panelModelsTitle: "统一云端模型和本地模型",
    panelModelsCopy: "配置模型提供商、校验凭证、管理 Ollama、导入 GGUF 文件并运行本地推理。",
    workflowsKicker: "工作流",
    workflowsTitle: "为真正想让智能体干活的人设计，而不是制造新的维护负担。",
    workflowsCopy:
      "应用接管运维层：进程生命周期、模型提供商检查、渠道连接、运行时目录、会话历史和首次启动配置。",
    workflowSetupTitle: "引导式初始化",
    workflowSetupCopy: "选择语言、连接模型提供商、启用技能，并在首次对话前完成运行时验证。",
    workflowProviderTitle: "模型提供商控制",
    workflowProviderCopy:
      "支持 OpenAI、Anthropic、Google、Moonshot、Qwen、OpenRouter、自定义端点和本地 Ollama 模型。",
    workflowChannelsTitle: "渠道运营",
    workflowChannelsCopy: "绑定账号、选择默认账号，并让智能体投递路径保持可见，而不是埋在配置里。",
    workflowRuntimeTitle: "运行时可见性",
    workflowRuntimeCopy: "查看 Gateway 状态、运行 OpenClaw Doctor，并在应用内访问高级开发工具。",
    localKicker: "本地优先",
    localTitle: "智能体运行在你的电脑上。密钥留在系统钥匙串里。",
    localCopy:
      "RongxinAI 使用 Electron Store 保存本地应用状态，并通过系统原生钥匙串保存模型提供商凭证。后端调用由桌面宿主层代理，渲染进程不负责传输策略。",
    localItemRuntime: "内置 OpenClaw 运行时，并自动管理 Gateway 生命周期",
    localItemHistory: "从本地 OpenClaw 会话文件读取结构化历史记录",
    localItemNoDb: "无需数据库、无需托管控制台，也不依赖纯浏览器环境",
    localItemDevtools: "高级开发工具放在明确的设置入口之后",
    downloadKicker: "Mac, Windows, Linux",
    downloadTitle: "安装桌面应用，连接你的第一个模型提供商。",
    downloadCopy: "从 Release 安装包开始，或克隆仓库并在本地运行 Vite + Electron 开发服务。",
    downloadPrimary: "获取最新版",
    downloadSecondary: "查看开发者安装",
    faqKicker: "FAQ",
    faqTitle: "安装前先把关键问题讲清楚。",
    faqOpenClawQ: "RongxinAI 和 OpenClaw 是同一个东西吗？",
    faqOpenClawA: "不是。RongxinAI 是构建在 OpenClaw 之上的桌面界面，它内置并管理运行时，让用户通过 GUI 操作智能体。",
    faqKeyQ: "我需要模型提供商 API Key 吗？",
    faqKeyA:
      "使用云端模型时需要。RongxinAI 会帮助你配置提供商，并把凭证保存到系统原生钥匙串里；同时也支持本地 Ollama 工作流。",
    faqNoCodeQ: "非开发者可以使用吗？",
    faqNoCodeA: "可以。核心流程都是可视化的：初始化、模型提供商校验、聊天、技能、渠道、定时任务和本地模型管理。",
    faqOpenSourceQ: "它是开源的吗？",
    faqOpenSourceA: "是。应用采用 MIT 许可证，源代码托管在 GitHub。",
  },
  en: {
    pageTitle: "RongxinAI - The desktop control plane for OpenClaw agents",
    pageDescription:
      "RongxinAI is a local-first desktop app for OpenClaw AI agents. Configure providers, skills, channels, cron automations, and local models without living in the terminal.",
    ogTitle: "RongxinAI - The desktop control plane for OpenClaw agents",
    ogDescription:
      "A polished desktop interface for OpenClaw agents: chat, skills, channels, cron automation, provider setup, and local model workflows.",
    skip: "Skip to content",
    navProduct: "Product",
    navWorkflows: "Workflows",
    navLocal: "Local-first",
    navFaq: "FAQ",
    navDownload: "Download",
    heroEyebrow: "Local-first desktop experience for OpenClaw",
    heroTitle: "RongxinAI Agent Desktop",
    heroCopy:
      "Bring OpenClaw models, skills, channels, and scheduled work into one local desktop app. Configuration becomes clearer, runtime work stays close, and teams stop bouncing between terminals and config files.",
    heroPrimary: "Get RongxinAI",
    heroSecondary: "View GitHub",
    statPlatforms: "desktop platforms",
    statRuns: "scheduled agent runs",
    statProviders: "model providers",
    tickerProvider: "Provider setup",
    tickerKeychain: "Secure keychain storage",
    tickerCron: "Cron automation",
    tickerSkills: "Skill marketplace",
    tickerChannels: "Channel routing",
    tickerOllama: "Ollama workflows",
    tickerAgents: "Agent switching",
    tickerTranscripts: "Local transcripts",
    productKicker: "Product",
    productTitle: "Everything agents need, surfaced as software you can operate.",
    productCopy:
      "RongxinAI keeps OpenClaw's power intact while replacing scattered config files and CLI context switching with clear workflows, validation, and durable UI state.",
    tabChat: "Chat",
    tabCron: "Cron",
    tabSkills: "Skills",
    tabChannels: "Channels",
    tabModels: "Models",
    panelChatTitle: "Chat with agents directly",
    panelChatCopy: "Use a modern chat surface with Markdown, math, agent routing, and isolated workspaces.",
    panelCronTitle: "Schedule work that keeps running",
    panelCronCopy: "Create recurring jobs, delivery targets, and channel-specific notifications without editing JSON.",
    panelSkillsTitle: "Install skills without package-manager friction",
    panelSkillsCopy: "Browse bundled and discovered skills, inspect their source location, and keep the managed directory in sync.",
    panelChannelsTitle: "Route agents to real channels",
    panelChannelsCopy: "Manage Telegram, WeChat, Discord, Slack-style workflows, and account bindings from one interface.",
    panelModelsTitle: "Bring cloud and local models together",
    panelModelsCopy: "Configure providers, validate credentials, manage Ollama, import GGUF files, and run local inference.",
    workflowsKicker: "Workflows",
    workflowsTitle: "Built for people who want agents to do work, not create chores.",
    workflowsCopy:
      "The app handles the operational layer: process lifecycle, provider checks, channel wiring, runtime folders, transcript history, and first-run setup.",
    workflowSetupTitle: "Guided setup",
    workflowSetupCopy: "Pick language, connect a provider, choose skills, and verify the runtime before the first chat.",
    workflowProviderTitle: "Provider control",
    workflowProviderCopy:
      "Use OpenAI, Anthropic, Google, Moonshot, Qwen, OpenRouter, custom endpoints, and local Ollama models.",
    workflowChannelsTitle: "Channel operations",
    workflowChannelsCopy: "Bind accounts, select defaults, and keep agent delivery paths visible instead of hidden in config.",
    workflowRuntimeTitle: "Runtime visibility",
    workflowRuntimeCopy: "Inspect gateway state, run OpenClaw Doctor, and keep advanced tools available without leaving the app.",
    localKicker: "Local-first",
    localTitle: "Your agents run on your machine. Your credentials stay in the OS keychain.",
    localCopy:
      "RongxinAI uses Electron Store for local app state and native keychain storage for provider credentials. It proxies backend calls through the desktop host layer, so renderer code does not own transport policy.",
    localItemRuntime: "Bundled OpenClaw runtime with automatic gateway lifecycle management",
    localItemHistory: "Structured transcript history from local OpenClaw session files",
    localItemNoDb: "No database setup, no hosted control plane, no browser-only dependency",
    localItemDevtools: "Advanced developer tools available behind explicit settings",
    downloadKicker: "Mac, Windows, Linux",
    downloadTitle: "Install the desktop app and connect your first provider.",
    downloadCopy: "Start from a release build, or clone the repository and run the Vite + Electron dev server locally.",
    downloadPrimary: "Get the latest release",
    downloadSecondary: "Read developer setup",
    faqKicker: "FAQ",
    faqTitle: "Sharp answers before you install.",
    faqOpenClawQ: "Is RongxinAI the same thing as OpenClaw?",
    faqOpenClawA:
      "No. RongxinAI is a desktop interface built on top of OpenClaw. It embeds and manages the runtime so users can operate agents through a GUI.",
    faqKeyQ: "Do I need an AI provider key?",
    faqKeyA:
      "Yes for cloud model usage. RongxinAI helps configure providers and stores credentials in the native OS keychain. Local Ollama workflows are also supported.",
    faqNoCodeQ: "Can non-developers use it?",
    faqNoCodeA:
      "Yes. The main flows are visual: setup, provider validation, chat, skills, channels, cron automation, and local model management.",
    faqOpenSourceQ: "Is it open source?",
    faqOpenSourceA: "Yes. The application is MIT-licensed and the source code is available on GitHub.",
  },
};

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
};

const setLanguage = (language) => {
  const dictionary = translations[language] ?? translations.zh;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.pageTitle;
  setMeta('meta[name="description"]', dictionary.pageDescription);
  setMeta('meta[property="og:title"]', dictionary.ogTitle);
  setMeta('meta[property="og:description"]', dictionary.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  const heroSource = document.querySelector("[data-hero-source]");
  const heroImage = document.querySelector("[data-hero-img]");
  const heroPath = `./assets/hero/${language}.webp`;
  if (heroSource) heroSource.srcset = heroPath;
  if (heroImage) {
    heroImage.src = heroPath;
    heroImage.alt = heroImage.dataset[`alt${language[0].toUpperCase()}${language.slice(1)}`] ?? heroImage.alt;
  }

  document.querySelectorAll("[data-screen]").forEach((screen) => {
    const source = screen.dataset[`src${language[0].toUpperCase()}${language.slice(1)}`];
    if (source) screen.src = source;
    const alt = screen.dataset[`alt${language[0].toUpperCase()}${language.slice(1)}`];
    if (alt) screen.alt = alt;
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const initialLanguage = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "zh";
setLanguage(initialLanguage);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (tabsRoot) {
  const tabs = [...tabsRoot.querySelectorAll("[data-tab]")];
  const panels = [...tabsRoot.querySelectorAll("[data-panel]")];
  const screens = [...tabsRoot.querySelectorAll("[data-screen]")];

  const activate = (name) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === name;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === name;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.screen === name);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tab));
  });
}
