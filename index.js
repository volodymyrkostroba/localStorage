const refs = {
    form:document.querySelector('.js-form'),
    textarea:document.querySelector('.js-textarea')
}

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextAreaInput);

populateMassege();

function handleFormSubmit(e){
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem('messege')
}

function handleTextAreaInput(e){
    const messege = e.currentTarget.value;
    localStorage.setItem('messege',messege);  
}

function populateMassege(){
    const savedMassage = localStorage.getItem('messege');

if(savedMassage){
     refs.textarea.value = savedMassage;
 }
 }