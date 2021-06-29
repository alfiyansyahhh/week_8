var myArray = ["Banana", "Orange", "Apple", "Mango", "pisang"];
var a = "Ban"
var b = "ana"
var searchTerm = a+b


if (myArray.indexOf(searchTerm) == -1) {
  console.log("element doesn't exist");
}
else {
  console.log(searchTerm);
}

const SeleksiNilai = (nilaiAwal,nilaiAkhir,dataArray)=>{
    if (nilaiAwal < nilaiAkhir && dataArray.length >5){
        result = dataArray.filter((e)=>{
            if (e > nilaiAwal  && e <nilaiAkhir){
                return e
            }
        dataArray.sort((a,b) => a-b)
        })
        return result
    }else if (nilaiAwal > nilaiAkhir && dataArray.length > 5){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }else{
        dataArray.sort((a,b) => a-b)
        result2 = dataArray.filter((e)=>{
            if (e > nilaiAwal  && e <nilaiAkhir){
                return e
            }
        })
        
        if (dataArray.indexOf(result2) === -1) {
            return ("Jumlah angka dalam dataArray tidak ada");
        } else{
            return result2
        }        
    }
}
console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]))
console.log(SeleksiNilai(1, 17 , [2, 25, 4]))

