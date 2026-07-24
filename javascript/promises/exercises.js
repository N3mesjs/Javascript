function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), ms);
  })
}

delay(3000).then(() => console.log('runs after 3 seconds'));