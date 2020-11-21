//---------------------------------------------------
//                     Variables                
//---------------------------------------------------

const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const contactSection = document.getElementById('contact');
const navBar = document.getElementsByClassName('nav')
//---------------------------------------------------
//                     Event Listeners                
//---------------------------------------------------

contactSection.addEventListener('scroll', () => {
  navBar.style.display='none';
})


// aboutBtn.addEventListener('click', function(){
//   aboutBtn.style.backgroundColor = 'white';
//     aboutBtn.classList.add('active-btn');
//     contactTextOne.classList.add('hidden');
//     contactTextTwo.classList.add('hidden');
//     aboutTextOne.classList.remove('hidden');
//     aboutTextTwo.classList.remove('hidden');
//     contactBtn.classList.remove('active-btn');
//     contactBtn.style.backgroundColor = 'whitesmoke';
// });
// contactBtn.addEventListener('click', function(){
//   contactBtn.style.backgroundColor = 'white';
//     aboutTextOne.classList.add('hidden');
//     aboutTextTwo.classList.add('hidden');
//     contactTextOne.classList.remove('hidden');
//     contactTextTwo.classList.remove('hidden');
//     contactBtn.classList.add('active-btn');
//     aboutBtn.classList.remove('active-btn');
//     aboutBtn.style.backgroundColor = 'whitesmoke';
// });

