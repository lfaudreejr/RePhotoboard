const fetchBoards = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        'pins': [
          {
            '_id': '5aa1f7b9050d2f55e3c75419',
            'title': 'My first pin',
            'picture': `https://unsplash.it/200/300/?random=${Math.random()}`,
            'description': 'my first pin',
            'saved_by': '5a90e3fa30b28ec637217c2b',
            '__v': 0
          }
        ],
        '_id': '5aa1f734050d2f55e3c75418',
        'title': 'My first board',
        'description': 'My first description',
        'owner': {
          '_id': '5a90e3fa30b28ec637217c2b',
          'sub': '4ecb3920-1912-48f7-9996-c606ad9c93f5',
          'name': 'Svend Gabriel',
          'email': 'sgabriel3@hibu.com'
        },
        '__v': 0
      }
    ])
  })
})

const fetchPins = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        '_id': '5aa1f7b9050d2f55e3c75419',
        'title': 'My first pin',
        'picture': `https://unsplash.it/200/300/?random=${Math.random()}`,
        'description': 'my first pin',
        'saved_by': {
          '_id': '5a90e3fa30b28ec637217c2b',
          'sub': '4ecb3920-1912-48f7-9996-c606ad9c93f5',
          'name': 'Svend Gabriel',
          'email': 'sgabriel3@hibu.com'
        },
        '__v': 0
      }
    ])
  })
})

export { fetchBoards, fetchPins }
