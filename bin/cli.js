#!/usr/bin/env node

const path = require('path')
const program = require('commander')
const debug = require('debug')('cli')
const api = require('../lib/api')
const fs = require('fs')
const mkdirp = require('mkdirp')
const ghpages = require('gh-pages')

const writeFile = (filepath, data) => {
  debug('Writting', filepath)
  const dirname = path.dirname(filepath)
  mkdirp.sync(dirname)
  return fs.writeFileSync(filepath, data)
}

program.version('0.0.1')

program
  .command('deploy-github')
  .description('Deploy site to github pages')
  .action(_ => {
    debug('Running deploy-github CLI')
    ghpages.publish('.');
  })

program
  .command('signal <id>')
  .description('Download specific signal')
  .action(id => {
    debug('Running signal CLI')

    api.getSignal(id)
      .then(data => JSON.stringify(data, null, 4))
      .then(console.log)
  })

program
  .command('download-signals')
  .option('-o, --output <output>', 'Output File', 'data/signals.json')
  .description('Download all signals')
  .action((options) => {
    debug('Running download-signals CLI')
    api.getAllSignals().then(signals => {
      writeFile(options.output, JSON.stringify(signals, null, 4))
    })
  })

program
  .command('split-signals [file]')
  .option('-o, --output <output>', 'Output Folder', 'data/signals/')
  .description('Split big signals json file into individual ones')
  .action((file='data/signals.json', options) => {
    debug('Running split-signals-file CLI', file)

    const signals = JSON.parse(fs.readFileSync(file))
    signals.forEach(signal => {
      const filename = path.join(options.output, `${signal.id}.json`)
      writeFile(filename, JSON.stringify(signal, null, 4))
    })
  })

program
  .command('gify-signal <id>')
  .description('Transform signal movie into gif')
  .action(id => {
  })



program.parse(process.argv)
