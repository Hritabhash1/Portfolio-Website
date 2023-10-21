document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebar-go');
if(document.querySelector('.sidebar').classList.contains('sidebar-go'))
{
    document.querySelector('.ham').style.display='inline';
    document.querySelector('.cross').style.display='none';
}
else{
    document.querySelector('.cross').style.display='inline';
   setTimeout(() => {
    
   }, 400);
    document.querySelector('.ham').style.display='none';
}
})

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('img');
    
    
    const destinationURL = 'www.codechef.com';

    img.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = destinationURL; 
    });
});
