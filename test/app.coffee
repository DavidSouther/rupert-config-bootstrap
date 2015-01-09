config =
  name: 'rupert-config-bootstrap.test'
  root: __dirname
  plugins:
    dependencies: {}
  stassets:
    root: __dirname

config.plugins.dependencies[__dirname + '/../src/config'] = yes

describe 'Rupert Config Bootstrap', ->
  app = null
  rupert = require('rupert')(config)
  before (done)->
    rupert.start ->
      app = rupert.app
      done()

  it 'attaches types to the config', ->
    config.stassets.vendors.js.length.should.equal 2
    config.stassets.vendors.css.length.should.equal 2
