const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        "success": true,
        "message": "Root route",
        "data": {
            "id": 1
        }
    });
})

router.get('/news', (req, res) => {
    
})

router.post('/news', (req, res) => {
    
})

router.patch('/news/:id/up', (req, res) => {
    
})

router.patch('/news/:id/down', (req, res) => {
    
})

module.exports = router;