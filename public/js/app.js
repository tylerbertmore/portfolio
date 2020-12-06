//---------------------------------------------------
//                     Variables                
//---------------------------------------------------

const copyClipboard = document.querySelector('.copyClipboard');

//---------------------------------------------------
//                     Event Listeners                
//---------------------------------------------------

copyClipboard.addEventListener('click', copyEmail());


function copyEmail() {
  const copyText = 'tylerbertmore@gmail.com'
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  const emailTooltip = document.querySelector('.emailTooltip');
  emailTooltip.innerHTML = "Copied: " + copyText.value;
  outFunc();
}

function outFunc() {
  const emailTooltip = document.querySelector('.emailTooltip');
  emailTooltip.innerHTML = "Copy to clipboard";
}

