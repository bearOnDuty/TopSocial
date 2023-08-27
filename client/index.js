import "./index.css";

import { highline, profile } from "@/js/database";


const middle = document.querySelector(".main-middle")
const middle_highline = middle.querySelector(".highline")
const middle_highline_description = middle_highline.querySelectorAll(".description")
const middle_highline_description_img = middle_highline.querySelectorAll(".description img")
const middle_highline_description_p = middle_highline.querySelectorAll(".description p")

middle_highline_description_p.forEach((ele, i) => {
    ele.textContent = highline.description[i]
}) 

// background image
middle_highline_description.forEach((ele, i) => {
    ele.style.backgroundImage = `url("./images/highline/highline_${i+1}.jpeg")`
})
//profile image
middle_highline_description_img.forEach((ele, i) => {
    ele.src = `./images/profile/profile_${i + 1}.png`
})

//middle form
const middle_form = middle.querySelector("form")
const middle_form_input_text = middle_form.querySelector('#create-post')
//name 
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}`