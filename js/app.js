const divBtn = document.getElementById("index")
const btnSubmit = document.getElementById("submit")

for (let i = 0; i < divBtn.children.length; i++) {
    const btn = divBtn.children[i]

    btn.addEventListener("click", () => {

        for (const resetBtn of divBtn.children) {
            resetBtn.style.color = "#cccccc"
        }

        btn.style.color = "#000"

        const para = document.getElementById("WHO")
        para.textContent = `${btn.id} content`

    })
}

function sumbited(e) {
    e.preventDefault()
    const champ = document.getElementById("champ")
    champ.value = Math.floor(champ.value)
    const para = document.getElementById("WHO")

    switch (`${champ.value}`) {
        case "1":
            console.log(7);
            for (const resetBtn of divBtn.children) {
                resetBtn.style.color = "#cccccc"
            }
            divBtn.children[0].style.color = "#000"
            para.innerText = "Positive content"
            break
        case "2":
            for (const resetBtn of divBtn.children) {
                resetBtn.style.color = "#cccccc"
            }
            divBtn.children[1].style.color = "#000"
            para.innerText = "Negative content"
            break
        case "3":
            for (const resetBtn of divBtn.children) {
                resetBtn.style.color = "#cccccc"
            }
            divBtn.children[2].style.color = "#000"
            para.innerText = "Neutral content"
            break
        default:
            alert("L'index est pas bon")
            break
    }
    champ.value = ""

}

btnSubmit.addEventListener("click", sumbited)