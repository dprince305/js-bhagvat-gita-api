const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a6a5b586cmsha2ad962b244b2bdp1e3655jsn6d04124f65fc',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

let table = document.getElementById('tbl');
let box1 = document.getElementById('box1');

fetch(url, options).then((res) => {
    
    return res.json();

}).then((data) => {

    console.log(data);

    data.forEach(element => {

        console.log(element);

        table.innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.verses_count}</td>
        <td><button onclick="return clicks(${element.id})">Click</button></td>
        </tr>`

    });

}).catch((err) => {
    console.log(err);
})



const clicks = (no) => {
    const url1 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${no}/verses/`;

    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4a6a5b586cmsha2ad962b244b2bdp1e3655jsn6d04124f65fc',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    fetch(url1, options1).then((ress) => {
        return ress.json();
    }).then((datas) => {
        console.log(datas);
        datas.forEach(ele1 => {
            table.innerHTML='';
            box1.innerHTML += ` 
                <p>${ele1.text}</p>`
        })
    }).catch((err) => {
        console.log(err);
    })

}