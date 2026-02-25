export const useAuth = () => {
  function getToken() {
    const token = localStorage.getItem('token')
    if (token) {
      return JSON.parse(token)
    }
  }

  function setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token))
  }

  function removeToken() {
    localStorage.removeItem('token')
  }

  function isAuthenticated() {
    return !!getToken()
  }

  return {
    getToken,
    setToken,
    removeToken,
    isAuthenticated,
  }
}
