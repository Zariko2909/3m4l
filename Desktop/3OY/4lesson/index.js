// 1-integer

// let l=prompt("sm da son kiriting");

// l=parseFloat(l);
// let result = parseInt(l/100);

// alert(`${result} m`);





// 2-integer

// let m=prompt('og'irlikni kg da kiriting');

// m=parseFloat(m);    
// let result = parseInt(m/1000);

// alert(`${result} t`);




// 3-integer

// let m=prompt('fayl hajmini bayt da kiriting');

// m=parseFloat(m);    
// let result = parseInt(m/1024);

// alert(`${result} kb`);






// 4-integer

// let a= +prompt('A ga son kiriting');
// let b= +prompt('B ga son kiriting');
// let result = 0;

// if(a>b){
    //     result = a/b;
    // }else{
        //     result = b/a;
// }

// alert(`${result}-marta joylashadi`);




// 5-integer

// let a= +prompt('A ga son kiriting');
// let b= +prompt('B ga son kiriting');
// let result = 0;

// if(a>b){
//     result = a%b;
// }else{
//     result = b%a;
// }

// alert(`${result} - qoldiq qoladi`);




// 6-integer

// let a= +prompt(' 2 xonali son kiriting');
// let b=0;
// let d=0;

// b=parseInt(a%10);
// d=parseInt(a/10);

// alert(`${b}${d}`);




// 7-integer

// let a= +prompt(' 2 xonali son kiriting');
// let b=0;
// let d=0;
// let yigindi=0;

// b=parseInt(a%10);   
// d=parseInt(a/10);
// sum = b+d;

// alert(`${yigindi}`);




// 8-integer

// let a= +prompt(' 2 xonali son kiriting');
// let b=0;
// let c=0;

// b=parseInt(a%10);
// c=parseInt(a/10);

// alert(`${b}${c}`);




// 9-integer

// let a= +prompt(' 3 xonali son kiriting');
// let result = 0;

// if(a>99 && a<1000){
//     result =parseInt(a/100);
// }else{
//     result = 'son xato kiritildi';
// }

// alert(`yuzlar xonasidagi son: ${result}`);





// 10-integer

// let a= +prompt(' 3 xonali son kiriting');
// let result = 0;
// let yigindi=0;
// let b=0;
// let c=0;

// if(a>99 && a<1000){
//     b =parseInt(a%100);
//     result =parseInt(b%10);
//     yigindi =parseInt(b/10);
// }else{
//     result = 'son xato kiritildi';
// }

// alert(`1 lik xonasidagi son: ${result} 10 lik xonasidagi son: ${yigindi}`);




// 11-integer

// let a= +prompt('3 xonali son kiriting:');
// let sum=0;
// let b=0;
// let c=0;
// let d=0;
// let e=0;

// if(a>99 && a<1000){ 
//     b =parseInt(a%100);
//     c =parseInt(b%10);
//     d =parseInt(b/10);
//     e =parseInt(a/100);
//     sum =parseInt(c+d+e);
// }else{  
//     sum = 'son xato kiritildi';
// }

// alert(`yigindi: ${sum}`);



// 12-integer

// let a= +prompt('uch xonali son kiriting:');
// let b=0;
// let c=0;
// let d=0;
// let e=0;

// if(a>99 && a<1000){ 
//     b =parseInt(a%100);
//     c =parseInt(b%10);
//     d =parseInt(b/10);
//     e =parseInt(a/100);
// }else{  
//     sum = 'son xato kiritildi';
// }

// alert(`${c}${d}${e}`);




// 13-integer

let a= +prompt('3 xonali son kiriting:');
let b=0;
let c=0;
let d=0;
let e=0;

if(a>99 && a<1000){ 
    b =parseInt(a%100);
    c =parseInt(b%10);
    d =parseInt(b/10);
    e =parseInt(a/100);
}else{  
    sum = 'son xato kiritildi';
}

alert(`${d}${c}${e}`);