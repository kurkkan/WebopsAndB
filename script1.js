fetch("https://retoolapi.dev/PNAOH1/data").then( (Response) => {
     return Response.json();
    
    } ).then((data) => {
        console.log(data);
    
    } ).catch((err) => {
        console.log(err);
    });