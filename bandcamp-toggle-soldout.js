const merchGrid = document.querySelector('.merch-grid')
// add sold out toggle
if (merchGrid) {
    let soldOutItems = merchGrid.querySelectorAll('li > .price.sold-out')
    const soldOutToggle = document.createElement('a')
    soldOutToggle.classList.add('sold-out-toggle')
    soldOutToggle.innerText = 'Toggle Sold Out'
    soldOutToggle.addEventListener('click', event => {
        soldOutItems.forEach(e => {
            e.parentElement.classList.toggle('hidden')
        })
    })
    merchGrid.insertBefore(soldOutToggle, merchGrid.firstChild)
}