module.exports = {
  base: '/MyBlog/',
  title: 'zsn的前端日志',
  description: '欢迎访问我的前端日志',
  themeConfig: {
    repo: "ZSN1024/blog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      },
      {
        text: "面试题",
        link: "/interview/"
      },
      {
        text: "阅读",
        link: "/book/"
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: 'Devops',
          collapsable: true,
          children: [
            "FirstBlog",
            "second",
            "learn"
          ]
        },
        {
          title: 'javascript',
          collapsable: false,
          children: [
            "ScopeAndThis"
          ]
        },
        {
          title: 'typescript',
          collapsable: false,
          children: [
            "ts_description",
            "ts_basic",
            "ts_advanced"
          ]
        }
      ],
      "/interview/":[
        {
          title: 'interview',
          collapsable: true,
          children: [
            "FirstInterview"
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated'
  }
}