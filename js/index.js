// Your code goes here
const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', () => {
	intro.style.color = 'gold';
});

 intro.addEventListener('mouseout', () => {
	intro.style.color = 'navy';
});

 const navbar = document.querySelector('.content-destination');
window.addEventListener('load', () => {
	navbar.style.background = 'green';
});

 const signUpBtn = document.querySelector('.btn');
signUpBtn.addEventListener('dblclick', () => {
	console.log('Double Clicked!');
});


 const letsgo = document.querySelector('.content-section .text-content h2');
document.addEventListener('scroll', () => {
	letsgo.style.color = 'purple';
});

 intro.addEventListener('wheel', () => {
	intro.style.fontSize = '8rem';
});

 const crazycolors = document.querySelector('body');
document.addEventListener('keydown', () => {
	crazycolors.style.background = 'range';
});

 const bigp = document.querySelector('p');
document.addEventListener('mousedown', () => {
	bigp.style.fontSize = '3rem';
});
document.addEventListener('mouseup', () => {
	bigp.style.fontSize = '2rem';
});

 const disappear = document.querySelector('.intro img');
disappear.addEventListener('contextmenu', (event) => {
    disappear.style.display = 'none';
    event.stopPropagation();
});

 const stophome = document.querySelector('.intro');
stophome.addEventListener('contextmenu', () => {
	stophome.style.border = '3px dashed black';
});

 document.querySelectorAll('a').addEventListener('click', (event) => {
    event.preventDefault();
 });