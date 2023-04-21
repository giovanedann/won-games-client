class LocalStorage {
  private APP_KEY = 'WONGAMES'

  get(key: string) {
    if (typeof window === 'undefined') return

    const data = window.localStorage.getItem(`${this.APP_KEY}_${key}`)
    return data ? JSON.parse(data) : null
  }

  set<T>(key: string, value: T) {
    if (typeof window === 'undefined') return

    const data = JSON.stringify(value)

    window.localStorage.setItem(`${this.APP_KEY}_${key}`, data)
  }
}

export default new LocalStorage()
