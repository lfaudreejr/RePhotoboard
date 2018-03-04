const fetchBoards = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        _id: '5a9b56a115d5cf2fece676d7',
        title: 'A Board',
        description: 'A description',
        owner: '5a90e3fa30b28ec637217c2b'
      },
      {
        _id: '5a9b5959ecc62234215a862d',
        title: 'A Second Board',
        description: 'A second description',
        owner: '5a90e3fa30b28ec637217c2b'
      }
    ])
  })
})

export { fetchBoards }
