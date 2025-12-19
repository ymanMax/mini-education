const app = getApp()
import { getBooks, borrowBook, getBorrowRecords } from '../../api/mockApi.js'

Page({
  data: {
    books: [],
    activeTab: 'books'
  },

  onLoad: function (options) {
    this.loadBooks()
  },

  loadBooks: function () {
    const that = this
    try {
      const result = getBooks()
      if (result.status === 1) {
        that.setData({
          books: result.results
        })
      }
    } catch (error) {
      console.error('加载图书列表失败:', error)
    }
  },

  loadBorrowRecords: function () {
    const that = this
    try {
      const result = getBorrowRecords()
      if (result.status === 1) {
        that.setData({
          borrowRecords: result.results
        })
      }
    } catch (error) {
      console.error('加载借阅记录失败:', error)
    }
  },

  switchTab: function (e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({
      activeTab: tab
    })
    if (tab === 'borrow') {
      this.loadBorrowRecords()
    }
  },

  borrowBook: function (e) {
    const bookId = e.currentTarget.dataset.id
    try {
      const result = borrowBook({ id: bookId })
      if (result.status === 1) {
        wx.showToast({
          title: result.msg,
          icon: 'success'
        })
        this.loadBooks()
      }
    } catch (error) {
      wx.showToast({
        title: '借阅失败',
        icon: 'none'
      })
    }
  }
})
