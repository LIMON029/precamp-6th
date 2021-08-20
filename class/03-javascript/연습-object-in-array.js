const profile = {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교"
}
// undefined
profile
// {name: "철수", age: 13, school: "다람쥐초등학교"}
const profile2 = {name: "철수", age: 13, school: "다람쥐초등학교"}
// undefined
profile2
// {name: "철수", age: 13, school: "다람쥐초등학교"}
profile.name
// "철수"
profile.age
// 13
const classmates = [
    {name: "철수", age: 13, school: "다람쥐초등학교"},
    {name: "영희", age: 12, school: "토끼초등학교"},
    {name: "훈이", age: 11, school: "도마뱀초등학교"}
]
// undefined
classmates[0]
// {name: "철수", age: 13, school: "다람쥐초등학교"}
classmates[0].name
// "철수"
classmates[1].school
// "토끼초등학교"