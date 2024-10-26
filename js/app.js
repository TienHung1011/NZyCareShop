const URL_API = `http://localhost:3000`;
const showlistbrand = async () => {
    let arr = await fetch(URL_API + "/Brand")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1brand(row));
    return str;
};
const show1brand = (brand) => {
    return `
    <a href="#" class="list-group-item">${brand.name}</a>
    `;
};
const showhotprod = async () => {
    let arr = await fetch(URL_API + "/hot_products")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1hotprod(row));
    return str;
};
const show1hotprod = (hotprod) => {
    return `<div>
    <a href="" >     
    <img src="${hotprod.img}">
    <div class="product">
        <p>${hotprod.name}</p>
        <span>${Number(hotprod.price).toLocaleString("vi")} VNĐ</span>
    </div>
    </a>
    </div>`;
};
const showcategory = async () => {
    let arr = await fetch(URL_API + "/category")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1category(row));
    return str;
};
const show1category = (cate) => {
    return `<div>     
    <img src="${cate.img}">
    <div class="product">
        <p><a href="" >${cate.type}</a></p>
    </div>
    </div>`;
};
const getCategoriesNames = async () => {
    let arr = await fetch(URL_API + "/category")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1categoryNameOnly(row));
    return str;
};
const show1categoryNameOnly = (cate) => {
    return `    
       <a href="#" class="list-group-item">${cate.type}</a>
    `;
};
const showlistsp = async () => {
    let arr = await fetch(URL_API + "/list_prod")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1SP(row));
    return str;
};
const show1SP = (sp) => {
    return `<div class="product">
        <a href="#">
            <img src="${sp.img}" alt="${sp.name}" loading="lazy">
            <p class="product-name">${sp.name}</p>
            <span class="product-price">${Number(sp.price).toLocaleString("vi")} VNĐ</span>
        </a>
    </div>`;
};
export { showcategory, showlistsp, showhotprod, getCategoriesNames, showlistbrand };
