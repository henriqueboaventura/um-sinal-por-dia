const fetch = require('node-fetch')
const debug = require('debug')('signal-api')

const NUM_SIGNALS = 5823

const getSignal = id => {
  const url = `http://www.acessibilidadebrasil.org.br/libras_3/ajax/getWordById/${id}`
  debug('fetching', url)

  return fetch(url)
    .then(res => res.ok ? res : Promise.reject(res))
    .then(res => res.json())
    .then(res => res.data)
    .then(data => (data === false || data.length === 0) ? Promise.reject("error") : data)
}

const getSignalMovie = id => {
  debug('getting movie', id)
  const host = 'http://www.acessibilidadebrasil.org.br/libras_3/public/media/palavras/videos/'
  return getSignal(id)
    .then(signal => host + signal.video)
    .then(url => {
      debug('fetching', url)
      return fetch(url)
    })
    .then(res => res.arrayBuffer())
}

const getAllMovies = (options = {}) => {
  debug('getting all movies')
  const tasks = Array
    .from(Array(NUM_SIGNALS + 1).keys()).slice(1)
    .map(id => _ => getSignalMovie(id))

  return runSerial(tasks, options.signalCallback)
}

const getAllSignals = (options = {}) => {
  debug('getting all signals')
  const tasks = Array
    .from(Array(NUM_SIGNALS + 1).keys()).slice(1)
    .map(id => _ => getSignal(id))

  return runSerial(tasks, options.signalCallback)
}

const runSerial = (tasks, cb = () => {}) => {
  return tasks
    .reduce(
      (promise, task) => promise
      .then(arr => task()
        .then(data => {
          cb(data)
          return arr.concat(data)
        })
        .catch(err => Promise.resolve(arr))
      ),
      Promise.resolve([])
    )
}

module.exports = {
  getSignal,
  getAllSignals,
  getSignalMovie,
  getAllMovies
}

