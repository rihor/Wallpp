/**
 * Wrapping of vendor librarie
 *
 * Nookies:
 * https://github.com/maticzav/nookies
 */

import { parseCookies, setCookie, destroyCookie } from 'nookies'

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

  removeSession(context = {}, options) {
    destroyCookie(context, cookieConfig.session, options)
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

  removeUser(context = {}, options) {
    destroyCookie(context, cookieConfig.user, options)
  }
}

export default new Cookie()
