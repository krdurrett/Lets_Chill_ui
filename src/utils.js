export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Sorry, an error has occurred! Please try again later.')
  }
}

export const cleanLogData = data => {
  return data.sort((a,b) => {
    a = a.date.split('/')
    b = b.date.split('/')
    return a[2] - b[2] || a[1] - b[1] || a[0] - b[0]
  })
}