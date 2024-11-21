let lightStatus = false;
$('#lightControll').click(function () {
    if (lightStatus == false) {
        $('.frontLignt').css('opacity', 1);
        $('.backLight').css('opacity', 1);
        lightStatus = true;
    } else {
        $('.frontLignt').css('opacity', 0);
        $('.backLight').css('opacity', 0);
        lightStatus = false;
    }
})



let tramsformStatus = false
$('#rotate').click(function(){
    if(tramsformStatus == false){
    $('.carContainer').css('transform','scale(-1, 1)')
    tramsformStatus = true;
    }else{
        $('.carContainer').css('transform','scale(1, 1)')
        tramsformStatus = false
    }

})

let carskinPopup = false;
$('#skinMenu').click(function () {
    if (carskinPopup == false) {
        $('.carskinPopup').css('display', 'flex');   
        carskinPopup = true;
    } else {
        $('.carskinPopup').css('display', 'none');
        carskinPopup = false;
    }
})

$('#skin1').click(function () {
    $('.car').css('background-image', 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dgddpkl-013e22a9-fe8e-4964-8709-a6f612ff4e38.png/v1/fill/w_1280,h_2035/peter_griffin_png_by_darkmoonanimation_dgddpkl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAzNSIsInBhdGgiOiJcL2ZcL2QzNzg5YzhjLTA4NzQtNDA3Yy1hNDU3LTAzYjE0N2Y1OWIxOFwvZGdkZHBrbC0wMTNlMjJhOS1mZThlLTQ5NjQtODcwOS1hNmY2MTJmZjRlMzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rL3O4r3HAVDnxq2OPCPru_yVHoGen3Hc1DHMgldYd5c")');
    $('.car').css('width', '100px');
    $('.car').css('height', '150px');
    $('.carContainer').css('margin-top', '130px');
    
})
$('#skin2').click(function () {
    $('.car').css('background-image', 'url("/img/photo_2024-11-17_16-41-48.jpg")');
    $('.car').css('width', '110px');
    $('.car').css('height', '150px');
    $('.carContainer').css('margin-top', '150px');
})
$('#skin3').click(function () {
    $('.car').css('background-image', 'url("/img/sherman-tank-02-removebg-preview.png")');
    $('.car').css('width', '180px');
    $('.car').css('height', '100px');
    $('.carContainer').css('margin-top', '180px');
})
$('#skin4').click(function () {
    $('.car').css('background-image', 'url("https://static.vecteezy.com/system/resources/previews/010/892/223/non_2x/pink-fiat-500-car-transparent-free-png.png")');
    $('.car').css('width', '170px');
    $('.car').css('height', '100px');
    $('.carContainer').css('margin-top', '200px');
})
$('#skin5').click(function () {
    $('.car').css('background-image', 'url("https://images.vexels.com/media/users/3/351480/isolated/preview/9f91f18442854c8240d199797a169d6f-pink-and-purple-ufo-with-star.png")');
    $('.car').css('width', '170px');
    $('.car').css('height', '100px');
    $('.carContainer').css('margin-top', '190px');
    
})
$('#skin6').click(function () {
    $('.car').css('background-image', 'url("img/G03-removebg-preview.png")');
    $('.car').css('width', '170px');
    $('.car').css('height', '100px');
    $('.carContainer').css('margin-top', '200px');
    
})
let carX = 10;
let greenstatus = false;
$('body').on('keydown', function (e) {

    if (e.keyCode == 39) {
        if (carX < 90) { 
            carX++;
            $('.carContainer').css('left', carX + '%');
        }
    } else if (e.keyCode == 37) {
        if (carX > 0) { 
            carX--;
            $('.carContainer').css('left', carX + '%');
        }
    } else if (e.keyCode == 32) {
        
    }

});
let musicPlaying = false;
let audio = new Audio('audio/den.mp3');

$('#music').click(function() {
    if (musicPlaying) {
        audio.pause();
        audio.currentTime = 0;
        musicPlaying = false;
    } else {
        audio.play();
        musicPlaying = true;
    }
});

