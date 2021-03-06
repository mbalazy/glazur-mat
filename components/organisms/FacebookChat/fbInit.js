// https://github.com/nghiaht/examples/tree/develop/with-fb

export function init() {
  const pageId = '1331177793687182'

  var chatbox = document.getElementById('fb-customer-chat')
  chatbox.setAttribute('page_id', pageId)
  chatbox.setAttribute('attribution', 'biz_inbox')

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v11.0',
    })
  }
  ;(function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
}

/**
 *
 */
export function cleanup() {
  ;(function (d, id) {
    var target = d.getElementById(id)
    if (target) {
      target.parentNode.removeChild(target)
    }
  })(document, 'facebook-jssdk')

  delete window.FB
}
