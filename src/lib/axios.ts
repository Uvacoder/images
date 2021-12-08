import axios, { Axios } from "axios";

const api: Axios = axios.create({
  baseURL: "http://localhost:3333",
});

export const get = async (url: string): Promise<any> => {
  return api.get(url);
};

export const post = async (url: string, data: any): Promise<any> => {
  return api.post(url, data);
};

export const put = async (url: string, data: any): Promise<any> => {
  return api.put(url, data);
};

export const del = async (url: string): Promise<any> => {
  return api.delete(url);
};
