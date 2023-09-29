//cau1
//a

function kiemtrasoamduong(n){
    if (n<0){
        console.log("n la so am")
    }
    else if(n>0){
        console.log("n la so duong")
    }
    else{
        console.log("n bang 0")
    }
}
kiemtrasoamduong(5)
//b
function kiemtrasochanle(n){
    if(n%2==0){
        console.log("n la so chan")
    }
    else{
        console.log("n la so le")
    }
}

kiemtrasochanle(9)
//c
function kiemtrasolonnhat(a,b,c){
    if(a>=b && a>=c){
        console.log("so",a,"lan nhat")
    }
    else if(b>=a && b>=c){
        console.log("so",b,"lan nhat")
    }
    else{
        console.log("so",c,"lan nhat")
    }
}
kiemtrasolonnhat(3,4,8)
//d
function kiemtranamnhuan(a){
    if(a%4==0 && a%100 !=0){
        console.log("nam nay la nam nhuan")
    }
    else{
        console.log("nam nay khong phai nam nhuan")
    }
}
kiemtranamnhuan(2023)
//e


//cau2 
//a
//let a = 2
//let b = 3
//let c = 1
//function bai2a(a,b,c){
//    let delta = b+b-4+a+c
//
//    if (delta < 0) {
//        return'Ptrinh vo nghiem'
//   } 
//   else if (delta == 0) {
//       return`Ptrinh co nghiem bang x1 = x2 = ${-b / (2*a)}`
//   }
//   else {
//    const x1 = (-b + delta) / (2*a)
//    const x2 = (-b - delta) / (2*a)
//
//    return [x1, x2]
//   }
//}
//console.log(bai2a(a,b,c))

//d
function tinhgiacuoc(soPhut) {
    const phiCoDinh = 25000
    let tongChiPhi = 0
    let chiPhi = 0
    
    if (soPhut >= 0 && soPhut <= 50) {
        chiPhi = soPhut * 600
    }
    else if (soPhut > 50 && soPhut <= 200) {
        chiPhi = 50 *600 + (soPhut-50)*400
    }
    else if (soPhut > 200) {
        chiPhi = 50 * 600 + 150*400 + (soPhut - 200)*200
    }
    tongChiPhi = phiCoDinh + chiPhi
    return tongChiPhi    
    
}
tinhgiacuoc(199)