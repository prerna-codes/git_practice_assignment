let num=23
let c=0
for(let i=0;i<=num;i++){
  if(num%i==0)
    c++
}
if(c==2) console.log(num,"Prime")
else console.log(num,"Non Prime")