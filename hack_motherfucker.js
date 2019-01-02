// const request = require('request')
const axios = require('axios')
const moment = require('moment')
const crypto = require('crypto')
const Qs = require('qs')

let count = 0


let hach_motherfucker = () => {
    let timestamp = moment().format('YYYYMMDDHHmmss')

    let token = 'b8086283a4f64c44ab12778aabbb0a7a',
        accountSid = '7601ebbc04814d78a551922b28324a2e'

    let testNumber = '13011096637'

    axios.post('https://api.miaodiyun.com/20150822/industrySMS/sendSMS', Qs.stringify({
        accountSid: accountSid,
        smsContent: '尊敬的用户，您的验证码为: {1}，祝您早日康复',
        templateid: '285661450',
        to: '13521645433',
        // to: testNumber,
        timestamp: timestamp,
        sig: crypto.createHash('md5').update(accountSid + token + timestamp).digest('hex'),
        param: '444444'
    }), {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(res => {
        console.log(res.data)
        console.log(++count, 'send ' + count)
    }).catch(err => {
        console.log(err)
    })


}

// hach_motherfucker()
setInterval(() => {
    hach_motherfucker()
}, 30 * 60 * 1000)
