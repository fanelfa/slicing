var elements = document.getElementsByClassName("item")
var listId = []

function removeAllActive(_listId=[], except){
    for (var i = 0; i < _listId.length; i++) {
        if(_listId[i] !== except){
            const element = document.getElementById(_listId[i])
            element.classList.remove('active')
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    const element = elements[i]
    listId.push(element.id)
}

function onClick(e){
    removeAllActive(listId, e.id)
    e.classList.add('active')
}