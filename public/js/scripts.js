const cardList = [
    {
        title: "MangoDB",
        image: "images/mongo.png",
        link: "About MangoDB Course",
        desciption: "2months course <br> 30000+ registered users <br> $200"
    },
    {
        title: "Express JS",
        image: "images/ejs.png",
        link: "About Express JS Course",
        desciption: "2months course <br> 30000+ registered users <br> $300"
    },
    {
        title: "React JS",
        image: "images/react.png",
        link: "About React JS Course",
        desciption: "2months course <br> 60000+ registered users <br> $500"
    },
    {
        title: "Node JS",
        image: "images/node.png",
        link: "About Node JS Course",
        desciption: "2months course <br> 20000+ registered users <br> $300"
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.username = $('#username').val();
    formData.password = $('#password').val();

    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});