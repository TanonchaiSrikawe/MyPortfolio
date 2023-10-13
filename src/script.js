const skills = document.getElementById('show-skills');
const description = document.getElementById('show-description');

/* Show skills and description */
function showSkill(){
    skills.style.display = "block";
    description.style.display = "none";
    if(skills.style.display = "block"){
        document.querySelector('.skills').style.borderBottom = '4px solid #4E4FEB';
        document.querySelector('.description').style.borderBottom = 'none';
    }

}
function showDescription(){
    skills.style.display = "none";
    description.style.display = "block";
    if(description.style.display = "block"){
        document.querySelector('.description').style.borderBottom = '4px solid #4E4FEB';
        document.querySelector('.skills').style.borderBottom = 'none';
    }
}

/* Function Copy to clipboard */
function copyPhoneNumber(){
    textPhone='0994755944'
    navigator.clipboard.writeText(textPhone);
}
function copyLinkEmail(){
    textEmail='tanonchaisr@kkumail.com'
    navigator.clipboard.writeText(textEmail);
}
function copyLinkGithub(){
    textGithub='https://github.com/TanonchaiSrikawe'
    navigator.clipboard.writeText(textGithub);
}

/*Open-Close nav mobile */
let toggle = false;
function openNavmobile(){
    toggle = !toggle;
    if(toggle){
        document.querySelector('.navbar-mobile').classList.toggle('md:fixed')
        document.querySelector('.navbar-mobile').classList.remove('md:hidden')
        document.querySelector('.icon-nav').classList.add('fa-xmark')
    }else{
        document.querySelector('.navbar-mobile').classList.add('md:hidden')
        document.querySelector('.navbar-mobile').classList.remove('md:fixed')
        document.querySelector('.icon-nav').classList.remove('fa-xmark')
    }
}

