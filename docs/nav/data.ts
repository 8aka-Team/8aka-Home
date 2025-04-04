import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '项目仓库',
    items: [
      {
        icon: 'https://nitwikit.8aka.org/img/book.png',
        title: 'NitWikit',
        desc: '一群笨蛋们编写的开服教程',
        link: 'https://github.com/8aka-Team/NitWikit',
      },
      {
        icon: 'https://invero.8aka.org/img/invero_logo.png',
        title: 'Invero',
        desc: '灵活强大多功能的菜单插件',
        link: 'https://github.com/8aka-Team/Invero',
      },
      {
        icon: 'https://www.emojiall.com/images/60/apple/1f602.png',
        title: 'lezi-wiki',
        desc: '集百处之乐，成一家之言',
        link: 'https://github.com/8aka-Team/lezi-wiki',
      },
      {
        icon: 'https://invero.8aka.org/img/invero_logo.png',
        title: 'Invero-Docs',
        desc: 'Invero 插件文档',
        link: 'https://github.com/8aka-Team/Invero-Docs',
      },
    ],
  },
  {
    title: '翻译文档',
    items: [
      {
        icon: 'https://paper.8aka.org/favicon.ico',
        title: 'PaperMC-Docs-CN',
        desc: 'PaperMC 文档汉化',
        link: 'https://github.com/8aka-Team/PaperMC-docs-CN',
      },
      {
        icon: 'https://purpur.8aka.org/images/purpur-small.png',
        title: 'Purpur-Docs-CN',
        desc: 'PurpurMC 文档汉化',
        link: 'https://github.com/8aka-Team/Purpur-Docs-CN',
      },
      {
        icon: 'https://pumpkin.8aka.org/assets/favicon.ico',
        title: 'Pumpkin-Website-CN',
        desc: 'Pumpkin 服务端文档汉化',
        link: 'https://github.com/8aka-Team/Pumpkin-Website-CN',
      },
      {
        icon: 'https://typewriter.8aka.org/img/typewriter.png',
        title: 'TypeWriter-Wiki-CN',
        desc: 'TypeWriter 插件文档汉化',
        link: 'https://github.com/8aka-Team/TypeWriter-Wiki-CN',
      },
      {
        icon: 'https://img.fastmirror.net/s/2025/03/08/67cc3ec690760.png',
        title: 'docker-minecraft-server-cn',
        desc: '教你怎么在 Docker 中开设服务器',
        link: 'https://docker.8aka.org',
      },
      {
        icon: 'https://plugins.8aka.org/img/book.png',
        title: 'PluginsWiki',
        desc: '众多插件文档汉化',
        link: 'https://github.com/8aka-Team/PluginsWiki',
      },
    ],
  },


  {
    title: 'MineBBS资源（插件）',
    items: [

      {
        icon: 'https://invero.8aka.org/img/invero_logo.png',
        title: 'Invero',
        desc: '灵活强大多功能的菜单插件',
        link: 'https://www.minebbs.com/resources/.10851',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9059.jpg',
        title: 'DecentHolograms 内核汉化',
        desc: '当前全球用户数量最多的全息图/浮空字插件',
        link: 'https://www.minebbs.com/resources/decentholograms.9059',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9107.jpg',
        title: 'Citizens2 内核汉化',
        desc: '老牌知名npc插件（单jar多mc版本支持）',
        link: 'https://www.minebbs.com/resources/citizens2-cn-npc-jar-mc.9107',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9084.jpg',
        title: 'Nova及addon',
        desc: '新生代的插件服玩法框架',
        link: 'https://www.minebbs.com/resources/nova.9084',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9080.jpg',
        title: 'TrMenu',
        desc: '全能高级动态菜单插件（社区版）',
        link: 'https://www.minebbs.com/resources/trmenu-bug.9080',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9079.jpg',
        title: 'Craftorithm',
        desc: '多功能合成插件（国人开发）',
        link: 'https://www.minebbs.com/resources/craftorithm-gui.9079',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9076.jpg',
        title: 'TerraformGenerator',
        desc: '一个好看的开源免费世界生成器',
        link: 'https://www.minebbs.com/resources/terraformgenerator.9076',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9075.jpg',
        title: 'FastAsyncWorldEdit',
        desc: '比原版we更快的异步创世神！',
        link: 'https://www.minebbs.com/resources/fastasyncworldedit-we.9075',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9074.jpg',
        title: 'WorldGuard',
        desc: '知名老牌 区域保护/世界保护 插件',
        link: 'https://www.minebbs.com/resources/worldguard-worldguard.9074',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9062.jpg',
        title: 'Waypoints',
        desc: '可用于导航 ，传送点，玩家地标的开源免费插件',
        link: 'https://www.minebbs.com/resources/waypoints-gui.9062',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9057.jpg',
        title: 'TAB',
        desc: '全能高级的 TAB & 计分板 二合一插件',
        link: 'https://www.minebbs.com/resources/tab-tab.9057',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9024.jpg',
        title: 'ResourceHack',
        desc: '插件+客户端mod的 资源包/材质包 保护',
        link: 'https://www.minebbs.com/resources/mod.9024',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9549.jpg?1727850924',
        title: 'DeathMessages',
        desc: '修改玩家死亡信息',
        link: 'https://www.minebbs.com/resources/.9549',
      },
      {
        icon: 'https://img.shields.io/github/license/SakuraKoi/BridgingAnalyzer?style=flat-square',
        title: 'BridgingAnalyzer',
        desc: '1.8服务器的搭路练习插件（二次开发）',
        link: 'https://www.minebbs.com/resources/.9570',
      },
      {
        icon: 'https://img.shields.io/github/license/Bongowole/BridgeLeveling?color=4166f5&style=flat-square',
        title: 'BridgeLeveling',
        desc: '为您的搭路服务器提供更多独特的功能',
        link: 'https://www.minebbs.com/resources/.9646',
      },
      {
        icon: 'https://img.shields.io/github/license/postyizhan/BridgingSkin?style=flat-square',
        title: '搭路方块皮肤',
        desc: '可以给搭路方块换皮肤',
        link: 'https://www.minebbs.com/resources/.9647',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9649.jpg?1729252629',
        title: 'Adyeshach',
        desc: 'Bukkit 平台 虚拟实体 解决方案',
        link: 'https://www.minebbs.com/resources/.9649',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9650.jpg?1729258561',
        title: 'Chemdah',
        desc: '知名任务插件',
        link: 'https://www.minebbs.com/resources/.9650',
      },
      {
        icon: 'https://img.shields.io/github/license/taboolib/zaphkiel',
        title: 'Zaphkiel',
        desc: '物品库插件',
        link: 'https://www.minebbs.com/resources/.9651',
      },
      {
        icon: 'https://img.shields.io/github/license/Rothes/ESU',
        title: 'ESU',
        desc: '现代、多功能插件',
        link: 'https://www.minebbs.com/resources/.10566',
      },
      {
        icon: 'https://img.shields.io/github/license/TheNewEconomy/VaultUnlocked',
        title: 'VaultUnlocked',
        desc: 'Vault 的分支版本，提供更多功能',
        link: 'https://www.minebbs.com/resources/.10014',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/10/10012.jpg?1734129841',
        title: 'ServiceIO',
        desc: 'Vault 的替代品！无缝替换 增强功能 更好性能',
        link: 'https://www.minebbs.com/resources/.10012',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/10/10011.jpg?1734106589',
        title: 'TheNewEconomy',
        desc: '强大而灵活的经济解决方案',
        link: 'https://www.minebbs.com/resources/.10011',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9832.jpg?1732879517',
        title: 'UserPrefix',
        desc: '轻便、高效、实时的称号系统',
        link: 'https://www.minebbs.com/resources/.9832',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9652.jpg?1729290478',
        title: 'BetterHud',
        desc: '一个你以前从未见过的漂亮 HUD 插件',
        link: 'https://www.minebbs.com/resources/.9652',
      },
    ],
  },
  {
    title: 'MineBBS资源（其他）',
    items: [
      {
        icon: 'https://img.fastmirror.net/s/2024/08/21/66c53f77ddec4.png',
        title: 'Leaf',
        desc: '国人开发的高性能插件端核心',
        link: 'https://www.minebbs.com/resources/leaf.9242/',
      },
      {
        icon: 'https://img.shields.io/badge/License-GPL%20v3-yellow.svg',
        title: 'PluginSearchEngine',
        desc: 'Minecraft 插件搜索工具',
        link: 'https://www.minebbs.com/resources/.9122',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9045.jpg',
        title: 'emojis',
        desc: '适用于 ItemsAdder 插件的表情包配置',
        link: 'https://www.minebbs.com/resources/emojis-itemsadder.9045',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9237.jpg?1724158636',
        title: '笨蛋签到',
        desc: 'Invero 的签到系统',
        link: 'https://www.minebbs.com/resources/.9237',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9240.jpg?1727848473',
        title: 'tpa选人菜单',
        desc: '列出服务器在线的所有玩家的头 可翻页，搜索',
        link: 'https://www.minebbs.com/resources/.9240',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/9/9547.jpg?1727848270',
        title: '每日按钮',
        desc: '每天只能点按一次的按钮',
        link: 'https://www.minebbs.com/resources/.9547',
      },
      {
        icon: 'https://www.minebbs.com/data/resource_icons/10/10921.jpg?1742088679',
        title: '垃圾桶',
        desc: '实现简单的垃圾桶功能',
        link: 'https://www.minebbs.com/resources/.10921',
      },
    ],
  },
  {
    title: '笔记本',
    items: [
      {
        icon: 'https://img.fastmirror.net/s/2024/10/02/66fcb3dcaeff0.jpg',
        title: '冒险者传说',
        desc: '猫咪轮船启动！',
        link: '/catship',
      },
      {
        icon: 'https://img.fastmirror.net/s/2024/11/01/6724e66e4a366.png',
        title: 'ArchLinux',
        desc: '驿站的 Arch 笔记',
        link: '/arch',
      },
      {
        icon: 'https://img.fastmirror.net/s/2025/03/08/67cc3c7506ecd.jpg',
        title: 'QQ Bot',
        desc: '驿站的 QQ Bot 使用帮助',
        link: '/bot',
      },
    ],
  },
]
