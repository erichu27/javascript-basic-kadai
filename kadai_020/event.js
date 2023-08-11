const btnText = document.getElementById('text');


btn.addEventListener('click',() => {
    setTimeout(() => {
      btnText.textContent ='ボタンをクリックしました'

}, 2000);

})