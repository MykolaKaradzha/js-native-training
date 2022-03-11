// handler - обработчик, listener - слушатель, subscriber - подписчик, => function
// CallBack - функция передается, для того чтобы быть вызванной, при определенных условиях.
//function({...}) - объект со сведениями о произошедшем событии
// event, ev, e - объект со сведениями о произошедшем событии

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')


const onClickHandler1 = () => alert("yo")
const onClickHandler2 = () => alert("hey")
const onClickHandler3 = (event) => console.dir(event)
const onClickHandler4 = (event) => console.dir(event.currentTarget)
const onClickHandler5 = (event) => {
    event.stopPropagation() // прекратить вызывать обработчики в дочерних элементах
    event.target.id === "small" && alert(event.currentTarget.id)
}

// sm.onclick = onClickHandler1 //  перезатирается
// sm.onclick = onClickHandler2 //  перезатирает
// sm.onclick = null // remove


// sm.addEventListener("click", onClickHandler5)
// md.addEventListener("click", onClickHandler4)
// bg.addEventListener("click", onClickHandler4)
const superHandler = (e) => {
    e.target.tagName === "BUTTON" && alert(e.target.id)
}
sm.addEventListener("click", superHandler)
// e.target -> элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget -> элемент, который вызвал обработчик в процессе всплытия