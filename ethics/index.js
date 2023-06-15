function search() {
    window.location = "#question" + document.getElementById('q').value;
}

function getAnswerById(id) {
    return document.querySelector("#question" + id + " > div.collapse.answer > div").textContent
}

function showCorrectById(id) {
    document.querySelector("#question" + id + " > div.collapse.answer > span > span.body").textContent = "Correct!"
    document.querySelector("#question" + id + " > div.collapse.answer > span > span.body").style.display = 'block';
}

function showWrongById(id) {
    document.querySelector("#question" + id + " > div.collapse.answer > span > span.body").textContent = "Wrong!"
    document.querySelector("#question" + id + " > div.collapse.answer > span > span.body").style.display = 'block';
}

for (let i = 1; i <= 757; i++) {
    if (document.getElementById('question' + i)) {
        let question = document.getElementById('question' + i);
        if (question.className == 'single') {
            let answer = getAnswerById(i);
            for (let j = 0; j < 8; j += 2) {
                if (document.querySelector("#question" + i + " > div.options.idioms").children[j].className.split(" ")[1] == answer) {
                    document.querySelector("#question" + i + " > div.options.idioms").children[j].onclick = function() {
                        showCorrectById(i);
                    };
                }
                else {
                    document.querySelector("#question" + i + " > div.options.idioms").children[j].onclick = function() {
                        showWrongById(i);
                    };
                }
            }
        }
        else if (question.className == 'multiple') {
            document.querySelector("#question" + i + " > div.collapse.answer > span").onclick = function() {
                let answer = getAnswerById(i);
                let selection = "";
                let options = document.querySelectorAll("#question" + i + " .options input[type=checkbox]");
                for (let j = 0; j < options.length; j++) {
                    if (options[j].checked) {
                    selection += options[j].parentNode.getAttribute("class").split(" ")[1];
                    }
                }
                let aim = document.querySelector("#question" + i + " > div.collapse.answer > span > span.body");
                if (aim.style.display == "none") {
                    if (selection == answer) {
                        showCorrectById(i);
                    } else {
                        showWrongById(i);
                    }
                }
                else {
                    document.querySelector("#question" + i + " > div.collapse.answer > span > span.body").style.display = "none";
                }
            }
            
        }
        else if (question.className == 'decide') {
            let answer = getAnswerById(i);
            for (let j = 0; j < 4; j += 2) {
                if (document.querySelector("#question" + i + " > div.options.idioms").children[j].className.split(" ")[1] == answer) {
                    document.querySelector("#question" + i + " > div.options.idioms").children[j].onclick = function() {
                        showCorrectById(i);
                    };
                }
                else {
                    document.querySelector("#question" + i + " > div.options.idioms").children[j].onclick = function() {
                        showWrongById(i);
                    };
                }
            }
        }
        else if (question.className == 'fill') {
            document.querySelector("#question" + i + " > div.collapse.answer > span").onclick = function() {
                var aim = document.querySelector("#question" + i + " > div.collapse.answer > span > span.body");
                aim.textContent = getAnswerById(i);
                if (aim.style.display == "none") {
                    aim.style.display = "block";
                }
                else {
                    aim.style.display = "none";
                }
            }
        }
    }
    
}
