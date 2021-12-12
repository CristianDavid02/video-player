const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click',landlePlay)
$pause.addEventListener('click',landlePause)
$backward.addEventListener('click',landleBackward)
$forward.addEventListener('click',landleForward)
$video.addEventListener('loadedmetadarta',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)
$progress.addEventListener('input',handleInput)


function landleBackward(){
$video.currentTime = $video.currentTime - 10
}

function landleForward(){
    $video.currentTime = $video.currentTime + 10
}
    
function landlePlay() {
    $video.play()
    $play.hidden=true
    $pause.hidden=false
}

function landlePause() {
    $video.pause()
    $play.hidden=false
    $pause.hidden=true
}

function handleLoaded() {
$progress.max= $video.duration
}

function handleTimeUpdate() {
    $progress.value= $video.currentTime
    }

    function handleInput() {
        $video.currentTime= $progress.value
        }