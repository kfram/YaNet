const clients = [
  {
    "name": "Mihomo Party",
    "description": "一个更易用的客户端",
    "slug": "mihomo-party",
    "platform": ["windows", "linux", "mac", "clash", "mihomo"]
  },
  {
    "name": "Clash Verge Rev",
    "description": "Clash Verge 的延续，基于 Tauri 的 Clash Meta GUI",
    "slug": "clash-verge-rev",
    "platform": ["windows", "linux", "mac", "clash", "mihomo"]
  },
  {
    "name": "Clash Nyanpasu",
    "description": "新一代Clash GUI客户端",
    "slug": "clash-nyanpasu",
    "platform": ["windows", "linux", "mac", "clash", "mihomo"]
  },
  {
    "name": "Clash for Flutter",
    "description": "Clash的桌面客户端，支持 windows、linux、macos",
    "slug": "clash-for-flutter",
    "platform": ["windows", "linux", "mac", "clash", "mihomo"]
  },
  {
    "name": "GUI for Cores",
    "description": "为 mihomo 和 sing-box 内核设计的图形用户界面应用程序",
    "slug": "gui-for-cores",
    "platform": [
      "windows",
      "linux",
      "mac",
      "android",
      "clash",
      "mihomo",
      "singbox"
    ]
  },
  {
    "name": "Egern",
    "description": "Egern 是一款功能丰富、强大的网络工具，专门用于代理、拦截和修改网络流量",
    "slug": "egern",
    "platform": ["ios"]
  },
  {
    "name": "karing",
    "description": "简单而强大，基于规则的网络代理工具",
    "slug": "karing",
    "platform": ["ios"]
  },
  {
    "name": "loon",
    "description": "Loon是一款iOS上强大的网络工具，支持基于域名、IP、URL，SSID规则进行分流，强大的策略组组合可以满足任何的网络分流需求；Loon可以抓取、保存、修改HTTP/HTTPs流量，配合Javascript可以处理任何复杂的需求",
    "slug": "loon",
    "platform": ["ios", "appletv"]
  },
  {
    "name": "nekoray",
    "description": "基于 Qt 的跨平台代理配置管理器 (后端 sing-box)",
    "slug": "nekoray",
    "platform": ["windows", "linux", "mac"]
  },
  {
    "name": "Pandora Box",
    "description": "一个简易的 Mihomo 桌面客户端",
    "slug": "pandora-box",
    "platform": ["windows", "linux", "mac"]
  },
  {
    "name": "Shadowrocket",
    "description": "基于规则的代理实用客户端，适用于 iPhone/iPad",
    "slug": "shadowrocket",
    "platform": ["ios"]
  },
  {
    "name": "Stash",
    "description": "Stash 是Clash Premium 内核在Apple 设备上的最佳实现客户端，为iOS、tvOS、macOS 与visionOS 平台完整适配Clash 功能",
    "slug": "stash",
    "platform": ["mac", "ios", "appletv"]
  },
  {
    "name": "Surge",
    "description": "适用于 Mac 和 iOS 的高级网络工具箱",
    "slug": "surge",
    "platform": ["mac", "ios", "appletv"]
  }
]

const queryClients = (filters: Array<String>) => {
  if (filters.length === 0) {
    return clients
  } else {
    return clients.filter(client => {
      return client.platform.filter(platform => {
        return filters.includes(platform)
      }).length > 0
    })
  }
}

export { clients, queryClients }
