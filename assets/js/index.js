function changeMode(self) {
    if (!self.classList.contains("fill")) {
        var element = document.body;
        element.classList.toggle("dark");
        for (let i of self.parentElement.children) {
            i.classList.toggle("fill");
        }
        if (element.classList.contains("dark")) {
            document.querySelector("#introduction").style.backgroundImage = 'url("assets/img/homepage-dark.jpg")';
        }
        else {
            document.querySelector("#introduction").style.backgroundImage = 'url("assets/img/homepage.jpg")';
        }
    }
}

async function changeTheme(self) {
    let theme = await ui("theme", self.value);
}
