//返回程序运行环境
function Env() {
  var UserAgent = navigator.userAgent.toLowerCase();
  return {
    isIpad: /ipad/.test(UserAgent),
    isIphone: /iphone os/.test(UserAgent),
    isAndroid: /android/.test(UserAgent),
    isWindowsCe: /windows ce/.test(UserAgent),
    isWindowsMobile: /windows mobile/.test(UserAgent),
    isAppMobile: /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(UserAgent),
    isWin2K: /windows nt 5.0/.test(UserAgent),
    isXP: /windows nt 5.1/.test(UserAgent),
    isVista: /windows nt 6.0/.test(UserAgent),
    isWin7: /windows nt 6.1/.test(UserAgent),
    isWin8: /windows nt 6.2/.test(UserAgent),
    isWin81: /windows nt 6.3/.test(UserAgent),
    isMac: /mac os/.test(UserAgent)
  };
}

export default Env;
