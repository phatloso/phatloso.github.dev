// cau a
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0 
let dodaimang = arr.length
while (arr[i] !== undefined) {
    console.log('phan tu thu %s = %s',i ,arr[i])
    i = i + 1
}

// cau b
let sum = 0
i=0
while(arr[i] !== undefined) {
    sum = sum + arr[i]
    i = i + 1
}
console.log('tong cac phan tu :', sum)

// cau c
let max = arr[0]
let min = arr[0]
i=0
while(arr[i] !== undefined) {
    i = i + 1
    if(max < arr[i]) {
       max = arr[i]
     }
    if(min > arr[i]) {
        min = arr[i]
     }
}
console.log('phan tu lon nhat :', max)
console.log('phan tu nho nhat :', min)

// cau d
i = 0
while(arr[i] !== undefined) {
    i = i + 1
}    
console.log('so phan tu cua mang', i)
console.log('trung binh cong cac phan tu trong mang: ', sum/i)

// cau e
function caue() { 
  let j = dodaimang - 1
  let tap = 0
  let i = 0
  while(i < j) {
    tap = arr[i]
    arr[i] = arr[j]
    arr[j] = tap
    i = i + 1 
    j = j - 1
  }
  console.log('mang dao nguoc :', arr)
}  
//caue()
// cau f
i=0
const tansuatXuatHien = {};
while (arr[i] !== undefined) {
  const phanTuThuI = arr[i];
  tansuatXuatHien[phanTuThuI] = (tansuatXuatHien[phanTuThuI] || 0) + 1;
  i = i + 1
}
console.log('===>', tansuatXuatHien)

// cau g
i = dodaimang - 1
while(arr[i] !== undefined) {
  arr[i + 1] = arr[i]
  i = i - 1
}
arr[0] = 117
console.log(arr)

// cau h 
function checkTangDan(arr) {
  let i=0
  let check_T_Dan = true
  while(i<dodaimang) {
     if(arr[i] > arr[i + 1]) {
       check_T_Dan = false
     }
     i = i + 1 
  }
  if(check_T_Dan === true) {
    return console.log('mang tang dan')
  }
  else {
    return console.log('mang kh tang dan')
  }
}
checkTangDan(arr)
// cau i
i = 0
while(arr[i] !== undefined) {
  let j = i + 1 
  while(arr[j] !== undefined) {

    if(arr[i] > arr[j]) {
      let tam = arr[i]
      arr[i] = arr[j]
      arr[j] = tam
    }
    j = j + 1
  }
  i = i + 1
}
console.log('cau i :', arr)

// cau j
i = 0
while(arr[i] !== undefined) {
  let j = i + 1 
  while(arr[j] !== undefined) {

    if(arr[i] < arr[j]) {
      let tam = arr[i]
      arr[i] = arr[j]
      arr[j] = tam
    }
    j = j + 1
  }
  i = i + 1
}
console.log('cau j :', arr)
// cau k 
i = 0 
while(arr[i] !== undefined) {
  if(arr[i] % 2 === 0) {
    console.log('phan tu chan :', arr[i])
  }
  i = i + 1
}

// cau L
i = 0
while (arr[i] !== undefined) {
  if(arr[i] % 2 !== 0) {
    console.log('phan tu le: ', arr[i])
  }
  i = i + 1
}