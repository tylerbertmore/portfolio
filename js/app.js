//---------------------------------------------------
//                     Variables                
//---------------------------------------------------

const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const aboutTextOne = document.getElementById('about-text1');
const aboutTextTwo = document.getElementById('about-text2');
const contactTextOne = document.getElementById('contact-text1');
const contactTextTwo = document.getElementById('contact-text2');



//---------------------------------------------------
//                     Event Listeners                
//---------------------------------------------------

aboutBtn.addEventListener('click', function(){
  aboutBtn.style.backgroundColor = 'white';
    aboutBtn.classList.add('active-btn');
    contactTextOne.classList.add('hidden');
    contactTextTwo.classList.add('hidden');
    aboutTextOne.classList.remove('hidden');
    aboutTextTwo.classList.remove('hidden');
    contactBtn.classList.remove('active-btn');
    contactBtn.style.backgroundColor = 'whitesmoke';
});
contactBtn.addEventListener('click', function(){
  contactBtn.style.backgroundColor = 'white';
    aboutTextOne.classList.add('hidden');
    aboutTextTwo.classList.add('hidden');
    contactTextOne.classList.remove('hidden');
    contactTextTwo.classList.remove('hidden');
    contactBtn.classList.add('active-btn');
    aboutBtn.classList.remove('active-btn');
    aboutBtn.style.backgroundColor = 'whitesmoke';
});