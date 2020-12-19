const containOne = document.querySelector("#body");

const options = {
  // root: document.querySelector('.section'),
  // rootMargin: '0px',
  // threshold: 0.2
}

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry =>{
    console.log(entry);
  })
}, options);

if(containOne != null)
{
  observer.observe(containOne);
}