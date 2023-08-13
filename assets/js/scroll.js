const scroll = {
    options: {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: .2,
    },
    handleIntersection:function(entries, observer){
        for(let entry of entries){
            console.log(entry);
        }
    },
}
const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.querySelector(".hide-item"));

