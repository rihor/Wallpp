/**
 * Wrapping of vendor librarie
 *
 * Nookies:
 * https://github.com/maticzav/nookies
 */

import { parseCookies, setCookie } from 'nookies'

import cookieConfig from '../configs/cookie'

class Cookie {
  /**
   * Session cookie
   */
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

  /**
   * User cookie
   */
  getUser(context = {}) {
    const cookies = parseCookies(context)
    try {
      const user = JSON.parse(cookies[cookieConfig.user])

      return user
    } catch (err) {
      return null
    }
  }

  setUser(value, context, options) {
    const user = JSON.stringify(value)
    return setCookie(context, cookieConfig.user, user, options)
  }

  removeUser(context = {}) {
    return this.cookie.remove(context, cookieConfig.user)
  }
}

export default new Cookie()
