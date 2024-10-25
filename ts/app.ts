const URL_API = `https://localhost:3000`;
type list_prod =  {

}

const showlistsp = async () => {
    let arr = await fetch(`${URL_API}/list_prod`)
    .then(function(response){
        if(!response.ok)throw Error(response.statusText);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        data.forEach(sp => {
            document.querySelector("#data").innerHTML+=` ${sp.title} <br>`
        });
        console.log(data);
    })
}