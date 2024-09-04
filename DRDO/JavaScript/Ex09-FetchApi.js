const baseURL = "http://localhost:3000/novels/";
const loadData = () => {
    //var promise = ;
    fetch(baseURL).then(res => res.json(), err => alert(err)).then(data => {
        const tbody = document.querySelector('tbody');
        data.forEach(a => {
            tbody.innerHTML += `<tr>
                <td>${a.id}</td>
                <td>${a.title}</td>
                <td>${a.author}</td>
                <td>${a.genre}</td>
                <td><button class='btn btn-sm btn-primary'>Edit</button><button class='btn btn-sm btn-danger'>Delete</button></td>
                </tr>`;
        });
    }).catch(err => console.log(err));

}


/* 
  */