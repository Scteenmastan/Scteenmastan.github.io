(function () {
    // get the card element
    const card = document.querySelector(".card");
    // get all the buttons and sections elements
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    // define a function to handle button click
    const handleButtonClick = (e) => {
        // get the clicked button and its data-section attribute
        const button = e.target;
        const targetSection = button.getAttribute("data-section");
        // loop through all the buttons and sections
        for (let i = 0; i < buttons.length; i++) {
            // get the current button and section
            const currentButton = buttons[i];
            const currentSection = sections[i];
            // check if the current button is the clicked button
            if (currentButton === button) {
                // add the is-active class to the button and section
                currentButton.classList.add("is-active");
                currentSection.classList.add("is-active");
                // check if the target section is about_page
                if (targetSection === "#about_page") {
                    // remove the is-active class from the card
                    card.classList.remove("is-active");
                } else {
                    // add the is-active class to the card
                    card.classList.add("is-active");
                }
                // set the data-state attribute of the card to the target section
                card.setAttribute("data-state", targetSection);
            } else {
                // remove the is-active class from the button and section
                currentButton.classList.remove("is-active");
                currentSection.classList.remove("is-active");
            }
        }
    };
    // add a click event listener to each button
    buttons.forEach((btn) => {
        btn.addEventListener("click", handleButtonClick);
    });

    let skillBar = document.getElementsByClassName('skill')
    for (x of skillBar) {
        x.children[1].style = "width: " + x.children[1].children[0].innerHTML
    }
})()

