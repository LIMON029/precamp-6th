function checkFilled(){
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const sendOkBtn = document.getElementById("sendOkButton").innerText
    const regionSelect = document.getElementById("regionSelect")
    const selectedRegion = regionSelect.options[regionSelect.selectedIndex].value
    const sexSelect = document.getElementsByName("성별")
    const agreementCheck = document.getElementById("agreement")

    if(email !== "" && name !== "" && password1 !== "" && password2 !== ""
    && sendOkBtn === "인증완료" && selectedRegion !== "지역을 선택하세요."
    && (sexSelect[0].checked || sexSelect[1].checked) && agreementCheck.checked){
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