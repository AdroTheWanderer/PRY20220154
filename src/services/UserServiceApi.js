export async function getAllUsers() {

    try{
        const response = await fetch('/api/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

//var requestOptions = {
//    method: 'GET',
//    redirect: 'follow'
//  };
//  
//  fetch("https://probarapi.fernandochahua.com/api/v1/brands?=https://probar-api-test.herokuapp.com/api/v1", requestOptions)
//    .then(response => response.text())
//    .then(result => console.log(result))
//    .catch(error => console.log('error', error));

//var myHeaders = new Headers();
//myHeaders.append("Content-Type", "application/json");

//var raw = JSON.stringify({
//  "title": "New Athletic",
//  "description": "Marca de zapatillas deportivas."
//});

//var requestOptions = {
//  method: 'POST',
//  headers: myHeaders,
//  body: raw,
//  redirect: 'follow'
//};

//fetch("https://probarapi.fernandochahua.com/api/v1/brands", requestOptions)
//  .then(response => response.text())
//  .then(result => console.log(result))
//  .catch(error => console.log('error', error));