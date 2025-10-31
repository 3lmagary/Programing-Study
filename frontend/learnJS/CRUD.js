let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let tableBody = document.getElementById('tableBody');
let searchInput = document.getElementById('search');
let searchTitleBtn = document.getElementById('searchTitle');
let searchCategoryBtn = document.getElementById('searchCategory');

let products = [];
let tempIndex = null;

// حساب المجموع تلقائياً
// get total 
function calculateTotal(){
    let p = +price.value || 0;
    let t = +taxes.value || 0;
    let a = +ads.value || 0;
    let d = +discount.value || 0;
    // innerHtml
    total.innerHTML = p + t + a - d;
}

price.addEventListener('input', calculateTotal);
taxes.addEventListener('input', calculateTotal);
ads.addEventListener('input', calculateTotal);
discount.addEventListener('input', calculateTotal);

// إضافة / تحديث المنتج
submit.addEventListener('click', () => {
    if(!title.value || !price.value){
        alert('Title and Price are required');
        return;
    }

    let product = {
        title: title.value,
        price: +price.value,
        taxes: +taxes.value || 0,
        ads: +ads.value || 0,
        discount: +discount.value || 0,
        // innerText
        total: +total.innerHTML,
        count: +count.value || 1,
        category: category.value || ''
    };

    if(tempIndex !== null){ // تعديل
        products[tempIndex] = product;
        tempIndex = null;
        submit.innerText = "Create";
    } else { // إضافة
        for(let i=0;i<product.count;i++){
            products.push({...product});
        }
    }

    clearInputs();
    displayProducts();
});

// عرض المنتجات
function displayProducts(filter='', searchBy=''){
    tableBody.innerHTML = '';
    products.forEach((p, index) => {
        if(filter){
            if(searchBy === 'title' && !p.title.toLowerCase().includes(filter.toLowerCase())) return;
            if(searchBy === 'category' && !p.category.toLowerCase().includes(filter.toLowerCase())) return;
        }

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${p.title}</td>
            <td>${p.price}</td>
            <td>${p.taxes}</td>
            <td>${p.ads}</td>
            <td>${p.discount}</td>
            <td>${p.total}</td>
            <td>${p.category}</td>
            <td><button onclick="editProduct(${index})">Update</button></td>
            <td><button onclick="deleteProduct(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// مسح الحقول
function clearInputs(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerText = '0';
    count.value = '';
    category.value = '';
}

// حذف المنتج
function deleteProduct(index){
    products.splice(index,1);
    displayProducts();
}

// تعديل المنتج
function editProduct(index){
    let p = products[index];
    title.value = p.title;
    price.value = p.price;
    taxes.value = p.taxes;
    ads.value = p.ads;
    discount.value = p.discount;
    count.value = 1;
    category.value = p.category;
    calculateTotal();
    tempIndex = index;
    submit.innerText = "Update";
}

// البحث
searchTitleBtn.addEventListener('click', () => {
    displayProducts(searchInput.value, 'title');
});
searchCategoryBtn.addEventListener('click', () => {
    displayProducts(searchInput.value, 'category');
});
