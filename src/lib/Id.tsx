let id = parseInt(window.localStorage.getItem('maxId') || '0')

class Id {
  value: number
  constructor() {
    id += 1
    window.localStorage.setItem('maxId', JSON.stringify(id))
    this.value = id
  }
}

export { Id }
