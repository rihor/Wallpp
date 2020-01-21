'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')
const Youch = use('Youch')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    switch (error.name) {
      case 'ValidationException':
        return response.status(error.status).send(error.messages)
      case 'InvalidJwtToken':
        return response
          .status(error.status)
          .send({ error: 'Invalid token, try doing login again!' })
      case 'UserNotFoundException':
        return response
          .status(error.status)
          .send({ error: "Couldn't find the user, please check your input" })
      case 'ModelNotFoundException':
        return response
          .status(error.status)
          .send({ error: "Couldn't find the file, please check your input" })
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJSON = await youch.toJSON()

      return response.status(error.status).send(errorJSON)
    }

    return response.status(error.status)
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
    console.log('ERROR')
    console.error(error)
  }
}

module.exports = ExceptionHandler
