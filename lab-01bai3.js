//bai 3
//cau a
let a=5
let b=3
let ketqua1 =a+b
console.log(ketqua1)
let ketqua2 =a-b
console.log(ketqua2)
let ketqua3 =a*b
console.log(ketqua3)
let ketqua4 =a/b
console.log(ketqua4)
//cau b
let c=10
let d=4
let tb = (c+d)/2
console.log(tb)
//cau c
let x=3,y=4,z=6
console.log(x*x + 2*x +1)
console.log(x*x*x - 3*x*y - 5*y + 3*y*y)
console.log((x*y)*(x*y) - 2*x*x*y + 13*y)
console.log(4*x*x*x + 3*x*y + y*y - 2*x*x + 3*y)
console.log((5*x*x) / (4*x*y) + y*y)
console.log(x*x - 2*z*x*y / (y*y) + 5*x - 2*y*y + 4*x*z*z*z + z*z*z)
//cau d
let duongkinh=5
let chuvi=duongkinh*3.14
let dientich=3.14*(duongkinh/2)*duongkinh
console.log(chuvi)
console.log(dientich)
//cau e
//let dai=15,rong=10
//let cv=(dai+rong)*2
//let dt=dai*rong
//console.log(cv)
//console.log(dt)

function chuvi (chieudai,chieurong){
    let chu_vi =(chieudai+chieurong)*2
    return chu_vi
}
function dientich(chieudai,chieurong){
    let dien_tich =chieudai*chieurong
    return dien_tich
}
const kq1=chuvi(15,10)
console.log('chu vi :', ketqua1)
const kq2=dientich(15,10)
console.log("dien tich :", kq2)
//cau f
let s=120,t=2.10
let v=s/t
console.log("van toc la:", v)
//cau g
let vantoc=60,thoigian=2.30
let quangdg=vantoc*thoigian
console.log('quang duong dai:', quangdg)
//cau h
let vt=15.2,tg=3
let qd=vt*tg
console.log(qd)
//cau i
let t1=8.20,t2=11,tocdo=42
let tt=t2-t1
let quangd=tocdo*tt
console.log(quangd)