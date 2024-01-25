let inpFullname = document.querySelector("#inpFullname");
let inpEmail = document.querySelector("#inpEmail");
let inpAddress = document.querySelector("#inpAddress");
let inpPhone = document.querySelector("#inpPhone");
let inpNote = document.querySelector("#inpNote");
let btnSend = document.querySelector("#btnSend");
let successAlertContactUs = document.querySelector("#successAlertContactUs");


btnSend.addEventListener("click", (e) => {
    e.preventDefault();

    if (inpFullname.value !== "" && inpEmail.value !== "" && inpAddress.value !== "" && inpPhone.value !== "" && inpNote.value !== "") {


        let contactUsObj = {
            fullname: inpFullname.value,
            email: inpEmail.value,
            address: inpAddress.value,
            phone: inpPhone.value,
            note: inpNote.value,
        }
        console.log(contactUsObj);

        successAlertContactUs.innerHTML = `   <div class="alert alert-success col-3 row m-auto mb-3 p-4" role="alert">
        You successfully contacted!
    </div>`

        setTimeout(() => {
            successAlertContactUs.innerHTML = "";
        }, 2000)

        inpFullname.value = "";
        inpEmail.value = "";
        inpAddress.value = "";
        inpPhone.value = "";
        inpNote.value = "";
    } else {
        successAlertContactUs.innerHTML = `   <div class="alert alert-danger col-3 row m-auto mb-3 p-4" role="alert">
        You successfully contacted!
    </div>`

        setTimeout(() => {
            successAlertContactUs.innerHTML = "";
        }, 2000)
    }

})


const searchBtn = document.querySelector("#searchBtn");
const inp = document.querySelector("#inp");
const swiperWrapper = document.querySelector(".carousel-inner");

const data = [
    {
        "Title": "The Lego Movie",
        "Year": "2014",
        "imdbID": "tt1490017",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
        "Title": "The Simpsons Movie",
        "Year": "2007",
        "imdbID": "tt0462538",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    },
    {
        "Title": "El Camino: A Breaking Bad Movie",
        "Year": "2019",
        "imdbID": "tt9243946",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie",
        "Year": "2000",
        "imdbID": "tt0175142",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Super Mario Bros. Movie",
        "Year": "2023",
        "imdbID": "tt6718170",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
    },
    {
        "Title": "Bee Movie",
        "Year": "2007",
        "imdbID": "tt0389790",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 2",
        "Year": "2001",
        "imdbID": "tt0257106",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 3",
        "Year": "2003",
        "imdbID": "tt0306047",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
    },
    {
        "Title": "Scary Movie 4",
        "Year": "2006",
        "imdbID": "tt0362120",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    }
]

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();


    let dataArr = data.filter(el => {
        if (el.Title.toLowerCase().includes(inp.value.toLowerCase())) {
            return el;
        }
    })



    if (inp.value.length == 0) {
        console.log("Empty input");
        warningAlert.innerHTML = `<div class="alert alert-warning col-12 row m-auto mb-4 py-4" role="alert">
                                            Fill the input!
                                    </div>`

        setTimeout(() => {
            warningAlert.innerHTML = "";
        }, 2000)

        return;
    }

    if (dataArr.length > 0) {
        console.log("Found");
        swiperWrapper.innerHTML = dataArr.map((el, index) =>
        (`<div class="carousel-item ${index == 0 ? "active" : ""}">
                <div class="card mb-3" style="max-width: 960px; max-height: 560px;  padding: 50px 30px;">
                    <div class="row g-3 p-3">
                    <div class="col-md-6">
                        <img src="${el.Poster == "undefined" ? `../icon/logo_red.svg` : el.Poster}" class="card-img-bottom" class="img-fluid rounded-start" width="350" height="450" alt="...">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body d-flex flex-column gap-4">
                        <h5 class="card-title fs-3 fw-bold mt-3">${el?.Title}</h5>
                      
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            `)
        ).join("");

        inp.value = "";
    } else {
        console.log("Not found error");
        swiperWrapper.innerHTML = `
            <div class="carousel-item active">
            <div class="card mb-3" style="max-width: 960px; padding: 60px 30px;">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src=""
                            class="card-img-bottom" class="img-fluid rounded-start" alt="Movie">
                    </div>
                    <div class="col-md-6 ">
                        <div class="card-body d-flex flex-column gap-4">
                            <h5 class="card-title fs-3 fw-bold text-danger">Could not</h5>
                            <p class="card-text fs-3 text-danger">Find Your Book </p>
                            <p class="card-text fs-4 overflow-y-auto" style="height: 300px">Try to Read Lorem ipsum dolor sit amet consectetur,
                             adipisicing elit. Atque quis deleniti distinctio sequi accusantium labore blanditiis doloremque ex ipsam est,
                              ad ducimus animi, voluptates harum aut consequuntur obcaecati ab vero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

        inp.value = "";
    }

})


let studentInp = document.querySelector("#studentInp");
let studentBtn = document.querySelector("#studentBtn");


studentBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("student", studentInp.value);

    let stud = localStorage.getItem("student");

    console.log(stud);
})


let giphyId = document.querySelector("#giphy");

async function giphy() {
    let API_KEY = "dcgW4KyS5BeRE5ga2Ge09Kpf91Ywhsh7";

    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
        let data = await res.json();

        console.log(data.data);


        giphyId.innerHTML = giphyData(data);

    } catch (error) {
        console.log(error, "error");
    }

}


function giphyData(data) {
    return data.data.map(el => {
        return `<div class="card">
                    <img src=${el.images.downsized.url} width=200 height=200>
                </div>`
    }).join("")
}



giphy();