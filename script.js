let opened = false;

function openEnvelope() {
    if (opened) return;

    document.querySelector(".top").style.transform = "translateY(-120px) rotateX(180deg)";
    document.querySelector(".letter").style.opacity = "1";
    document.querySelector(".letter").style.transform = "translateY(-20px)";
    
    opened = true;
}
