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
const tansuatXuatHien = {};

for(let i = 0; i < doDaiMang; i++) {
   const phanTuThuI = arr[i];
   tansuatXuatHien[phanTuThuI] = (tansuatXuatHien[phanTuThuI] || 0) + 1;
}

console.log('=>>>>', tansuatXuatHien)
//g Chèn phần tử 117 vào đầu mảng
for(let i = doDaiMang - 1; i >= 0; i--) {
   arr[i+1] = arr[i]
}
arr[0]=117
console.log(arr)
//h Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
const doDaiMangMoi = arr.length
let checkTangDan = true
for(let i = 0; i <doDaiMangMoi; i++) {
   if(arr[i] > arr[i + 1]) {
       checkTangDan =false
       break
   }
}
if(checkTangDan=== true) {
   console.log('mang tang dan')
}
else {
   console.log('mang kh tang dan')
}
// i Sắp xếp mảng theo thứ tự tăng dần

for(let i = 0; i < doDaiMangMoi ; i++) {
   for(let j = i + 1; j < doDaiMangMoi; j++) {
      if(arr[i] > arr[j]) {
         let tam = arr[i]
         arr[i] = arr[j]
         arr[j] = tam
      }
   }
}
console.log(arr)
// j Sắp xếp mảng theo thứ tự giảm dần
for(let i = 0; i < doDaiMangMoi ; i++) {
   for(let j = i + 1; j < doDaiMangMoi; j++) {
      if(arr[i] < arr[j]) {
         let tam = arr[i]
         arr[i] = arr[j]
         arr[j] = tam
      }
   }
}
console.log(arr)
//k Liệt kê danh sách các số chẵn trong mảng trên
for(let i = 0; i < doDaiMangMoi; i++) {
   if(arr[i] > 0 && arr[i] % 2 ==0){
      console.log('cac phan tu chan :', arr[i])
   }
}
//l. Liệt kê danh sách các số lẽ trong mảng trên
for(let i = 0; i < doDaiMangMoi; i++) {
   if(arr[i] > 0 && arr[i] % 2 !=0){
      console.log('cac phan tu le :', arr[i])
   }
}