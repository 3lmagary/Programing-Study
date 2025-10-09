
// array

// let names = ["ahmed", 'Mohamed', "ali",['main','hi'],3,3,55,32,324,]
// names[5] = 7
// names.push('gamal') // add element to last index
// names.unshift('hi') // add element to first index
// names.shift() // del element to first index
// names.pop() // del element to last index
// console.log(names[5])
// console.log(names)

// =====================================

// let list = [3,'mohamed', 'tamer', 'fared', 'ali', 'hassan', 1,2,3,4,5]
// // console.log(list.sort())
// // console.log(list.reverse())

// // =====================================

// let list2 = [3,'mohamed', 'tamer', 'fared', 'ali', 'hassan', 1,2,3,4,5]

// console.log(list.concat(list2).join("\n"))  // merg


// ===========================================================

// let email = prompt('Enter The Email: ').toLowerCase().trim()
// emails = 'mtamer.pro@gmail.com'


// let n = '    Mohamed Tamer     '
// console.log(n.toUpperCase());

// console.log(n.toLowerCase());

// console.log(n.length)
// console.log(n.trim())
// console.log(n.trim().length)

// console.log( email == emails )


// ===============================================

//  and ===== && 
// or ======= || 
//  =========================================



// let num1 = 567754; 
// let num2 = 567754;

// if(num1 > num2) // الشرط 
// {
//     console.log ("الله اكبر ")  // لو الشرط حصل

// }
// else if(num1 == num2 )
// {
//     console.log ("الحمد لله")
// }
// else
// {
//     console.log("hello")
// }


// =====================================

// let user = prompt("ادخل نتيجه الثانويه العامه:")
// if (user >= 90 )
// {
//     document.writeln("<h1>الف مبروك انت من الممتازين</h1>")
// }
// else if (user >= 70 )
// {
//     document.writeln("الف مبروك انت حصلت علي جيد جيدا")
// }
// else if (user >50){
//     document.writeln("<h1>حرام عليك ي جدع انت مش بتذاكر ليه يعم انت جايب مقبول طظ فيك </h1>")
// }
// else {
//     document.writeln("اسف اني اقول ليك انت فاشل ي صاحبي")
// }

// =====================================

// age = prompt("What is your age");
// age > 18?
//     document.writeln("Hi")
//     : age ==18?
//         document.writeln("You are 18 now, Hi")
//     : document.writeln("No you young.")

// ===========================
// starta, condition , steps
// for ( let i = 0 ; i <= 100; i++) 
// {
//     console.log("Hi, Mohamed Tamer....." + i )
// }

// ===================================================

// let names = ['mohamed', 'tamer', 'fared', 'ali', 'hassan']
// for (let i = names.length -1 ;i >= 0 ; i-- )
// {
//     console.log(names[i])
// }

// -----------------------------------------------

// let cars = ['BMW', 'Mercedes', 'Tesla'];
// let models = [2020, 2024, 2025, 2030];
// for (let car = 0; car < cars.length; car++) {
//     console.log(`Car: ${cars[car]}`); // اسم السيارة
//     for (let model = 0; model < models.length; model++) {
//         console.log(`Model: ${models[model]}`);
//     }
//         console.log("-------------");
// }

// cars.forEach(car => {
//     console.log("Cars: " + car);
//     models.forEach(model => {
//         console.log("Model: " + model);
//     });
//     console.log("-------------");
// });

// ------------------------------------

// let user=['Mohamed', 'Tamer', 'Fared', 'Ali']
// for(let use=0; use < user.length;use++)
// {
//     if (user[use] == "Tamer"){ continue }
//     console.log(user[use])
// }

// =---------------------------------

// function main(x){
//     console.log(`Hi, ${x}`)
//     return 21
// }
// main('Mohamed')

// console.log(main('Ahmed'))
// ---------------------------------------
