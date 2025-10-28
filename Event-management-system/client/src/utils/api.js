const BASE_URL = 'http://localhost:5000/api'

export const getData = async (url) => {
    const res = await fetch(`${BASE_URL}${url}`)
    return res.json()
}

export const postData = async (url,data) => {
    const res = await fetch(`${BASE_URL}${url}` , {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(data)
    })
    return res.json()
}

export const putData = async (url, data) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteData = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "DELETE",
  });
  return res.json();
};