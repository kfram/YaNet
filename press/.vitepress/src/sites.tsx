const sites = [
    {
        "name": "Google",
        "icon": "i-logos:google-icon",
        "url": "https://www.google.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["搜索引擎", "常用网站"],
        "keywords": "谷歌 google 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "DuckDuckGo",
        "icon": "i-logos:duckduckgo",
        "url": "https://www.duckduckgo.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["搜索引擎", "常用网站"],
        "keywords": "鸭鸭子 duckduckgo 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "Github",
        "icon": "i-cib:github",
        "url": "https://www.github.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["常用网站"],
        "keywords": "github 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "Stack Overflow",
        "icon": "i-logos:stackoverflow-icon",
        "url": "https://www.stackoverflow.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["常用网站"],
        "keywords": "stackoverflow 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "Reddit",
        "icon": "i-logos:reddit-icon",
        "url": "https://www.reddit.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["常用网站"],
        "keywords": "reddit 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "维基百科",
        "icon": "i-cib:wikipedia",
        "url": "https://zh.wikipedia.org/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["常用网站"],
        "keywords": "reddit 搜索 常用网站",
        "recommend": true,
    },
    {
        "name": "Facebook",
        "icon": "i-logos:facebook",
        "url": "https://www.facebook.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["社交媒体"],
        "keywords": "非死不可 facebook 社交 脸书",
        "recommend": true,
    },
    {
        "name": "X (Twitter)",
        "icon": "i-simple-icons:x",
        "url": "https://x.com/",
        "color": "#ff0000",
        "description": "全球最大社交平台",
        "categories": ["社交媒体"],
        "keywords": "推特 twitter 社交 叉 x",
        "recommend": true,
    },
    {
        "name": "Discord",
        "icon": "i-logos:discord-icon",
        "url": "https://discord.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["社交媒体"],
        "keywords": "Discord 游戏 论坛 直播",
        "recommend": true,
    },
    {
        "name": "Instagram",
        "icon": "i-skill-icons:instagram",
        "url": "https://www.instagram.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["社交媒体"],
        "keywords": "instagram 论坛",
        "recommend": true,
    },
    {
        "name": "Pinterest",
        "icon": "i-logos:pinterest",
        "url": "https://www.pinterest.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["社交媒体"],
        "keywords": "pinterest 论坛",
        "recommend": true,
    },
    {
        "name": "LinkedIn",
        "icon": "i-logos:linkedin-icon",
        "url": "https://www.linkedin.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["社交媒体"],
        "keywords": "linkedin 论坛",
        "recommend": true,
    },
    {
        "name": "YouTube",
        "icon": "i-logos:youtube-icon",
        "url": "https://www.youtube.com/",
        "color": "#ff0000",
        "description": "全球最大视频网站",
        "categories": ["电影", "流媒体"],
        "keywords": "油管 youtube 视频 流媒体",
        "recommend": true,
    },
    {
        "name": "Spotify",
        "icon": "i-logos:spotify-icon",
        "url": "https://www.spotify.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["音乐", "流媒体"],
        "keywords": "声破天 spotify 音乐 流媒体",
        "recommend": true,
    },
    {
        "name": "NETFLIX",
        "icon": "i-cib:netflix text-#e50914",
        "url": "https://www.netflix.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["影音", "流媒体"],
        "keywords": "奈飞 netflix 视频 流媒体",
        "recommend": true,
    },
    {
        "name": "TikTok",
        "icon": "i-logos:tiktok-icon",
        "url": "https://www.tiktok.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["影音", "流媒体"],
        "keywords": "抖音 tiktok 短视频 流媒体",
        "recommend": true,
    },
    {
        "name": "動畫瘋",
        "icon": "i-arcticons:bahamut text-#00b4d8",
        "url": "https://ani.gamer.com.tw/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["影音", "流媒体"],
        "keywords": "巴哈姆特 动画疯 流媒体",
        "recommend": true,
    },
    {
        "name": "Hulu",
        "icon": "i-cib:hulu text-#1ce783",
        "url": "https://www.hulu.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["影音", "流媒体"],
        "keywords": "抖音 tiktok 短视频 流媒体",
        "recommend": true,
    },
    {
        "name": "ChatGPT",
        "icon": "i-simple-icons:openai",
        "url": "https://chatgpt.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "OpenAI ChatGPT 人工智能",
        "recommend": true,
    },
    {
        "name": "Gemini",
        "icon": "i-custom:google-gemini-icon",
        "url": "https://gemini.google.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "google gemini 人工智能",
        "recommend": true,
    },
    {
        "name": "Copilot",
        "icon": "i-custom:microsoft-copilot-icon",
        "url": "https://copilot.microsoft.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "microsoft copilot 人工智能",
        "recommend": true,
    },
    {
        "name": "Claude",
        "icon": "i-logos:claude-icon",
        "url": "https://claude.ai/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "claude ai 人工智能",
        "recommend": true,
    },
    {
        "name": "DeepL",
        "icon": "i-simple-icons:deepl bg-#102c45",
        "url": "https://deepl.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "deepl ai 人工智能",
        "recommend": true,
    },
    {
        "name": "Gauth",
        "icon": "i-arcticons:gauthmath",
        "url": "https://gauthmath.com/",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["AI", "人工智能"],
        "keywords": "gauth math ai 人工智能",
        "recommend": true,
    },
    {
        "name": "MultCloud",
        "icon": "i-twemoji:fire",
        "url": "https://s.yanet.app/wcz3Dy",
        "color": "",
        "description": "全球最大视频网站",
        "categories": ["效率工具", "网盘"],
        "keywords": "MultCloud 网盘 iCloud OneDrive 备份",
        "recommend": true,
    },
]

const querySites = (filters: Array<string>, recommend: boolean = false) => {
    return sites.filter(site => site.recommend === recommend).filter(site => {
        return site.categories.filter(category => filters.includes(category)).length > 0
    })
}

export { sites, querySites }
