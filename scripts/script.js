const allBtn = document.getElementsByClassName('allBtn');

let count = 0;
let remain = 16;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

        count = count + 1;
        remain = remain - 1;
        // setAttribute("disabled",true);


        if (count <= 4) {
            const selectedSeat = document.getElementById('selected-seat');
            selectedSeat.innerText = count;
            const selectedSeats = document.getElementById('selected-seat-left');
            selectedSeats.innerText = count;

            btn.classList.add('bg-green-400');
            btn.classList.add('text-white');





            const remainSeat = document.getElementById('remain-seat');
            remainSeat.innerText = remain;
            // inside selected seat




            const seat = e.target.parentNode.childNodes[1].innerText;
            // console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[1].childNodes[1].innerText);
            const price = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[1].childNodes[1].innerText;

            // const economoy = Economy;


            const selectedContainer = document.getElementById("selected-place-container");

            const li = document.createElement("li");
            li.classList.add('flex');
            li.classList.add('gap-x-20');
            const p = document.createElement("p");
            p.innerText = seat;
            const p2 = document.createElement("p");
            p2.innerText = "economoy";
            const p3 = document.createElement("p");
            p3.innerText = price;


            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            selectedContainer.appendChild(li);


            // Total cost
            // const totalCost = document.getElementById("total-cost").innerText;
            // const convertedTotalCost = parseInt(totalCost);
            // const sum = convertedTotalCost + parseInt(price); 
            totalCostFun("total-cost",parseInt(price));
            // document.getElementById('total-cost').innerText = sum;
            //Grand Total
            // const grandTotalText = document.getElementById("grand-cost").innerText;
            // const grandTotal = parseInt(grandTotalText);
            // const sum2 = grandTotal + parseInt(price);
            // document.getElementById("grand-cost").innerText = sum2;

            // setInnerText("total-cost",sum);
            // setInnerText("grand-cost",sum2);
            grandTotalCostFun("grand-cost",parseInt(price));

            e.target.setAttribute("disabled",true);
        }

        else {
           alert("Already you selected 4 seat");
        }
    })
}

function totalCostFun(id,value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value); 

    setInnerText(id,sum);
}

function grandTotalCostFun(id,value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value); 

    setInnerText(id,sum);
}


function setInnerText(id,value){
    document.getElementById(id).innerText = value;

}










