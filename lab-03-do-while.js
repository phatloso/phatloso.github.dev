let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
// cau a
do {
    console.log('phan tu thu %s : %s', i, arr[i])
    i = i + 1
}while(arr[i] !== undefined)

//d Tính trung bình cộng các phần tử trong mảng
let doDaiMang = arr.length 
tong = 0
i = 0

do {
    tong = tong + arr[i]
    i = i + 1
}while(i < doDaiMang)

console.log('cau d :', tong / doDaiMang)
//e Dao thu tu cac phan tu trog mang
function caue() { 
    let j = doDaiMang - 1
    let tap = 0
    let i = 0

    do {
        tap = arr[i]
        arr[i] = arr[j]
        arr[j] = tap
        i = i + 1 
        j = j - 1
    }while(i < j)

    console.log('mang dao nguoc :', arr)
  }  
caue()

//f tim so lan xuat hien cua moi phan tu trong mang
const tansuatXuatHien = {};
i = 0

do {
    const phanTuThuI = arr[i];
    tansuatXuatHien[phanTuThuI] = (tansuatXuatHien[phanTuThuI] || 0) + 1;
    i = i + 1
}while(arr[i] !== undefined)

console.log('===>', tansuatXuatHien)

// cau g
i = doDaiMang
do {
    arr[i] = arr[i + 1]
    i = i + 1 
}while(arr[i] !== undefined)
arr[0] = 117
console.log('cau g : ', arr)

//h Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
function checkTangDan(arr) {
    let i=0
    let check_T_Dan = true
    do {
        if(arr[i] > arr[i + 1]) {
            check_T_Dan = false
          }
          i = i + 1 

    }while(i<dodaimang)
    if(check_T_Dan === true) {
      return console.log('mang tang dan')
    }
    else {
      return console.log('mang kh tang dan')
    }
  }
checkTangDan(arr)
// i Sắp xếp mảng theo thứ tự tăng dần
i = 0 

do{
    let j = i + 1
    do{
        if(arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }

        j = j + 1
    }while(j < doDaiMang)

    i = i + 1
}while(i < doDaiMang)

console.log('cau i :', arr)