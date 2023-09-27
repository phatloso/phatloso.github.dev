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
    if(n/2==0){
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