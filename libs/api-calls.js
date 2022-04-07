function fetchPOST (endpoint, payload) {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: window.localStorage.getItem('testTaskToken'),
      ...payload
    })
  })
}

const API = {
  newUser() {
    return fetchPOST('/api/new-user', {})
      .then(res => res.json())
  },

  // update user by id
  updateUser(data) {
    return fetchPOST('/api/update-user', data)
      .then(async (res) => {
        const data = await res.json()
        return {
          data,
          ok: res.ok, // check if everything's ok on the backend like unique constraint
        }
      })
      .then(data => {
        if (!data.ok) {
          // reject with message
          throw data.data.message
        }
        return data.data
      })
      .catch(err => {
        console.error('caught this', err)
      })
  }
}

export default API
