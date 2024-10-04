const wellbeing = document.getElementById("wellbeing");

const wellbeingvideo = document.getElementById("wellbeing-video");

const youth = document.getElementById("youth");

const youthvideo = document.getElementById("youth-video");

const private = document.getElementById("private");

const privatevideo = document.getElementById("private-video");

const corpdescription = document.getElementById("corp-description")

const youthdescription =document.getElementById("youth-description")

const privatedescription =document.getElementById("private-description")






function hideImage (event) {
    
    wellbeingvideo.style.opacity ="0.4";
    corpdescription.style.opacity="1"

};

function showImage (event) {
    
    wellbeingvideo.style.opacity ="1"
     corpdescription.style.opacity="0"
};


corpdescription.addEventListener("mouseover",hideImage);
corpdescription.addEventListener("mouseleave",showImage);

wellbeing.addEventListener("mouseover", hideImage);

wellbeing.addEventListener("mouseleave", showImage);

wellbeingvideo.addEventListener("mouseover", hideImage);

wellbeingvideo.addEventListener("mouseleave", showImage);

function hideImagePrivate (event) {
    
    privatevideo.style.opacity ="0.4";
    privatedescription.style.opacity ="1";
};

function showImagePrivate (event) {
    
    privatevideo.style.opacity ="1";
    privatedescription.style.opacity ="0";
};

private.addEventListener("mouseover", hideImagePrivate);
private.addEventListener("mouseleave", showImagePrivate);

privatevideo.addEventListener("mouseover", hideImagePrivate);
privatevideo.addEventListener("mouseleave", showImagePrivate);
privatedescription.addEventListener("mouseover", hideImagePrivate)
privatedescription.addEventListener("mouseleave", showImagePrivate);


function hideImageYouth (event) {
    
    youthvideo.style.opacity ="0.4";
    youthdescription.style.opacity ="1";
};

function showImageYouth (event) {
    
    youthvideo.style.opacity ="1";
    youthdescription.style.opacity="0";
};

youth.addEventListener("mouseover", hideImageYouth);

youth.addEventListener("mouseleave", showImageYouth);

youthvideo.addEventListener("mouseover", hideImageYouth);

youthvideo.addEventListener("mouseleave", showImageYouth);

youthdescription.addEventListener("mouseover", hideImageYouth);

youthdescription.addEventListener("mouseleave", showImageYouth);
