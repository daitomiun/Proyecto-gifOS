
let progresSect = document.querySelector("#progress-box")

let videoButton = document.getElementById("progress-button");
let videoButton2 = document.getElementById("progress-button2");
let videoButton3 = document.getElementById("progress-button3");

let progressBar = document.getElementById("progress-bar")

let videoDOM = document.getElementById("video")

let phase1 = document.getElementById("text-phase1")
let phase2 = document.getElementById("text-phase2")

let p1 =  document.getElementById("p1")
let p2 =  document.getElementById("p2")
let p3 =  document.getElementById("p3")

videoButton2.style.display = "none"
videoButton3.style.display = "none"

videoDOM.style.display = "none";
phase2.style.display = "none";


function getStreamAndRecord () { 
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 },
            width: { max: 390 }
        }
    })
    .then(function(stream) {
        phase2.style.display = "none";
        videoDOM.style.display = "block";
        video.srcObject = stream;
        video.play()
    })
}


//primera fase
videoButton.addEventListener('click', ()=>
{
    
    phase2.style.display = "block";
    phase1.style.display = "none";
    p1.setAttribute('style',`
        background-color: #562ee5;
        color: #fff;
    `)

    videoButton.style.display = "none"
    // progresSect.remove(videoButton);
   
    // phase2.style.display = "none";
    getStreamAndRecord();

    
    videoButton2.style.display = "block"
    
})

//segunda fase 
var arrMyGifos = new Array
if ( JSON.parse(localStorage.getItem('MyGifs')) ){
    arrMyGifos = JSON.parse(localStorage.getItem('MyGifs')) 
    console.log('habia algo en el local de mis gifos')
    console.log(arrMyGifos)
} else {
    console.log('no habia nada en el local de mis gifos')
    arrMyGifos = []
    
}

videoButton2.addEventListener("click",  ()=>
{
  
   
    videoButton2.style.display = "none"
    videoButton3.style.display = "block"
    p2.setAttribute('style',`
        background-color: #562ee5;
        color: #fff;
    `)

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 },
            width: { max: 390 }
        }
    })
    .then(async function(stream) {
        
        video.srcObject = stream;
        video.play()
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted:  function() {
             console.log('started')
            },
        });
        recorder.startRecording();
        const sleep = m => new Promise(r => setTimeout(r, m));
        await sleep(3000);
    
        await recorder.stopRecording()
        var blobfile = await recorder.getBlob()
        console.log(blobfile)
        let form = new FormData();
        form.append('file', recorder.getBlob(), 'myGif.gif');
        console.log(form.get('file'))
        console.log('finished')



      

        let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        await fetch(`https://upload.giphy.com/v1/gifs?api_key=${apiKey}`, {
            method: 'POST',
            body: form,
        })
        .then((response) => response.json())
        .then(async (myGif) => {
    
            let myGifoId = myGif.data.id

            
            //  let myGifoId = myGif.data
            console.log(myGif.data); 
            arrMyGifos.push(myGifoId);
			console.log(arrMyGifos)

			localStorage.setItem('MyGifs', JSON.stringify(arrMyGifos))
            // let fetchGifId = await fetch(`https://api.giphy.com/v1/gifs/${myGif.data.id}?api_key=${apiKey}`)
            // let fetchReq = await fetchGifId.json()
            // console.log(fetchReq);

        })
    })
})

 videoButton3.addEventListener("click", async ()=>
{
   
    p3.setAttribute('style',`
        background-color: #562ee5;
        color: #fff;
    `)
   alert("tus gifos estan en la seccion de tus gifos")

})

