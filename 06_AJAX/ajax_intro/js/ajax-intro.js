const fetchFact = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const p = document.createElement('p')
        const data = JSON.parse( xhr.responseText )
        p.innerHTML = data.text;
        document.body.appendChild(p)
    };

    xhr.open("GET", "http://numbersapi.com/random/trivia?json");
    xhr.send();
};

document.getElementById("fetch").addEventListener("click", fetchFact)