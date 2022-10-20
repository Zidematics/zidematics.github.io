let pop1 = document.querySelector(".team-member .member1:first-of-type");
let pop2 = document.querySelector(".team-member #member1");

pop1.addEventListener('click', () => {
    document.getElementById("member2").style.display = "flex"; 
    document.querySelector("#member2 img:nth-child(2)").style.display = "none"
});
pop2.addEventListener('click', () => {
    document.getElementById("member2").style.display = "flex"; 
    document.querySelector("#member2 img:nth-child(1)").style.display = "none";
});

function pop() {
    document.getElementById("member2").style.display = "none";
}