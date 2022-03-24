// 1. 설치한 모듈들 가져오기
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const mysql = require('mysql2');

// 2. 라우터 가져오기
dotenv.config({
  path: path.join(__dirname, '.env')
});
const indexRouter = require('./routes/index');
const volunteerRouter = require('./routes/volunteer');

// 3. 익스프레스 불러서
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());
// 4. set 또는 use를 사용해서 설정 정보 등을 변경
// 4-1. 서버 포트 지정 & 템플릿/템플릿 엔진 등 설정
app.set('port', process.env.PORT || 3000); // .env에 PORT 설정값이 없다면 3000사용
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// 4-2. 공통 미들웨어들 설정
app.use(morgan('dev'));

// mySQL 연동
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
});

connection.connect();

connection.query('SELECT * FROM volunteerlist', function(error, results, fields) {
    if(error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();

// 4-3. 라우터 처리
app.use('/', indexRouter);
//app.use('/volunteer', volunteerRouter);

// 4-4. 404에러를 찾고 error handler로 인계 (미들웨어)
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

// 4-5. error handler (next 필수)
/*
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV != 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});*/
app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});


// 5. 서버 설정
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});