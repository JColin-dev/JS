const navBar = [
    {
        nom: "home",
        lien: '#home'
    },
    {
        nom: "our work",
        lien: '#work'
    },
    {
        nom: "pricing",
        lien: '#price'
    },
    {
        nom: "contact",
        lien: '#contact'
    },
]

let barreNav = document.querySelector("#NavJs");

for(let i in navBar) {
let monElem = document.createElement("a")
monElem.innerHTML = navBar[i].nom
monElem.href = navBar[i].lien
barreNav.appendChild(monElem);
}








