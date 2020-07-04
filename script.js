document.addEventListener('DOMContentLoaded',function(event){
    console.log(order);
    let typingSpeed = 50;
    let lineWait = 1000;
    let index = 0;
    let orderIndex = 0;
    let text = '';
    let display = '';
    const output = document.querySelector("#output");
    const funky = ()=>{
        document.querySelector('h3').classList.toggle('show');
    }
    const insertElements = ()=>{
        
        if(orderIndex>=order.length){
            setTimeout(funky,500);
            return;
        }

        text = juniors[order[orderIndex]];
        //console.log(text);

        if(index>text.length-1){
            orderIndex++;
            index = 0;
            display += '\n';
            output.innerHTML = display +"_";
            setTimeout(insertElements,lineWait);
        }
        else{
            display += text[index++];
            output.innerHTML = display + '_';
            setTimeout(insertElements,typingSpeed);
        }
        window.scrollTo(0,document.body.scrollHeight);   
    }
    
    insertElements();
  });
