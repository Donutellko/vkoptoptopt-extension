console.log("Started mine_media extension")

let audioLink = document.querySelector('#l_aud a')
audioLink.href = audioLink.href + '?section=all'

let videoLink = document.querySelector('#l_vid a')
videoLink.href = videoLink.href + '?section=all'
