const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#closeModal')
const fade = document.querySelector('#fade')
const botao = document.querySelector('#add')
const $modalButton = document.querySelector('#modalSubmit')

const removeNoteModal = document.querySelector('#containerRemoveNote')
const removeNoteButton = document.querySelector('#rnButton')
const closeRnModal = document.querySelector('#closeRnModal')

////criando uma nota////
const noteSpace = document.querySelector('notes')



function CreateNote(){
  let newNote = document.createElement('div')
  newNote.className = 'note'
  newNote.innerHTML = 'ABUBLEH'
  newNote.addEventListener('click',(e)=>{
    removeNoteModal.classList.remove('hide')
    e.stopPropagation()
    closeRnModal.addEventListener('click',(e)=>{
      removeNoteModal.classList.add('hide')
      e.stopPropagation()
    })
    removeNoteButton.addEventListener('click',(e)=>{
      newNote.remove()
      removeNoteModal.classList.add('hide')
      e.stopPropagation()
    })
  })
  noteSpace.appendChild(newNote)
}

////
$modalButton.addEventListener('click',CreateNote)

botao.addEventListener("click",(e)=>{
  console.log('clicou no +')
  modal.classList.toggle('hide')
  fade.classList.toggle('hide')
  e.stopPropagation()
})


closeModal.addEventListener('click',()=>{
  console.log('fechou o modal')
  modal.classList.toggle('hide')
  fade.classList.toggle('hide')
})

console.log(botao)
console.log(closeModal)
console.log(noteSpace)
console.log(removeNoteModal)
