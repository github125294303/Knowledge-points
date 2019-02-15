let express = require('express')
let router = express.Router()
//购物车
router.post('/carlist',function(req,res){
    console.log(req.body)
    res.send('购物车列表')
})

router.post('/one',function(req,res){
    res.send('查找一个商品')
})
//导出路由
module.exports = router;