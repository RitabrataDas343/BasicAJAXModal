const tableBody = document.getElementById('table-body-box')
const modalBody = document.getElementById('modal-body')
const url = window.location.href

$.ajax({
    type: 'GET',
    url: '/data-json/',
    success: function(response) {
        const data = JSON.parse(response.data)
        data.forEach(el => {
            tableBody.innerHTML += `
                <tr>
                    <td>${el.pk}</td> 
                    <td><div class = "my-img" data-toggle="modal" data-target="#previewPicModal" data-pic=media/${el.fields.item}><img src=media/${el.fields.item} height='40px' class='img-photo'></div></td>
                    <td>${el.fields.info}</td>
                </tr>
                `
        })
        const imgPhoto = [...document.getElementsByClassName('img-photo')]
        imgPhoto.forEach(item => item.addEventListener('click', e => {
            const pic = e.target.parentElement.getAttribute('data-pic')
            console.log(pic)
            modalBody.innerHTML = `<img src=${pic} height='250px'>`
        }))
    },
    error: function(error) {
        console.log(error)
    }
})