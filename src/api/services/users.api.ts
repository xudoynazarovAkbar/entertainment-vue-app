import type { IUserLoginData, IUserRegisterData } from '@/utils/types/user'
import { api } from '../configs/api'

export const registerUser = async (data: IUserRegisterData) => {
  const response = await api.post('/user/register', data)
  return response.data
}

export const loginUser = async (data: IUserLoginData) => {
  const response = await api.post('/user/login', data)
  return response.data
}
