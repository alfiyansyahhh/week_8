const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray)=>{
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5){ //validasi nilai awal harus lebih kecil dari nilai akhir
        result = dataArray.filter((a)=>{
            if (a > nilaiAwal  && a <nilaiAkhir){
                return a
            }
            dataArray.sort((a,b) => a-b)
        })
        return result
    }else if (nilaiAwal > nilaiAkhir && dataArray.length > 5){ // validasi jika nilai awal lebih besar dari nilai akhir
        return "Nilai akhir harus lebih besar dari nilai awal"
    }else{ // jika kedua validasi tidak terpenuhi
        result = dataArray.filter((a)=>{
            if (a > nilaiAwal  && a < nilaiAkhir){
                return a
            }
            dataArray.sort((a,b) => a-b)
        })
        return result
    }
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(5, 17 , [2, 25, 4]))