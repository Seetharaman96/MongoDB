
export let auth = (request, response, next) => {
    let token = request.headers("x-auth-token");
    console.log(token);
}