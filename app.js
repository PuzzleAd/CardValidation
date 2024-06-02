
const button = document.getElementById("confirm");




button.addEventListener("click", function (event) {
    event.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));

    checkInputs(inputs);
    
    inputs.forEach( function (element) {
        if(!element.classList.contains("emptyString")) {
            button.href = "thankYou.html";
        }
    })

    
})



function checkInputs(input) {

    const div = Array.from(document.querySelectorAll("#div"));

    input.forEach(function (element, index) {
        if(element.value === "" && element.className !== "emptyString") {

            element.classList.add("emptyString");
            const text = document.createElement("p");
            text.textContent = "wrong input or blank";
            text.classList.add("blankText");
            div[index].appendChild(text);
        }

        if(element.value !== "") {
            element.classList.remove("emptyString");
            const text1 = document.querySelector(".blankText");
        }
    })

}