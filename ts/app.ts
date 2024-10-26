const URL_API = `http://localhost:3000`; // Thay đổi sang http
type TCategory =  {
    ID: string,
    type: string,
    img: string
}

type THotProd={
    name: string,
    price: number,
    img: string
}

type TBrand ={
    name: string,
    id:string
}

type TProduct = {
    name: String,
    price: number,
    img: string
}
const showlistbrand = async()=>{
    let arr:TBrand[] = await fetch(URL_API+"/Brand")
    .then(res=> res.json())
    .then(data => data as TBrand[]);
    let str = ``;
    arr.forEach(row => str+= show1brand(row))
    return str;
}

const show1brand = (brand:TBrand) => {
    return `
    <a href="#" class="list-group-item">${brand.name}</a>
    `
}
const showhotprod = async()=>{
    let arr:THotProd[]= await fetch(URL_API+"/hot_products")
    .then(res => res.json())
    .then(data => data as THotProd[]);
    let str = ``;
    arr.forEach(row => str+= show1hotprod(row))
    return str;
}

const show1hotprod = (hotprod:THotProd) => {
    return `<div>
    <a href="" >     
    <img src="${hotprod.img}">
    <div class="product">
        <p>${hotprod.name}</p>
        <span>${Number(hotprod.price).toLocaleString("vi")} VNĐ</span>
    </div>
    </a>
    </div>`
}
const showcategory = async()=>{
    let arr:TCategory[] = await fetch(URL_API+"/category")
    .then(res => res.json())
    .then(data => data as TCategory[]);
    let str = ``;
    arr.forEach(row => str+= show1category(row))
    return str;
}

const show1category = (cate:TCategory) => {
    return `<div>     
    <img src="${cate.img}">
    <div class="product">
        <p><a href="" >${cate.type}</a></p>
    </div>
    </div>`;
}

const getCategoriesNames = async () => {
    let arr:TCategory[] = await fetch(URL_API+"/category")
    .then(res=> res.json())
    .then(data => data as TCategory[]);
    let str = ``;
    arr.forEach(row => str+= show1categoryNameOnly(row))
    return str;
}
const show1categoryNameOnly = (cate: TCategory) => {
    return `    
       <a href="#" class="list-group-item">${cate.type}</a>
    `;
}



const showlistsp = async () => {
    let arr:TProduct[] = await fetch(URL_API+"/list_prod")
    .then(res => res.json())
    .then(data => data as TProduct[]);
    let str =``;
    arr.forEach(row => str+= show1SP(row))
    return str;
}

const show1SP = (sp: TProduct) => {
    return `<div class="product">
        <a href="#">
            <img src="${sp.img}" alt="${sp.name}" loading="lazy">
            <p class="product-name">${sp.name}</p>
            <span class="product-price">${Number(sp.price).toLocaleString("vi")} VNĐ</span>
        </a>
    </div>`;
}


export {showcategory,showlistsp,showhotprod,getCategoriesNames,showlistbrand}