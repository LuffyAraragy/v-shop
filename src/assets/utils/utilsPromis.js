

export function delayResponse(val, second = Math.floor(Math.random() * 3001)) {
    return new Promise((res) => { 
            setTimeout(() => res(val), second)
  })
}