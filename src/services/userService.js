import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  console.log(user , "from frontend to api data");
  const result = await httpAxios
    .post("/api/user", user)
    .then((response) => response.data);

  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}
export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}