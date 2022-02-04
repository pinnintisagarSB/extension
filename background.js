let clk =0;
let n=1;
let val=1;
let lis = document.querySelector("#lis");
let save = document.getElementById("save");
let add = document.getElementById("add");
let pause = document.getElementById("resu");
add.addEventListener("click",()=>{
    clk = 2;
    listen(clk);
});
save.addEventListener("click",()=>{
    clk = 1;
    listen(clk);
});
lis.addEventListener("click",function(){
    clk = 0;
    listen(clk);
 });
pause.addEventListener("click",()=>{
        if(n== 1){
            clk = 4;
            document.querySelector(".fa-stop-circle-o").style.display = "block";
            document.querySelector(".fa-pause").style.display = "none";
            document.getElementById("resu").style.background = "black";
        listen(clk);
        return n=0;
        }
        else if(n==0){
            clk = 3;
            document.querySelector(".fa-stop-circle-o").style.display = "none";
            document.querySelector(".fa-pause").style.display = "block";
            document.getElementById("resu").style.background = "rgb(248, 8, 48)";
        listen(clk);
        return n=1;
        }
});

function listen(clk){
    chrome.tabs.query({currentWindow: true,active: true},function(tabs){
        var activeTab =tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {command:"run_Commands",data: clk});
    });
}


