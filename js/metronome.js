var strokes_csv = "./assets/csv/strokes.csv";
var beatcycle_csv = "./assets/csv/beatcycle.csv";
var strokes ={};
var dict ={};
var style = []; 
var beatCycle = [];
var beatCycles = [];
var beatCyclet = [];
var tranenabled = [];
var filler =[];
var fillert =[];
var firstplayed;    
var fillers =[];
$.ajax({

    type: 'GET',

    url: strokes_csv,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("Strokes csv call Failed: ", e);
    },

    success: function (data) {
        
        

        var jsonData = $.csv.toObjects(data);
        var b=0;

        $.each(jsonData, function (index, value) {
            strokes[value['stroke']] = new Audio('assets/audio/'+value['file']);
            dict[strokes[value['stroke']]] = value['onset'];
        });

        $.ajax({

            type: 'GET',
        
            url: beatcycle_csv,
        
            dataType: 'text',
        
            error: function (e) {
                alert('An error occurred while processing API calls');
                console.log("Strokes csv call Failed: ", e);
            },
        
            success: function (data) {
            
                var jsonData1 = $.csv.toObjects(data);
            
                var b=-1;
        
                $.each(jsonData1, function (index, value) {
                    b++;
                    style.push(value["Style"]);
                    fillers.push(parseInt(value["Total Number of Beats in Transition"]));
                   
                    beatCycles.push(parseInt(value["Total Number of Beats"]));
                    var q=2;
                    var temp_beat_cycle =[];
                    var temp_speed =[];
                    while(q<value["Beatcycle"].length){
                        var flag=1;
                        count =0;
                        while(flag==1){
                            flag=0;
                            count++;
                            var tempcyc ="";
                            var temp_beat =[];
                            for(;value["Beatcycle"][q]!=']';q++){
                                if(value["Beatcycle"][q]== ' '){
                                    flag=1;
                                    q++;
                                    break;
                                }
                                tempcyc+= value["Beatcycle"][q];
                            }
                            temp_beat.push(strokes[tempcyc]);
                            temp_beat_cycle.push(temp_beat);
                        }
                        
                        for(y=1;y<=count;y++){
                            temp_speed.push(count);
                        }
                       
                        
                        q=q+2;
                    }
                    beatCyclet.push(temp_speed);
                    beatCycle.push(temp_beat_cycle);
                 
                    q=2;
                    temp_beat_cycle =[];
                    temp_speed =[];
                    var flag2=0;
                    while(q<value["Transition Cycle"].length){
                        tranenabled.push(1);
                        flag2=1;
                        var flag=1;
                        count =0;
                        while(flag==1){
                            flag=0;
                            count++;
                            var tempcyc ="";
                            var temp_beat =[];
                            for(;value["Transition Cycle"][q]!=']';q++){
                                if(value["Transition Cycle"][q]== ' '){
                                    flag=1;
                                    q++;
                                    break;
                                }
                                tempcyc+= value["Transition Cycle"][q];
                            }
                            temp_beat.push(strokes[tempcyc]);
                            temp_beat_cycle.push(temp_beat);
                        }
                        
                        for(y=1;y<=count;y++){
                            temp_speed.push(count);
                        }
                    
                        
                        q=q+2;
                    }
                    if(flag2==0){
                        tranenabled.push(0);
                    }
                    fillert.push(temp_speed);
                    filler.push(temp_beat_cycle);
                  
                              
                
            });


                


            }
        });

        
    } // end: Ajax success API call

}); // end: of Ajax call

/*var dha_k = new Audio('assets/audio/dha_k.wav');
var tin = new Audio('assets/audio/tin.wav');
var tin_0 = new Audio('assets/audio/tin.wav');
var dha_m = new Audio('assets/audio/dha_m.wav');
var dha_m0 = new Audio('assets/audio/dha_m.wav');
var dha_m1 = new Audio('assets/audio/dha_m.wav');
var ghe_hard = new Audio('assets/audio/ghe_hard.wav');
var ghe_hard0 = new Audio('assets/audio/ghe_hard.wav');
var ghe_soft = new Audio('assets/audio/ghe_soft.wav');
var ghe_soft0 = new Audio('assets/audio/ghe_soft.wav');
var khi = new Audio('assets/audio/khi.wav');
var khi0 = new Audio('assets/audio/khi.wav');
var khi1 = new Audio('assets/audio/khi.wav');
var na = new Audio('assets/audio/na.wav');
var na0 = new Audio('assets/audio/na.wav');
var na1 = new Audio('assets/audio/na.wav');
var re = new Audio('assets/audio/re.wav');
var re0 = new Audio('assets/audio/re.wav');
var re1 = new Audio('assets/audio/re.wav');
var re2 = new Audio('assets/audio/re.wav');
var re3 = new Audio('assets/audio/re.wav');
var ta = new Audio('assets/audio/ta.wav');
var ta0 = new Audio('assets/audio/ta.wav');
var ta1 = new Audio('assets/audio/ta.wav');
var te = new Audio('assets/audio/te.wav');
var te0 = new Audio('assets/audio/te.wav');
var te1 = new Audio('assets/audio/te.wav');
var te2 = new Audio('assets/audio/te.wav');
var te3 = new Audio('assets/audio/te.wav');
var te4 = new Audio('assets/audio/te.wav');
var pa = new Audio('assets/audio/na.wav');
var blnk = new Audio('assets/audio/blnk.wav');
var blnk0 = new Audio('assets/audio/blnk.wav');*/


var transcyc=[];


//var beatCycle1 = [[tin],[tin_0],[dha_k],[blnk]];
//var beatCycle1t = [1,1,1,1];

//var beatCycle2 = [[tin],[dha_k],[blnk]];
//var beatCycle2t = [1,1,1];

//var beatCycle3 = [[khi],[blnk],[khi0],[na],[dha_m],[ghe_soft],[dha_m0],[ghe_soft0],[dha_m1],[ghe_hard],[blnk],[blnk0],[na0],[te],[te0],[re],[te1],[re0],[na1]];
//var beatCycle3t = [1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1];
/*var tran3=[[te],[re],[khi],[ta],[dha_m],[te0],[re0],[khi0],[ta0],[dha_m0],[te1],[re1],[khi1],[ta1],[dha_m1],[blnk],[blnk0],[na],[te2],[te3],[re2],[te4],[re3],[na0]];
var tran3a= [2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,1,1,1,1,2,2,2,2,1];


//var beatCycle4 = [[ghe_hard],[blnk],[na],[pa],[blnk],[ghe_hard],[dha_m],[blnk]];
//var beatCycle4t = [1,1,1,1,1,1,1,1];

var trana=[];
var tranat=[];

trana.push(beatCycle[0]);
tranat.push(beatCyclet[0]);
trana.push(beatCycle[1]);
tranat.push(beatCyclet[1]);
trana.push(tran3);
tranat.push(tran3a);
trana.push(beatCycle[3]);
tranat.push(beatCyclet[3]);







/*var beatCyclet=[];
beatCyclet.push(beatCycle1t);
beatCyclet.push(beatCycle2t);
beatCyclet.push(beatCycle3t);
beatCyclet.push(beatCycle4t);*/

var x=0;
var bpm = 100;
var bpmcurr=bpm;
var bpm_velocity=0;
var flag =0;
var tapbut=0;
var tapcyc=0;
var tapcyc_0=0;
var tapcyc_1=0;
var tapcyc_2=0;
var tp=0;
var temp_tap_cyc_1;

var audio;
var t;
var playlist=[];
var playlistt=[];
var beat=[];
var i =0;

var mx=7;
var temp=0;



function bpmvel(){
    bpm_velocity = parseInt(document.getElementById("bpm_velo").value);
}


function sub1(){
    var element = document.getElementById("bpm");
    if(bpm>10)bpm=bpm-1;
    element.innerHTML = bpm + " BPM";  
    
}

function plus1(){
    var element = document.getElementById("bpm");
    if(bpm<300)bpm=bpm+1;
    element.innerHTML = bpm + " BPM"; 
}

function stylechange(){
    x=document.getElementById("style").value;
    if(x==2){
        document.getElementById("tap").value ="Mark Transition 1";
    }
    else{
        taped=0;
        tapbut=0;
        tapcyc=0;
        tapcyc_0=0;
        document.getElementById("tap").value ="No Transition";
    }
   
   
}

function toggle(){
    var q = document.getElementById("start").value;
    if(q=="Start"){
       
        flag =1;
        document.getElementById("start").value = "Stop";
        playing();
    }
    else if(q=="Stop"){
        flag =0;
        document.getElementById("start").value ="Start";
        i=0;
        stopAllAudio();
        clearInterval(t);
        document.getElementById("visualization").innerHTML=" "  ;
        document.getElementById("visual_style").innerHTML=" "  ;
        document.getElementById("visual_bpm").innerHTML=" "  ;
    }

}
audio =[];
var flag1=0;
var temp_bpm =0;
var temp_bpm_velocity =0; 
var esd;
function addcycle(){

    k=0;
    if(bpm+bpm_velocity<10){
        bpm =10;
    }
    else if(bpm+bpm_velocity>300){
        bpm =300;
    }
    else{
        bpm = bpm+bpm_velocity;
    }
    
    if(flag1==1){
        bpm = temp_bpm;
        bpm_velocity = temp_bpm_velocity;
        if(tranenabled[x]==1&&temp_tapbut==2){
            tapcyc =temp_tapcyc;
            tapcyc_1 =temp_tapcyc_1;
            document.getElementById("tap").value =tapcyc;
            tapbut =2;
            tp = 0;
        }
        else{
            tapbut=0;
            if(x==2)document.getElementById("tap").value ="Mark Transition 1"
            else document.getElementById("tap").value  ="No Transition"
        }
        document.getElementById("bpm_velo").value=bpm_velocity;
        document.getElementById("style").value=x;
        flag1=0;
    }
    mx=beatCycles[x];
    
    document.getElementById("visual_style").innerHTML="The Current Playing style is "+style[x] ;
    var i =0;
   /* if(tapbut==1){
        tapcyc++;
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc; 
    }*/

    if(tapbut==2){
        tp++;
        tp=tp%tapcyc;
        console.log(tapcyc_1);
        if(tapcyc<=1){
            
            if(fillers[x]+tapcyc_1<=beatCycles[x]){
                var beatused=0;
                var jk =0;
                var countwe=0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    if(countwe%2==0&&jk-countwe/2==tapcyc_1){
                        break;
                    }
                }
                beatused = jk-countwe/2;
                countwe =0;
                var jf =0;
                while(1){
                    playlist.push(filler[x][jf]);
                    playlistt.push(fillert[x][jf]);
                    
                    if(filler[x][jf]==2){
                        countwe++;
                    }
                    jf++;
                    if(countwe%2==0&&jf==filler[x].length){
                        break;
                    }
                }
                countwe=0;
                var jn=0;
                while(1){
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    jn++;
                    if(jn-countwe/2==fillers[x]){
                        break;
                    }
                }
                countwe=0;
                var jh =0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    jh++;
                    if(countwe%2==0&&beatused+fillers[x]+jh-countwe/2==beatCycles[x]){
                        break;
                    }
                }
                
                return;
            }
            else{
                if(firstplayed){
                    var beatused=0;
                    var jk =0;
                    var countwe=0;
                    while(1){
                        playlist.push(beatCycle[x][jk]);
                        playlistt.push(beatCyclet[x][jk]);
                        
                        if(beatCyclet[x][jk]==2){
                            countwe++;
                        }
                        jk++;
                        if(countwe%2==0&&jk-countwe/2==tapcyc_1){
                            break;
                        }
                    }
                    beatused = jk-countwe/2;
                    countwe =0;
                    var jf =0;
                    while(1){
                        playlist.push(filler[x][jf]);
                        playlistt.push(fillert[x][jf]);
                        
                        if(filler[x][jf]==2){
                            countwe++;
                        }
                        jf++;
                        if(countwe%2==0&&beatused+jf-countwe/2==beatCycles[x]){
                            break;
                        }
                    }
                    firstplayed = false;
                    return;
                }
                else{
                    var beatused=tapcyc_1+fillers[x]-beatCycles[x];
                    var jk =0;
                    var countwe=0;
                    while(1){
                        if(filler[x][jk]==2){
                            countwe++;
                        }
                        jk++;
                        if(countwe%2==0&&jk-countwe/2==beatCycles[x]-tapcyc_1){
                            break;
                        }
                    }
                    countwe==0;
                    while(1){
                        playlist.push(filler[x][jk]);
                        playlistt.push(fillert[x][jk]);
                        if(filler[x][jk]==2){
                            countwe++;
                        }
                        jk++;
                        if(countwe%2==0&&jk==filler[x].length){
                            break;
                        }
                    }
                    countwe=0;
                    var jn =0;
                    while(1){
                        if(beatCyclet[x][jn]==2){
                            countwe++;
                        }
                        jn++;
                        if(countwe%2==0&&jn-countwe/2==beatused){
                            break;
                        }
                    }
                   beatused = jn-countwe/2;
                   countwe=0;

                    while(1){
                        playlist.push(beatCycle[x][jn]);
                        playlistt.push(beatCyclet[x][jn]);
                        if(beatCyclet[x][jn]==2){
                            countwe++;
                        }
                        jn++;
                        if(countwe%2==0&&beatused+jn-countwe/2==tapcyc_1){
                            break;
                        }
                    }
                    countwe =0;
                    var jf =0;
                    while(1){
                        playlist.push(filler[x][jf]);
                        playlistt.push(fillert[x][jf]);
                        
                        if(filler[x][jf]==2){
                            countwe++;
                        }
                        jf++;
                        if(countwe%2==0&&beatused+jf-countwe/2==beatCycles[x]){
                            break;
                        }
                    }
                    return;

                }

            }
        }
        if(tp==0){
            if(fillers[x]+tapcyc_1<=beatCycles[x]){
             
                var beatused=0;
                var jk =0;
                var countwe=0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    if(countwe%2==0&&jk-countwe/2==tapcyc_1){
                        break;
                    }
                }
                beatused = jk-countwe/2;
                countwe =0;
                var jf =0;
                while(1){
                    playlist.push(filler[x][jf]);
                    playlistt.push(fillert[x][jf]);
                    
                    if(filler[x][jf]==2){
                        countwe++;
                    }
                    jf++;
                    if(countwe%2==0&&jf==filler[x].length){
                        break;
                    }
                }
                countwe=0;
                var jn=0;
                while(1){
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    jn++;
                    if(jn-countwe/2==fillers[x]){
                        break;
                    }
                }
                countwe=0;
                var jh =0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    jh++;
                    if(countwe%2==0&&beatused+fillers[x]+jh-countwe/2==beatCycles[x]){
                        break;
                    }
                }
                
                return;
            }
            else{
                var beatused=0;
                var jk =0;
                var countwe=0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    if(countwe%2==0&&jk-countwe/2==tapcyc_1){
                        break;
                    }
                }
                beatused = jk-countwe/2;
                countwe =0;
                var jf =0;
                while(1){
                    playlist.push(filler[x][jf]);
                    playlistt.push(fillert[x][jf]);
                    
                    if(filler[x][jf]==2){
                        countwe++;
                    }
                    jf++;
                    if(countwe%2==0&&jf==filler[x].length){
                        break;
                    }
                }
                beatused = tapcyc_1+fillers[x]-beatCycles[x];
                tp++;
                jk =0;
                countwe=0;
                while(1){
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    if(countwe%2==0&&jk-countwe/2==beatused){
                        break;
                    }
                }
                countwe=0;
                jn=0;
                while(1){
                    playlist.push(beatCycle[x][jk]);
                    playlistt.push(beatCyclet[x][jk]);
                    
                    if(beatCyclet[x][jk]==2){
                        countwe++;
                    }
                    jk++;
                    jn++;
                    if(countwe%2==0&&jn-countwe/2+beatused==beatCycles[x]){
                        break;
                    }
                }
                
                return;
            }
            
        }
        
        
    }

    tapcyc_0=0 
    
    playlist = playlist.concat(beatCycle[x]);
    playlistt=playlistt.concat(beatCyclet[x]);
    
    stopAllAudio();
    
    
    
}

function stopAllAudio(){
    for(q=0; q<audio.length; q++) {
        audio[q].pause();
        audio[q].currentTime=0;
    }
    
}
var k=1;

function playing(){
    
    
    if(playlist.length==0){
        addcycle();
    }
    console.log(playlist);
    
    if(tapbut==1){
         tapcyc_0 += 1.0/(4*playlistt[0]);
         tapcyc_1 = Math.round(tapcyc_0)*4;
         tapcyc_2 += 1.0/(beatCycles[x]*playlistt[0]);
         tapcyc = Math.round(tapcyc_2);
         firstplayed =true; 
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc +' ('+tapcyc_2+')' ; 
    }
    
    beat=playlist[0];

    k=playlistt[0];
    
    playlist.shift();
    playlistt.shift();
    bpmcurr=bpm*k;
    temp+=1/k;
    if(Number.isInteger(temp)){
        document.getElementById("visualization").innerHTML="The Current Playing Beat is " + (temp) ;
        if(temp==mx)temp=0;
    }
    document.getElementById("visual_bpm").innerHTML="The Current Playing BPM is " + (bpm) ;
    clearInterval(t);

    audio[i] = new Audio();
    
    audio[i].volume = 1.0;
    
    audio[i].loop = false;
    audio[i]=beat[0];
    
  
    audio[i].play();
    console.log(audio[i]);
    i++;
    
    loop();

  
     
}


function loop(){
    document.getElementById("bpm").innerHTML= bpm + " BPM";
   
    
    
    if(playlist.length>0) t = setInterval(playing,60.0*1000/(bpmcurr)+1000*dict[beat[0]]-1000*dict[playlist[0][0]]);
    else t = setInterval(playing,60.0*1000/(bpmcurr)-1000*dict[beat[0]]+1000*dict[beatCycle[x][0][0]]);
    
}

function reset(){
    
    
    if(x!=2){
        document.getElementById("tap").value ="No Transition";
    }
    else{
        document.getElementById("tap").value ="Mark Transition 1";
    }
    
    
    taped=0;
    tapbut=0;
    tapcyc=0;
    tapcyc_0=0;
    tapcyc_1=0;
    tapcyc_2=0;
    

}


function tap(){
    if(tranenabled[x]==1){
        if(tapbut<2)tapbut++;
        document.getElementById("tap").value ="Mark Transition 2 at beatcycle " + tapcyc; 
        if(tapbut==2)document.getElementById("tap").value =tapcyc;
    }
    else{
        document.getElementById("tap").value ="No Transition";
    }
    

}
var nooffav =0;
var fav_style ="";
var favarr =[];
function addtofav(){
        nooffav++;
        var new_element = document.createElement("div");
        new_element.setAttribute('id',"fav"+nooffav)
        new_element.setAttribute('class',"col-12")
        new_element.setAttribute('style',"padding-top:10px;")

        fav_style= style[x];
        
        var temparr = ["fav"+nooffav,x, bpm,bpm_velocity, tapbut, tapcyc,tapcyc_1];
        favarr.push(temparr);
        temparr =[];
        new_element.innerHTML =  "<div class=container><div class=row><div class=col-5>"+fav_style+"</div><div class=col-2>"+ bpm +"</div><div class=col-3><button onclick= fav_play("+ bpm +','+ x +','+bpm_velocity+','+tapcyc+','+ tapbut +','+tapcyc_1+") style=color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Play </button></div><div class=col-2><button onclick= fav_delete(fav"+nooffav+") style =color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Delete </button></div></div></div>" ;
        document.getElementById("fav").appendChild(new_element);
       
        
    }



function showfav(){
    var a = document.getElementById("showfav").value;
    z=0;
    while(z<a.length){
        nooffav++;
        var new_element = document.createElement("div");
        new_element.setAttribute('id',"fav"+nooffav)
        new_element.setAttribute('class',"col-12")
        new_element.setAttribute('style',"padding-top:10px;")
        var fav_save_x_s ="";
        var fav_save_bpm_s = "";
        var fav_save_bpm_velocity_s ="";
        var fav_save_tapbut_s="";
        var fav_save_tapcyc_s="";
        var fav_save_tapcyc_1_s="";
        for(;a[z]!=',';z++){

        }
        z++;
        for(;a[z]!=',';z++){
            fav_save_x_s+=a[z];
        }
        var fav_save_x =parseInt(fav_save_x_s);
           
        z++;
        for(;a[z]!=',';z++){
            fav_save_bpm_s+=a[z];
        }
        var fav_save_bpm = parseInt(fav_save_bpm_s);
           
        z++;
        for(;a[z]!=',';z++){
            fav_save_bpm_velocity_s +=a[z];
        }
        var fav_save_bpm_velocity =parseInt(fav_save_bpm_velocity_s);
            
        z++;
        for(;a[z]!=',';z++){
            fav_save_tapbut_s +=a[z];
        }
        var fav_save_tapbut = parseInt(fav_save_tapbut_s);
           
        z++;
        for(;a[z]!=','&&z!=a.length;z++){
                
            fav_save_tapcyc_s +=a[z];
        }
        var fav_save_tapcyc =parseInt(fav_save_tapcyc_s);
            
        z++;
        for(;a[z]!=','&&z!=a.length;z++){
                
            fav_save_tapcyc_1_s +=a[z];
        }
        var fav_save_tapcyc_1 =parseInt(fav_save_tapcyc_1_s);
        z++;
            
        var fav_save_style= style[fav_save_x];
            
        var temparr = ["fav"+nooffav,fav_save_x, fav_save_bpm,fav_save_bpm_velocity, fav_save_tapbut, fav_save_tapcyc, fav_save_tapcyc_1];
        favarr.push(temparr);
        temparr =[];
        new_element.innerHTML =  "<div class=container><div class=row><div class=col-5>"+fav_save_style+"</div><div class=col-2>"+ fav_save_bpm +"</div><div class=col-3><button onclick= fav_play("+ fav_save_bpm +','+ fav_save_x +','+fav_save_bpm_velocity+','+fav_save_tapcyc+','+ fav_save_tapbut +','+fav_save_tapcyc_1+") style=color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Play </button></div><div class=col-2><button onclick= fav_delete(fav"+nooffav+") style =color:#AC9B9B;background:rgba(2,15,40,0.64);border-radius:15px;> Delete </button></div></div></div>" ;
        document.getElementById("fav").appendChild(new_element);
      
    }
        



}

function fav_delete(fav_number){
        
    for(d=0;d<favarr.length;d++){
        if(favarr[d].indexOf(fav_number.id)==0){
            favarr.splice(d,1);
            break;
        }
    }
   

    fav_number.remove();
}
function fav_play(fav_bpm,temp_style,fav_bpm_velocity ,fav_tapcyc,fav_tapbut,fav_tapcyc_1){
        
    temp_bpm = fav_bpm;
    temp_bpm_velocity = fav_bpm_velocity;
    temp_tapcyc = fav_tapcyc;
    temp_tapcyc_1 = fav_tapcyc_1;
    temp_tapbut = fav_tapbut;
        
    x = temp_style;
        
    flag1 =1
}  
function Clipboard_CopyTo() {
    var tempInput = document.createElement("input");
    tempInput.value = favarr;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
        
       
            