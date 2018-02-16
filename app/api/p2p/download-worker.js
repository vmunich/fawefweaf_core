const popsicle = require('popsicle')

module.exports = (message, done) => {
  if (message.height) {
    return popsicle
      .request({
        method: 'GET',
        url: message.url + '/peer/blocks?lastBlockHeight=' + message.height,
        headers: message.headers,
        timeout: 60000
      })
      .use(popsicle.plugins.parse('json'))
      .then(response => done(response))
      .catch(error => console.warn(error.message))
  }
}