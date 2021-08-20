for(let i = 0; i < 5; i = i + 1){
    console.log("안녕하세요")
}
// 5VM4390:2 안녕하세요
// undefined
for(let i = 0; i < 5; i++){
    console.log("안녕하세요")
}
// 5VM4407:2 안녕하세요
// undefined
for(let i = 0; i < 5; ++i){
    console.log("안녕하세요")
}
// 5VM4420:2 안녕하세요
// undefined
const classmates = ["철수", "영희", "훈이"]
// undefined
classmates[0]
// "철수"
for(let j = 0; j <= 2; j++){
    console.log(classmates[j])
}
// VM4750:2 철수
// VM4750:2 영희
// VM4750:2 훈이
// undefined
for(let j = 0; j <= 2; j++){
    console.log(classmates[j])
}
// VM4753:2 철수
// VM4753:2 영희
// VM4753:2 훈이
// undefined
for(let j = 0; j <= 2; j++){
    console.log(classmates[j]+"입니다")
}
// VM4779:2 철수입니다
// VM4779:2 영희입니다
// VM4779:2 훈이입니다
// undefined
const classmates2 = [
    { name: "철수", age: 13 },
    { name: "영희", age: 12}
]
// undefined
classmates2[0].name +"는 "+classmates2[0].age+"살입니다."
// "철수는 13살입니다."
classmates2[1].name +"는 "+classmates2[1].age+"살입니다."
// "영희는 12살입니다."
for(let i = 0; i <= 1; i++){
    console.log(classmates2[i].name +"는 "+classmates2[i].age+"살입니다.")
}
// VM5518:2 철수는 13살입니다.
// VM5518:2 영희는 12살입니다.
// undefined