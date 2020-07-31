// To Do:   chinese character bug fix

const followingBands = document.getElementById('following-bands-container')
if(followingBands) {
    const followerGrid = followingBands.querySelector('.followeer-grid')
    const stickyGrid = document.getElementById('grid-tabs')
    const sortButton = document.createElement('span')
    const initialSortButton = document.createElement('span')
    const sortContainer = document.createElement('li')
    const initialSortContainer = document.createElement('li')
    let followOrder = []
    var artistCt = 0
    sortContainer.setAttribute('data-tab','sort')
    sortButton.innerText = 'sort alphabetically'
    sortButton.classList.add('tab-title')
    initialSortButton.innerText = 'initial sort'
    initialSortButton.classList.add('tab-title')
    sortContainer.insertBefore(sortButton,sortContainer.firstChild)
    initialSortContainer.insertBefore(initialSortButton,initialSortContainer.firstChild)
    stickyGrid.insertBefore(sortContainer,stickyGrid.lastChild)
    stickyGrid.insertBefore(initialSortContainer,stickyGrid.lastChild) 
    sortButton.addEventListener('click', event => {
        initialSortContainer.classList.remove('active')
        sortContainer.classList.add('active')
        const artists = followerGrid.querySelectorAll('li')
        const artistNames = followerGrid.querySelectorAll('.fan-username')
        if(artists.length > artistCt) {
            for (let i = artistCt; i < artists.length; i++) {
                const e = artists[i]
                followOrder.push(e)
            }
            artistCt = artists.length
            console.log(followOrder)
        }
        else {
            console.log('artist list same as count')
        }

        let artistArr = [].slice.call(artistNames).sort((a, b) => {
            if(a.textContent < b.textContent){
                const artistA = a.closest('li')
                const artistB = b.closest('li')
                followerGrid.insertBefore(artistA,artistB)
                return 1
            }else{
                return -1
            }
        })
    })
    initialSortButton.addEventListener('click', event => {
        initialSortContainer.classList.add('active')
        sortContainer.classList.remove('active')
        followerGrid.innerHTML = ''
        followOrder.forEach(e => {
            followerGrid.insertBefore(e,followerGrid.lastChild)
        })
    })
}