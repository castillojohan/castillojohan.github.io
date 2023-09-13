const ratio = .1;

const option = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
}

const handleIntersectionX = function(entries, observerX){
    for(const entry of entries){
        if(entry.intersectionRatio > ratio ){
            observerX.unobserve(entry.target);
            entry.target.classList.add('reveal-itemX');
        }        
    }
}
const handleIntersectionY = function(entries, observerY){
    for(const entry of entries){
        if(entry.intersectionRatio > ratio ){
            observerY.unobserve(entry.target);
            entry.target.classList.add('reveal-itemY');
        }        
    }
}

const observerX = new IntersectionObserver(handleIntersectionX, option);
const observerY = new IntersectionObserver(handleIntersectionY, option);

const hideElements = document.querySelectorAll('.hide-itemX')
for(const hideElement of hideElements){
    observerX.observe(hideElement);
}

observerY.observe(document.querySelector('.hide-itemY'));
