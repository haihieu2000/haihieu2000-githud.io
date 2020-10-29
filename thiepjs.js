document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('open')[0].addEventListener('click', function () {
    document.getElementsByClassName('card-packaging')[0].classList.add('is-open')
  })

  	document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementsByClassName('card-packaging')[0].classList.remove('is-open')
  })
});