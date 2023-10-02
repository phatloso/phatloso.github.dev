//bai 1
//a in ra cac phan tu trog mang 
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

let doDaiMang = arr.length

for(let i = 0; i < doDaiMang; i = i + 1) {
   console.log('phan tu thu %s = %s', i, arr[i])
}
//b tinh tong cac phan tu
let sum = 0
for(i = 0; i < doDaiMang; i = i + 1) {
   sum = sum + arr[i]
}
console.log("tong cac phan tu trong mang:", sum)
//c tim so phan tu nho nhat va lon nhat
let max = arr[0]
let min = arr[0]
for(i = 1; i < doDaiMang; i = i+ 1) {
   if(max < arr[i]) {
      max = arr[i]
   }
   if(min > arr[i]) {
      min = arr[i]
   }
}
console.log('phan tu lon nhat:', max)
console.log('phan tu nho nhat: ', min)
//d Tính trung bình cộng các phần tử trong mảng
const tbinh= sum / doDaiMang
console.log('trung binh cac phan tu trong mang:', tbinh)
//e Dao thu tu cac phan tu trog mang
let arr1=[]
let j =0
for(let i = doDaiMang - 1; i >= 0 ; i = i - 1) {
   arr1[j] = arr[i]
   j++
}
console.log(arr1)
//f tim so lan xuat hien cua moi phan tu trong mang

