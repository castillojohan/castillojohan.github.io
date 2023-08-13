const professionnalDetails = {

    init :function(){
        const jobs = document.querySelectorAll('.main__professionnal-job');
        for (const job of jobs) {
            job.addEventListener('click', professionnalDetails.handleClickJob);
        }
    },

    handleClickJob :function(evt){
        const hiddenEl = evt.currentTarget.lastElementChild;
        console.log(hiddenEl);
        hiddenEl.classList.toggle('show');
    },

}
document.addEventListener('DOMContentLoaded', professionnalDetails.init);