let token = '';
const baseUrl = "https://striveschool-api.herokuapp.com/api/product/"

const fetchApi = async (url, method = "GET", headers = null, payload = null) => {
    try {
        let response = await fetch(url, {
            method: method,
            headers: headers,
            body: method === "GET" ? null : JSON.stringify(payload)
        })
        if (!response.ok) {
            let errorMessage =  response
            throw new Error(errorMessage);
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    };
}

const login = async (username, password) => {
    const credentials = {
        username: "carlocalandra@gmail.com",
        password: "Test"
    }
    let response = await fetchApi("https://striveschool-api.herokuapp.com/api/account/login", "POST", { "Content-Type": "application/json"}, credentials)
    token = response.access_token;
}

const createSpinner = () => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-center spinner-container"
    div.innerHTML = `  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
    return div;
}
