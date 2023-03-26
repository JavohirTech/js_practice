const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item=>{
    item.addEventListener("dragstart", ()=>{
        setTimeout(()=>item.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", ()=>{
        item.classList.remove("dragging")
    })
});

const initSortableList =(e)=>{
    e.preventDefault();
    let draggingItem = sortableList.querySelector(".dragging");
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })

    console.log(nextSibling);

    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e=> e.preventDefault());