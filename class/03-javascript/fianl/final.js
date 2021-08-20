function checkFilled(){
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const sendbtn = document.getElementById("sendButton")

    if(email !== "" && name !== "" && password1 !== "" && password2 !== ""
    && sendbtn.getAttribute("disabled")===null){
        document.getElementById("signup").removeAttribute("disabled")
    } else {
        document.getElementById("signup").setAttribute("disabled", "")
    }
}

function checkValidation() {
    const email = document.getElementById("email").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    if(!email.includes("@")){
        document.getElementById("emailCheck").innerText = "이메일이 올바르지 않습니다."
    } else {
        document.getElementById("emailCheck").innerText = ""
    }

    if(password1 !== password2){
        document.getElementById("passwordCheck1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("passwordCheck2").innerText = "비밀번호가 일치하지 않습니다."
    } else {
        document.getElementById("passwordCheck1").innerText = ""
        document.getElementById("passwordCheck2").innerText = ""
    }
}

function sendButtonActivate(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    const sendbtn = document.getElementById("sendButton")
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        sendbtn.removeAttribute("disabled")
        checkFilled()
    } else {
        sendbtn.setAttribute("disabled", "")
    }
}

function phone1Focus(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        sendButtonActivate()
        document.getElementById("phone2").focus()
    }
}

function phone2Focus(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        sendButtonActivate()
        document.getElementById("phone3").focus()
    }
}

function phoneAuth(){
    const token = String(Math.round(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("sendOkButton").removeAttribute("disabled")
    document.getElementById("token").innerText = token
    let timer = 180
    let minutes = 0
    let seconds = 0
    setInterval(() => {
        if(timer >= 0){
            minutes = Math.floor(timer / 60)
            seconds = String(timer % 60).padStart(2,"0")
            document.getElementById("timer").innerText = minutes + ":" + seconds
            timer -= 1
        }
    }, 1000)
}