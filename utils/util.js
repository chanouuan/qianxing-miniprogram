const formatTime = date => {
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g,'/'))
  } else if (typeof date === 'undefined') {
    date = new Date()
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g,'/'))
  } else if (typeof date === 'undefined') {
    date = new Date()
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

const splitTime = date => {
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g,'/'))
  } else if (typeof date === 'undefined') {
    date = new Date()
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return { year, month, day, hour, minute, second }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const setToken = (token) => {
  wx.setStorageSync('token', token)
}

const getToken = () => {
  return wx.getStorageSync('token')
}

const hasKey = (obj, key) => {
  if (key) return key in obj
  else {
    let keysArr = Object.keys(obj)
    return keysArr.length
  }
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  splitTime: splitTime,
  setToken: setToken,
  getToken: getToken,
  hasKey: hasKey
}
