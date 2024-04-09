import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from "./PostService";

export const registration = async (
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { data } = await $host.post("api/user/registration", {
    name,
    lastName,
    email,
    password,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", { email, password });
  const token = JSON.parse(data).token
  localStorage.setItem("token",token);
  return jwtDecode(token);
};

export const check = async () => {
  try {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", JSON.parse(data).token);
    return jwtDecode(JSON.parse(data).token);
  } catch (error: any) {
    throw error;
  }
};
