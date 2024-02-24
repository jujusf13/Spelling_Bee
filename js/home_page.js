/* Confused on modal stuff */
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

const start = document.getElementById("start")
const view1 = document.getElementById("view1")
const view2 = document.getElementById("view2")

/* Instruction modal code */

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) {
        return
    }
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) {
        return
    }
    modal.classList.remove('active')
    overlay.classList.remove('active')
}



/* To start the game */

start.addEventListener("click", () => {
    view1.style.display = 'none'; //hides
    view2.style.display = 'block'; //displays
})