  let singleton = (function(){
    var instance;
    function init(){
      let colorInput = document.querySelector('#base');
      let blurInput = document.querySelector('#blur');
      let spaceInput = document.querySelector('#spacing');
      let spanText = document.querySelector('.hl');
      let image = document.querySelector('.img');

      //basecolor change
      colorInput.addEventListener('change',function(){
        spanText.style.color = colorInput.value;
        image.style.border = `${spaceInput.value}px solid ${colorInput.value}`
       
      })

      //blur change
      blurInput.addEventListener('mousemove',function(){
        image.style.filter = `blur(${blurInput.value}px)`
      })

      //spacing change
      spaceInput.addEventListener('mousemove',function(){
        image.style.border = `${spaceInput.value}px solid ${colorInput.value}`;
        
      })
    }
    return{
      getInstance:function(){
        if(!instance){
          instance = init();
        }
        return instance;
      }
    }
  })();

  singleton.getInstance();