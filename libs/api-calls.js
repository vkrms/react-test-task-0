export function createUser() {
  return fetch('/api/create-user')
    .then(res => res.json())
}

export function updateUser(token, data) {
  return fetch('api/update-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token,
      ...data
    }),
  })
  .then(async (res) => {
    const data = await res.json()
    return {
      data,
      ok: res.ok,
    }
  })
  .then(data => {
    if (!data.ok) {
      console.error(data.data.message)
      return false
    }
    return data
  })
  .catch(err => {
    console.error(err)
  })
}
