 window.onload = function(){
     localStorage.clear('item');
     t = 0;
     str = "";
 }
 let m = 1;
 chrome.runtime.onMessage.addListener((msg, sender, response)=>{
    var text = "";
    let t=0;
    let str = "";
    let mytext = [];
    let clk = msg.data;
     if(msg.command == msg.command)
     {
        if (window.getSelection) 
        {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        if(clk == 0){
                var s = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(s);
            }
        else if(clk == 1){
            let d = text;
            t = Math.random();
            if (localStorage.getItem('item') == null) {
                mytext.push([t,d]);
                localStorage.setItem('item', JSON.stringify(mytext));
            }
            else {
                arrStr = localStorage.getItem('item');
                mytext = JSON.parse(arrStr);
                mytext.push([t, d]);
                localStorage.setItem('item', JSON.stringify(mytext));
            }
            str = "";
            mytext.forEach((element) => {
                str += element[1];
            });            
            start(str);
        }
        else if(clk == 2){
                let d = text;
                t = Math.random();
                if (localStorage.getItem('item') == null) {
                    mytext.push([t,d]);
                    localStorage.setItem('item', JSON.stringify(mytext));
                }
                else {
                    arrStr = localStorage.getItem('item');
                    mytext = JSON.parse(arrStr);
                    mytext.push([t, d]);
                    localStorage.setItem('item', JSON.stringify(mytext));
                }
                str = "";
                mytext.forEach((element) => {
                    str += element[1] + space;
                });
        }
        else if(clk ==3)
        {
            window.speechSynthesis.resume();
        }
        else if(clk == 4)
        {
            window.speechSynthesis.pause();
        }
        function download(filename, texts) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texts));
            element.setAttribute('download', filename);
        
            element.style.display = 'none';
            document.body.appendChild(element);
        
            element.click();
        
            document.body.removeChild(element);
        }
        function start(str){
            var texts= str;
            var filename = "Yourfile.txt";
            download(filename, texts);
        }
    }
}); 
 

