
export let auth = (request, response, next) => {
    let token = request.header("x-auth-token");
    console.log(token);
}