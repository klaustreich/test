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

function sortArrayBy(arr, sortKey, desc) {
    arr.sort(function (a, b) {
        if (a[sortKey] > b[sortKey]) return -1;
        if (a[sortKey] < b[sortKey]) return 1;
        return 0;
    });

    if (desc) arr.reverse();
    return arr;
}

function filterTable() {
    let input = document.querySelector('input');
    let table = document.getElementById('posts');
    let searchStr = new RegExp(input.value, 'i');
    let flag = false;

    console.log( table.rows.length);
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = searchStr.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

function loadPage() {
    getPosts().then(arr => showArray(arr));

    let clickUserId = false;
    let clickId = false;
    let clickTitle = false;
    let clickBody = false;

    const sortUserId = document.querySelector('.userId');
    const sortId = document.querySelector('.id');
    const sortTitle = document.querySelector('.title');
    const sortBody = document.querySelector('.body');
    const input = document.querySelector('input');

    sortUserId.addEventListener('click', () => {
        document.querySelectorAll('.row').forEach(row => row.remove());
        getPosts().then(arr => {
            let array = sortArrayBy(arr, 'userId', clickUserId);
            showArray(array);
        });
        clickUserId = !clickUserId;
    });
    sortId.addEventListener('click', () => {
        document.querySelectorAll('.row').forEach(row => row.remove());
        getPosts().then(arr => {
            let array = sortArrayBy(arr, 'id', clickId);
            showArray(array);
        });
        clickId = !clickId;
    });
    sortTitle.addEventListener('click', () => {
        document.querySelectorAll('.row').forEach(row => row.remove());
        getPosts().then(arr => {
            let array = sortArrayBy(arr, 'title', clickTitle);
            showArray(array);
        });
        clickTitle = !clickTitle;
    });
    sortBody.addEventListener('click', () => {
        document.querySelectorAll('.row').forEach(row => row.remove());
        getPosts().then(arr => {
            let array = sortArrayBy(arr, 'body', clickBody);
            showArray(array);
        });
        clickBody = !clickBody;
    });
}
loadPage();