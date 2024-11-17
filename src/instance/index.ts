import axios from 'axios'

export const baseURL = import.meta.env.VITE_USER_TREE_URL as string

export const instance = axios.create({ baseURL })
