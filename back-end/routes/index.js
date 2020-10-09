var express = require('express');
var router = express.Router();
const FormData = require('form-data');
// const {
//   topic_modeling
// } = require('../../topic-modeling/index')
const {
  promisePool
} = require('./db')

const fetch = require('node-fetch');
const { JSONCookies } = require('cookie-parser');

router.get('/news', async function (req, res, next) {

  [rows] = await promisePool.query('SELECT * FROM pigtimes_no_contents ORDER BY DATE DESC')
  res.json(rows)
});

router.get('/price', async function (req, res, next) {

  [rows] = await promisePool.query('SELECT * FROM price3 ORDER BY year DESC,month DESC,day DESC')
  res.json(rows)
});

router.get('/consumption', async function (req, res, next) {

  [rows] = await promisePool.query('SELECT * FROM consumption')
  res.json(rows)
});

router.get('/import', async function (req, res, next) {

  [rows] = await promisePool.query('SELECT * FROM import')
  res.json(rows)
});

router.get('/export', async function (req, res, next) {

  [rows] = await promisePool.query('SELECT * FROM export')
  res.json(rows)
});

router.get('/chart', async function (req, res, next) {

  var result = await promisePool.query(`
  SELECT * FROM pigtimes_statistics WHERE date IN (SELECT date FROM inner_date WHERE DATE>="${req.query.start}" AND DATE<="${req.query.end}")  ORDER BY date ASC;
  SELECT * FROM price3_date WHERE date IN (SELECT date FROM inner_date WHERE DATE>="${req.query.start}" AND DATE<="${req.query.end}") ORDER BY date ASC;
  SELECT * FROM consumption_date WHERE date IN (SELECT date FROM inner_date WHERE DATE>="${req.query.start}" AND DATE<="${req.query.end}") ORDER BY date ASC;
  `)
  // console.log(result[0][0].map((val)=> val.date))
  res.json({
    news: result[0][0],
    price: result[0][1],
    consumption: result[0][2],
  })
});

router.get('/chart/price', async function (req, res, next) {

  [rows] = await promisePool.query(`
  SELECT * FROM price3_date WHERE date>="${req.query.start}" AND DATE<="${req.query.end}"  ORDER BY date ASC;
  `)
  // console.log(result[0][0].map((val)=> val.date))
  res.json({
    date: rows.map(value => value.date),
    producer_price: rows.map(value => value.producer_price),
    wholesale_avg_price: rows.map(value => value.wholesale_avg_price),
    wholesale_best_price: rows.map(value => value.wholesale_best_price),
    consumer_price: rows.map(value => value.consumer_price),
  })
});

router.get('/chart/consumption', async function (req, res, next) {

  [rows] = await promisePool.query(`
  SELECT * FROM consumption_date WHERE date>="${req.query.start}" AND DATE<="${req.query.end}" AND volume >= 10000 ORDER BY date ASC;
  `)
  // console.log(result[0][0].map((val)=> val.date))
  res.json({
    date: rows.map(value => value.date),
    volume: rows.map(value => value.volume),
    judgment_head: rows.map(value => value.judgment_head),
  })
});

router.get('/topic/:id', async function (req, res, next) {

  // [rows] = await promisePool.query(`SELECT * FROM pigtimes2 WHERE DATE>="${req.query.start}" AND DATE<="${req.query.end}"`)
  [rows] = await promisePool.query(`SELECT * FROM pigtimes2 WHERE id=${req.params.id}`)
  var contents = ''

  for (const row of rows) {
    contents += ' ' + row.title + ' ' + row.contents
  }
  // console.log(contents)

  var rst = await fetch('http://127.0.0.1:5000/topicModeling', {
    method: 'POST',
    body: JSON.stringify({news:contents}),
    headers: { 'Content-Type': 'application/json' }
  })

  const topics = await rst.json()

  console.log(topics)

  res.json({
    title: rows[0].title,
    contents: rows[0].contents,
    // topics: topic_modeling(contents, 1, 5)[0]
    topics: topics
  })

});

// router.get('/topics', async function (req, res, next) {

//   [rows] = await promisePool.query(`SELECT * FROM pigtimes2 WHERE DATE>="${req.query.start}" AND DATE<="${req.query.end}"`)
//   // [rows] = await promisePool.query(`SELECT * FROM pigtimes2 WHERE id=${req.params.id}`)
//   var contents = ''

//   for (const row of rows) {
//     contents += ' ' + row.title + '. ' + row.contents
//   }
//   // console.log(contents)

//   // contents = 'ASF. ASF.'

//   var result = topic_modeling(contents, 10, 10)
//   var topics = []
//   for (const item of result) {
//     for (const term of item) {
//       topics.push(term)
//     }
//   }
//   res.json({
//     topics: topics
//   })

// });

module.exports = router;