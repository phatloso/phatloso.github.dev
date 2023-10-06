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
  let tam = 0
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
caue()
// cau f


