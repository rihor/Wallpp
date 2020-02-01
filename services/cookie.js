/**
 * Wrapping of vendor librarie
 *
 * Nookies:
 * https://github.com/maticzav/nookies
 */

import { parseCookies, setCookie } from 'nookies'

import cookieConfig from '../configs/cookie'

class Cookie {
  getSession(context = {}) {
    const cookies = parseCookies(context)

    return cookies[cookieConfig.session]
  }

  setSession(value, context, options) {
    return setCookie(context, cookieConfig.session, value, options)
  }

  removeSession(context = {}) {
    return this.cookie.remove(context, cookieConfig.session)
  }
}

export default new Cookie()
