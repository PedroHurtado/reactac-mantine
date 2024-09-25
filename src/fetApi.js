//const response = fetch('') //->get
let response = await fetch('url', {
    method:'GET',
    headers:{
        'accept': 'application/json',
        Authorization: "Bearer fadfdfasdfadfadfdfadfadf"
    }
})

response = await fetch('url', {
    method:'POST',
    body:JSON.stringify({}),
    headers:{
        'content-type':'application/json',
        'accept': 'application/json'
    }
})

response = await fetch('url/1', {
    method:'PUT',
    body:JSON.stringify({}),
    headers:{
        'content-type':'application/json',
        'accept': 'application/json'
    }
})

response = await fetch('url/1', {
    method:'DELETE',  
    headers:{        
        'accept': 'application/json'
    }
})
await response.json()

await response.json() //error


/*
  1. devuelve la respuesta como asincrona
  2. devuelve el body como asincrono
*/

/*
    Es que no tiene estado(http)
    1. login->POST
    {
       user:'pedro',
       avatat:'',
       token:'dfadfadsfasdfsda' //localStore,IndexDB
    }
    XSS->CSP

    const parts = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
    SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'.split('.')

    atob(parts[1])->cadena en json con los datos del usuario

    ->Validar que el token es correcto

    validez:3600
    api-rest

    Token->CSP
    Cookie->httpOnly,secure

    https

*/