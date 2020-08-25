// ******* Export Default
var nama = 'fikri'
export default nama



// ****** Export Named
// export var nama = 'fikri'
// export var pekerjaan = 'karyawan'


var arr = [5,4,3]

var newArr = arr.map((val) => {
    return '<div>' + val + '</div>'
})

console.log(newArr)

newArr = [
    '<div>5</div>',
    '<div>4</div>'
]
