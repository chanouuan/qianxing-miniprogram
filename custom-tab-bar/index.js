const app = getApp()

Component({
  data: {
    selected: 0,
    templateId: 'user',
    templateMenu: {
      'user': {
        "color": "#333",
        "selectedColor": "#3E56B6",
        "borderStyle": "white",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/images/tab/tab_home@2x.png",
            "selectedIconPath": "/images/tab/select_tab_home@2x.png"
          },
          {
            "pagePath": "/pages/mine/mine",
            "text": "我的",
            "iconPath": "/images/tab/tab_mine@2x.png",
            "selectedIconPath": "/images/tab/select_tab_mine@2x.png"
          }
        ]
      },
      'law': {
        "color": "#333",
        "selectedColor": "#3E56B6",
        "borderStyle": "white",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "text": "首页",
            "iconPath": "/images/tab/tab_home@2x.png",
            "selectedIconPath": "/images/tab/select_tab_home@2x.png"
          },
          {
            "pagePath": "/pages/mine/mine",
            "text": "我的",
            "iconPath": "/images/tab/tab_mine@2x.png",
            "selectedIconPath": "/images/tab/select_tab_mine@2x.png"
          }
        ]
      }
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        templateId: app.globalData.templateId || this.data.templateId
      })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      wx.switchTab({
        url: data.path
      })
    },
    switchPage(selected) {
      this.setData({
        templateId: app.globalData.templateId,
        selected: selected
      })
    },
    switchMenu(templateId) {
      app.globalData.templateId = templateId
      this.setData({
        templateId: templateId
      })
    }
  }
})