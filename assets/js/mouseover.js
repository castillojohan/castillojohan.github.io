const mouseOver = {

// Bon faute de grives , on va manger du moineau pour le moment, j'y reviendrais
handleMouseOver :function(evt){
        const imgTarget = evt.currentTarget.src;
        if (imgTarget.includes('html')){
            evt.target.setAttribute("src", "./assets/img/html_svgrepo-com-colored.png");
        }

        if(imgTarget.includes('css')){
            evt.target.setAttribute("src", "./assets/img/css3-01-svgrepo-com-colored.png");
        }

        if(imgTarget.includes('git')){
            evt.target.setAttribute("src", "./assets/img/git_svgrepo-com-colored.png");
        }

        if(imgTarget.includes('java')){
            evt.target.setAttribute("src", "./assets/img/java-script_svgrepo-com-colored.png");
        }

        if(imgTarget.includes('php')){
            evt.target.setAttribute("src", "./assets/img/php_svgrepo-com-colored.png");
        }

        if(imgTarget.includes('python')){
            evt.target.setAttribute("src", "./assets/img/python_svgrepo-com-colored.png");
        }
    },

    handleMouseOut :function(evt){
        const imgTarget = evt.currentTarget.src;
        if (imgTarget.includes('html')){
            evt.target.setAttribute("src", "./assets/img/html_svgrepo-com.svg");
        }

        if(imgTarget.includes('css')){
            evt.target.setAttribute("src", "./assets/img/css3-01-svgrepo-com.png");
        }

        if(imgTarget.includes('git')){
            evt.target.setAttribute("src", "./assets/img/git_svgrepo-com.png");
        }

        if(imgTarget.includes('java')){
            evt.target.setAttribute("src", "./assets/img/java-script_svgrepo-com.svg");
        }

        if(imgTarget.includes('php')){
            evt.target.setAttribute("src", "./assets/img/php_svgrepo-com.svg");
        }

        if(imgTarget.includes('python')){
            evt.target.setAttribute("src", "./assets/img/python_svgrepo-com.png");
        }
    },

    init :function(){
        const imgElements = document.querySelectorAll(".header__skills__tree img");
        for(const img of imgElements){
            img.addEventListener('mouseover', mouseOver.handleMouseOver );
        }

        for(const img of imgElements){
            img.addEventListener('mouseout', mouseOver.handleMouseOut);
        }
    }
}

document.addEventListener('DOMContentLoaded', mouseOver.init)