let name = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
              'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchname = (text,number,cb) => {
    const lowercase = name.map(e => e.toLowerCase()) //merubah menjadi huruf kecil
    const cari = lowercase.filter((e)=>{ //membuat array yang diisi dengan semua elemen array yang lulus tes (disediakan sebagai fungsi).
        if (e.includes(text)){ // menentukan elemen apakah berisi elemen dari var text
            return e
        }
    })
    const slice = cari.slice(0,number)
    return cb (slice)
}

console.log(searchname("an",3,(callback)=> {
    result = callback.map( a => a.charAt(0).toUpperCase() + a.substr(1))
    return result
}))