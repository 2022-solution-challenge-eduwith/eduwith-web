const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>자원봉사 목록 페이지</h1>');
});

module.exports = router;