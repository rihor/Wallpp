const withPlugins = require('next-compose-plugins')
const images = require('next-images')
const css = require('@zeit/next-css')
const offline = require('next-offline')

module.exports = withPlugins([images, css, offline])
