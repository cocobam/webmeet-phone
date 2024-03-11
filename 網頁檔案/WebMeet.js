//帳號密碼


const loginn = document.getElementById("loginn")


loginn.addEventListener('click', function(){
    $(document).ready(function () {
        post()
      });
})
function post(){
    var url = "http://hysi.com.tw/chumpower/api/abc/admin/login_app/A000_app"
    const account = document.getElementById("account1").value
    const password = document.getElementById("password1").value
    const passdata = {
        Su_Account : account ,
        Su_Password : password
    }
    const passdata_string = JSON.stringify(passdata)
    $.ajax({
        type: "POST",
        url:url,
        data:passdata_string,
        success: function(data){
            var aa = data
            var vv = data.status
            var cc = data.workID
            console.log(aa)
            if (vv == "00"){ 

                var view = document.getElementById("view")
                view.style.display = "block"
                var passview = document.getElementById("passview")
                passview.style.display = "none"
                alert("登入成功"+" 歡迎回來 "+cc+" !")
            }else{
                var callback = document.getElementById("callback")
                callback.innerText= "登入失敗"
            }
            
        }
        
        
    })
    
    
}
  




//視訊頻道


const shot = document.getElementById("shot")
let ch = '0'
function channel(ch){
    var domain = "meet.jit.si";
    switch (ch){
        case '0':
            
            A0 = document.getElementById("video0")
            A0.style.visibility= "visible"
            A0.style.border = "20px solid rgb(126, 51, 126)"
            var options = {
                roomName: "testroom1",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video0'),
                configOverwrite: {},
                interfaceConfigOverwrite: {},
                enableLayerSuspension: true
            }     
            
            
            break;
        case '1':
            
            A1 = document.getElementById("video1")
            A1.style.visibility= "visible"
            A1.style.border = "20px solid rgb(250, 238, 66)"
            var options = {
                roomName: "testroom12",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video1'),
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }     
            
            
           
            break;
        case '2':
            A2 = document.getElementById("video2")
            A2.style.visibility= "visible"
            A2.style.border = "20px solid rgb(245, 54, 54)"
            var options = {
                roomName: "room 2",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video2'),
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }     
            
            break;
        case '3':
            A3 = document.getElementById("video3")
            A3.style.visibility= "visible"
            A3.style.border = "20px solid rgb(0, 192, 10)"
            var options = {
                roomName: "room 3",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video3'),
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }     
              
            break;
        case '4':
            A4 = document.getElementById("video4")
            A4.style.visibility= "visible"
            A4.style.border = "20px solid rgb(30, 80, 247)"
            var options = {
                roomName: "room 4",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video4'),
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }     
            
            break;
        case '5':
            A5 = document.getElementById("video5")
            A5.style.visibility= "visible"
            A5.style.border = "20px solid rgb(241, 149, 9)"
            var options = {
                roomName: "room 5",
                width: 1700,
                height: 930,
                parentNode: document.querySelector('#video5'),
                configOverwrite: {},
                interfaceConfigOverwrite: {}
            }     
            
            break;

     
    }
    var api0 = new JitsiMeetExternalAPI(domain, options)
    
    shot.addEventListener('click', function() {
        api0.captureLargeVideoScreenshot().then(data => {
            const blob = data.dataURL
            if(!blob){
                console.log('Nothing to capture yet。' )
                return
            }
            var link = document.createElement('a');
            const timestamp = +new Date()
            link.download = "screenshot-" + timestamp + ".png"
            link.href = blob
            document.getElementById("preview").appendChild( link );
            link.click()
            
            

            
            });
    })

    if(ch != '0'){
        
        document.getElementById("video0").style.visibility= "hidden"
        $("#video0").empty()
    }
        
    if(ch != '1'){
    
        document.getElementById("video1").style.visibility= "hidden"
        $("#video1").empty()
    }
    if(ch != '2'){
        document.getElementById("video2").style.visibility= "hidden"
        $("#video2").empty()
    }
    if(ch != '3'){
        document.getElementById("video3").style.visibility= "hidden"
        $("#video3").empty()
    }
    if(ch != '4'){
        document.getElementById("video4").style.visibility= "hidden"
        $("#video4").empty()
    }
    if(ch != '5'){
        document.getElementById("video5").style.visibility= "hidden"
        $("#video5").empty()
    }

   
    
    
    
    
    
   
}


function upload(){
    html2canvas(document.getElementById('preview')).then(function(canvas) {
        

        canvas.toBlob(function(blob){

            var config = {
                storageBucket: "gs://king-a6be5.appspot.com"
            }
            if (!firebase.apps.length) {
                firebase.initializeApp(config)
            }


           var metadata = {
            contentType: 'image/jpeg',
            }
        var image22 = new Image()
        image22.src = blob


        var storage = firebase.storage();
        var storageRef = storage.ref();
        
        var a = canvas.toDataURL("image/jpeg")
        var mountainImagesRef = storageRef.child('image.jpg').put(blob).then(function(){
            
            alert("上傳成功")
        }) 
        })
        

    })

}

let mods = ''
function casee(mods){
  switch (mods){
    case '0':
        document.getElementById("dra").style.border = "3px rgb(114, 114, 114) solid"  
        canvas.addEventListener("mousedown",startPosition);
        canvas.addEventListener("mouseup",finshedPosition);
        canvas.addEventListener("mousemove",draw);
        break;  
    case '1':
        document.getElementById("box").style.border = "3px rgb(114, 114, 114) solid"
        canvas.addEventListener('mousemove', move, false)
		canvas.addEventListener('mousedown', down, false)
		canvas.addEventListener('mouseup', upp, false)
     
        break;
    case '2':
        document.getElementById("ring").style.border = "3px rgb(114, 114, 114) solid"
        canvas.addEventListener('mousemove', movep, false)
		canvas.addEventListener('mousedown', downp, false)
		canvas.addEventListener('mouseup', uppp, false)
        break;

        
    }  

    if(mods != '0'){
        document.getElementById("dra").style.border = null
        canvas.removeEventListener("mousedown",startPosition);
        canvas.removeEventListener("mouseup",finshedPosition);
        canvas.removeEventListener("mousemove",draw);
    }

    if(mods != '1'){
        document.getElementById("box").style.border = null
        canvas.removeEventListener('mousemove', move, false)
        canvas.removeEventListener('mousedown', down, false)
        canvas.removeEventListener('mouseup', upp, false)
    }

    if(mods != '2'){
        document.getElementById("ring").style.border = null
        canvas.removeEventListener('mousemove', movep, false)
        canvas.removeEventListener('mousedown', downp, false)
        canvas.removeEventListener('mouseup', uppp, false)
    }
}






function jump33(){
    window.scrollTo({
        top: 1000 ,
        behavior:'smooth'

    })
    

}


function jump2(){
    window.scrollTo({
        top: 0 ,
        behavior:'smooth'

    })

}

       


var ax = 0,
    ay = 0,
    mx = 0,
    my = 0,
    bx = 0,
    by = 0,
    width = 0,
    height = 0,
    paint = false;

function move(e) {
    mx = e.offsetX ;
    my = e.offsetY ;
    paintReact()
}

function down(e) {
    ax = e.offsetX ;
    ay = e.offsetY ;
    paint = true
}



function movep(e) {
    mx = e.offsetX ;
    my = e.offsetY ;
    paintReact()
}


function downp(e) {
    ax = e.offsetX ;
    ay = e.offsetY ;
    paint = true
}

function upp(e) {

    bx = e.offsetX ;
    by = e.offsetY ;
    paint = false

    width = mx - ax
    height = my - ay
    ctx.fillRect.bor
    
    ctx.fillRect(ax, ay, width, height)
    ctx.lineWidth = 2
    
    ctx.strokeRect(ax, ay, width, height)
    
}

function uppp(e) {

    bx = e.offsetX ;
    by = e.offsetY ;
    paint = false

    width = mx - ax
    height = my - ay
    
    ctx.fillRect.bor
    
    ctx.lineWidth = 2
    
    ctx.arc((width/2)+ax,(height/2)+ay ,width/2, 0, 2 * Math.PI); 
    ctx.stroke()

    ctx.fill()
    ctx.beginPath();
    
    
}

let j = ''
function colorpp(j){
    switch(j){
        case 'R':
            ctx.fillStyle = 'rgba(225,0,0,0.2)'
            ctx.strokeStyle ='rgb(225,0,0)'
            break
        case 'G':
            ctx.fillStyle = 'rgba(0,225,0,0.2)'
            ctx.strokeStyle ='rgb(0,225,0)'
            break
        case 'Y':
            ctx.fillStyle = 'rgba(225,225,0,0.2)'
            ctx.strokeStyle ='rgb(225,225,0)'
            break
        case 'P':
            ctx.fillStyle = 'rgba(245, 151, 151,0.2)'
            ctx.strokeStyle ='rgb(245, 151, 151)'
            break
    }
}


function paintReact() {
    
    width = mx - ax
    height = my - ay
    
}




function change(){
    let R = document.getElementById("R").value
    let G = document.getElementById("G").value
    let B = document.getElementById("B").value

    document.getElementById("dratabe3").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
}

//圖片處理的部分
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d");
                
 let painting = false;

 function startPosition(a){
    painting = true;
    draw(a);
}

function finshedPosition(){
    painting =false;
    ctx.beginPath();
}
            
function draw(a){
    if(!painting) return;
    let S = document.getElementById("width").value
    ctx.lineWidth = S;
    ctx.lineCap = "round"; 

    let R = document.getElementById("R").value
    let G = document.getElementById("G").value
    let B = document.getElementById("B").value
 

    ctx.strokeStyle = 'rgb(' + R + ',' + G + ',' + B + ')';
    
    ctx.lineTo(a.offsetX ,a.offsetY );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(a.offsetX ,a.offsetY );
}
//監聽滑鼠



function reset(){
    ctx.clearRect(0,0,1700,930)//清除畫布        
}



//剪貼簿 內容
(function(){
    var imgReader = function( item ){
        var blob = item.getAsFile(),
            reader = new FileReader();

        reader.onload = function( e ){
            var img = new Image();

            img.src = e.target.result;
            img.setAttribute("id", "image3");
            document.getElementById("preview").appendChild( img );
            
        };

        reader.readAsDataURL( blob );
    };

    document.getElementById( 'testInput' ).addEventListener( 'paste', function( e ){
    var clipboardData = e.clipboardData,
        i = 0,
        items, item, types;

    if(document.getElementById("image3"))
    {
     var a = document.getElementById("image3")
     a.remove();
    }

    if( clipboardData ){
        items = clipboardData.items;

        if( !items ){
            return;
        }

        item = items[0];
        types = clipboardData.types || [];

        for( ; i < types.length; i ){
            if( types[i] === 'Files' ){
                item = items[i];
                break;
            }
        }

        if( item && item.kind === 'file' && item.type.match(/^image\//i) ){
            imgReader( item );
        }
    }
    });
})()

//inputM聊天輸入優化
const inputM =  document.getElementById('inputM')
const sand = document.getElementById('sand')
let messageBox = document.getElementById('messageBox')

inputM.addEventListener('input',(e) => {
    inputM.style.height = '30'
    inputM.style.height = e.target.scrollHeight 

})









sand.addEventListener('click',function(){
    
    var config = {
        databaseURL : "https://webmeet-2d0a5-default-rtdb.firebaseio.com/"
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
    var database = firebase.database().ref()
   

    

    show = document.getElementById("inputM").value 
    
    var postData = {
        name : "webMeet",
        content : show,
        
    }
    database.push(postData)
    document.getElementById("inputM").value=""
    
})





function screenshot(){
    
    html2canvas(document.getElementById('preview')).then(function(canvas) {
        
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'image.jpg';
        a.click();
        alert("下載成功")
    })
}




    
function up(){


    var config = {
        storageBucket: "gs://king-a6be5.appspot.com"
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }

    var uploader = document.getElementById("fileFile")
    var files_name = uploader.files[0].name
    var storage = firebase.storage();
    var storageRef = storage.ref();

    var mountainImagesRef = storageRef.child(files_name).put(uploader.files[0]).then(function(){
        alert("上傳成功")
        
    })

   
}
    