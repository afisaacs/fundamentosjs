let t1 = new Date()
setTimeout(() => {
  console.log('d')
  let t2 = new Date()
  console.log((t2-t1)/1000)
}, 2000)

for (let i = 0; i < 1.e10; i++) {
}