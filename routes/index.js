var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  signalId = Math.floor(Math.random() * (5823 - 1) + 1);
  console.log("request: 'http://www.acessibilidadebrasil.org.br/libras_3/ajax/getWordById/" + signalId + "'");
  request('http://www.acessibilidadebrasil.org.br/libras_3/ajax/getWordById/' + signalId, function (error, response, body) {
    var content = JSON.parse(body);
    console.log(content.data)
    res.render(
      'index',
      {
        title: '1 sinal por dia!',
        word: content.data.palavra,
        description: content.data.acepcao,
        videoUrl: 'http://www.acessibilidadebrasil.org.br/libras_3/public/media/palavras/videos/' + content.data.video
      }
    );
  });
});

module.exports = router;
