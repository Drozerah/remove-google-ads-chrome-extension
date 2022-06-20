// this code will be executed when the extension's button is clicked
(() => {
  // console.log('execute.js executed');
  if(document.querySelector('.bottomdiv')){
    document.querySelector('.bottomdiv').remove()  
  }
  if(document.querySelectorAll('.adsbygoogle')){
    document.querySelectorAll('.adsbygoogle').forEach(el => el.remove())  
  }
  if(document.querySelectorAll('.google-auto-placed')){
    document.querySelectorAll('.google-auto-placed').forEach(el => el.remove())  
  }
})();
