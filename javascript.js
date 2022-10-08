var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
 alert("Thankyou for visiting my website!");
 localStorage.setItem('alerted','yes');
}

var images = new Array();
function preloadImages(){
    for (i=0; i <preloadImages.arguments.length; i++){
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];

    }
}
preloadImages("IMG-20220616-WA0007.jpg","IMG-20220917-WA0048.jpg","IMG-20220917-WA0049.jpg","IMG-20220917-WA0050.jpg","IMG-20220917-WA0051.jpg","IMG-20220917-WA0056.jpg","IMG-20220917-WA0055.jpg","IMG-20220917-WA0054.jpg","IMG-20220917-WA0053.jpg","IMG-20220917-WA0052.jpg");
