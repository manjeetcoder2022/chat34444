



function login() {
    user_name = document.getElementById("user_name").value
    subject_name = document.getElementById("subject_name").value
    room_name = document.getElementById("room_name").value
    localStorage.setItem("user_name", user_name)
    localStorage.setItem("subject_name", subject_name)
    localStorage.setItem("room_name", room_name)
    console.log(user_name)
    document.getElementById("share").style.display="block"
}

function send() {
    user_name_fetch = localStorage.getItem("user_name")
    subject_name_fetch= localStorage.getItem("subject_name")
    room_name_fetch = localStorage.getItem("room_name")
    a = "mailto:EnterYourGroupName@gmail.com?body=Your " + subject_name_fetch + " Teacher " + user_name_fetch +  " Requesting to you join the chat Session by Open APNA CHAT website. "+   "Enter Room name = " + room_name_fetch
    document.getElementById("share").href = a
}