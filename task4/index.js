const CryptoJS = require('crypto-js');


// Encrypt
const text = 'Fazztrack'
const enkripsi = (a) => {
    let result = CryptoJS.AES.encrypt(a, 'secret key 123').toString()
    return result
}
const tampil = enkripsi(text)
console.log(tampil)


// Decrypt
const text1 = tampil
const dekripsi = (a) => {
    let bytes  = CryptoJS.AES.decrypt(a, 'secret key 123');
    let result =  bytes.toString(CryptoJS.enc.Utf8);
    return result
}

console.log(dekripsi(text1))