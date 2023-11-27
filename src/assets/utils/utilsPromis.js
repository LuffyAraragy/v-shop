

export function delayResponse(val, second = Math.floor(Math.random() * 3001)) {
    return new Promise((val) => { 
            setTimeout(() => val(), second)
            console.log("delayResponse");
  })
}