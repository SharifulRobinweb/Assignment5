const allBtn = document.getElementsByClassName('allBtn');

let count = 0;
let remain = 8;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        remain = remain - 1;

        const selectedSeat = document.getElementById('selected-seat');
        selectedSeat.innerText = count;


        const remainSeat = document.getElementById('remain-seat');
        remainSeat.innerText = remain;
        // inside selected seat



        const seat = e.target.parentNode.childNodes[1].innerText;
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[1].childNodes[1].innerText);









    })
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-slate-200');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


