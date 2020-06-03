const userModel = require('../model/User.js')
const response = require('../config/response')
const bcrypt = require('bcrypt')

exports.registrasi = (data) =>

 new Promise((resolve, reject) => {
      userModel.findOne({ userName: data.userName })
     .then(user => {
         if (user) {
             resolve(response.commonEroorMsg('username sudah di gunakan'))
         } else {
             bcrypt.hash(data.password, 10, (err,hash) => {
                 if (err) {
                     reject(response.commonEroorMsg)
                 } else {
                     data.password = hash
                     userModel.create(data)
                         .then(() => resolve(response.commonSuccessMsg('berhasil registrasi')) )
                         .catch(() => reject(response.commonEroorMsg('mohon maaf registrasi gagal')))
                 }
             })
         }
     }).catch(() => response.commonEroor)
 })

exports.login = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne( {
            userName: data.userName
        }).then(user => {
            if(user) {
                if(bcrypt.compareSync(data.password, user.password)) {
                    resolve(response.commonResult(user))
                } else {
                    reject(response.commonEroorMsg('password salah'))
                }
            } else {
                reject(response.commonEroorMsg('username tidak di temukan'))
            }
        })
    })
