const professionnalDetails = {

    init :function(){
        const jobs = document.querySelectorAll('.main__professionnal-job');
        for (const job of jobs) {
            job.addEventListener('click', professionnalDetails.handleClickJob);
        }
        const aboutMe = document.querySelector('.main__about-me span');
        aboutMe.addEventListener('click', professionnalDetails.handleClickAbout);
    },

    handleClickJob :function(evt){
        const hiddenEl = evt.currentTarget.lastElementChild;
        hiddenEl.classList.toggle('show');
    },

    handleClickAbout :function(evt){
        contentToReveal = document.querySelector(".main__about-me--hidden");
        contentToReveal.classList.toggle('show');

        evt.currentTarget.classList.toggle('disapear');
    }
}
document.addEventListener('DOMContentLoaded', professionnalDetails.init);