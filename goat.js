function impostorise(event){
    event.target.style.color = 'red'
}

id = (Math.floor(Math.random() *2) + 1).toString()
document.getElementById(id).addEventListener('mouseenter', impostorise);

document.getElementById(id).addEventListener('mouseout', function(event) {
    event.target.style.color = ''
});