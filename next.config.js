const withPlugins = require('next-compose-plugins')
const images = require('next-images')
const css = require('@zeit/next-css')

module.exports = withPlugins([images, css])
