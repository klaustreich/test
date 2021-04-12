async function getPosts() {
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    let arr = await responce.json();
    return arr;
}

function showArray(arr = []) {
    let table = document.getElementById('posts');
    let key;

    for (key in arr) {
        let row = table.insertRow(-1);
        row.classList.add('row');
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = arr[key].userId;
        cell2.innerHTML = arr[key].id;
        cell3.innerHTML = arr[key].title;
        cell4.innerHTML = arr[key].body;
    }
}

function loadPage() {
    getPosts().then(arr => showArray(arr));
}
loadPage();