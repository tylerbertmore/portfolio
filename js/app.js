const tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
const tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
const aboutPic = document.querySelector('.about-pic');

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="#EBEBEB";
    tabPanels[panelIndex].style.borderLeft=`${colorCode} 20px solid`;
    aboutPic.style.border =`${colorCode} 5px solid`
}
showPanel(0,'#4caf50');