export async function updateUser(token, data) {
  // update user
  fetch('api/update-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token,
      ...data
    }),
  })
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log('update fetch response data:', {data})
  })
}
