const express = require('express'); // express 모듈 가져오고

const router = express.Router(); // 라우터 관련 메서드 가져오고

router.get('/', (req, res) => {
    res.send('메인 페이지');
});

module.exports = router;
