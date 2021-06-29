//variable
let numbers = [175, 50, 25]
let fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"]
let hobbies = ["swim", "drawing", "game"]
let names = ["dimas","alex","udin"]
let ages = [12,13,11]
let say = "Hello World MY NAME IS ALEX"
let buah = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"]




// every() method checks if all elements in an array pass a test (provided as a function). 
// Memeriksa apakah setiap elemen dalam array lulus ujian
const every = ages.every((age) => {
  return age >= 10
})
console.log(every)

// fill() 	Fill the elements in an array with a static value
// Isi elemen dalam array dengan nilai statis
const fill= fruits.fill("manggo")
console.log(fill)

// from()	Creates an array from an object
// from() Membuat array dari objek
const from = Array.from("12345manggo")
console.log(from)

//toLowerCase()
// mengonversi string menjadi huruf kecil.
const tolowercase = say.toLowerCase()
console.log(tolowercase)

// The sort() method sorts the items of an array.
// mengurut item array
const sort = buah.sort()
console.log(sort)

// the find() method returns the value of the first element in an array that pass a test (provided as a function).
// metode find() mengembalikan nilai elemen pertama dalam array yang lulus tes (disediakan sebagai fungsi). 
const find = ages.find((age) => {
  return age >= 13
})
console.log(find)

// the join() method returns the array as a string.
// join() metode mengembalikan array sebagai string.
const join = buah.join()
console.log(join)

// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// Metode reduceRight() mengurangi array menjadi satu nilai.
let reduceRight = numbers.reduceRight((total, num) => {
  return total - num
})
console.log(reduceRight)

// indexOf()	Search the array for an element and returns its position
// Metode indexOf() mencari larik untuk item yang ditentukan, dan mengembalikan posisinya.
const indexof = fruits.indexOf("Banana")
console.log("banana berada di index" + " = " +indexof)

// concat()	Joins two or more arrays, and returns a copy of the joined arrays
// Metode concat() digunakan untuk menggabungkan dua atau lebih array.
const concat = hobbies.concat(names,ages); 
console.log(concat)