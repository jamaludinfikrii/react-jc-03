// // ******* Export Default
// var nama = 'fikri'
// export default nama



// // ****** Export Named
// // export var nama = 'fikri'
// // export var pekerjaan = 'karyawan'


// var arr = [5,4,3]

// var newArr = arr.map((val) => {
//     return '<div>' + val + '</div>'
// })

// console.log(newArr)

// newArr = [
//     '<div>5</div>',
//     '<div>4</div>'
// ]







// var a = 5

// if(a > 3){
//     console.log('lebih dari tiga')
// }else{
//     console.log('kurang dari tiga')
// }


// function fn (){

//     var a = 5

//     if(a > 3){
//         return 'lebih dari tiga'
//     }
//     return 'kurang dari tiga'
// }




// var a = 'fikri'

// if(a){
//     console.log('isi')
// }else{
//     console.log('kosong')
// }



// var b = '0'
// if(b){
//     console.log('isi')
// }else{
//     console.log('kosong')
// }



// IF TERNARY

// condition ? action if true : action if false


// var a = 10

// a > 0 ? console.log("Positive") : console.log('Negative')



var firstName = ''

var lastName = 'subagyo'

// if(firstName){
//     fullName = firstName
// }else{
//     fullName = lastName
// }

var fullName = firstName || lastName || 'unknown'

console.log(fullName)



