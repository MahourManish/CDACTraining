const baseURL = "http://localhost:3000/employees";
const loadData = () => {
    //var promise = ;
    fetch(baseURL).then(res => res.json(), err => console.log(err)).then(data => {
        const tbody = document.querySelector('tbody');
        data.forEach(a => {
            tbody.innerHTML += `<tr>
                <td>${a.id}</td>
                <td>${a.name}</td>
                <td>${a.address}</td>
                <td>${a.salary}</td>
                <td><button class='btn btn-sm btn-primary' onclick='editMode(${a.id})'>Edit</button><button class='btn btn-sm btn-danger' onclick='delete(${a.id})'>Delete</button></td>
                </tr>`;
        });
    }).catch(err => console.log(err));

}

const editMode = (id) => {
    fetch(baseURL + id)
        .then(res => res.json(), err => console.log(err))
        .then(res => {
            document.getElementById("txtId").value = res.id;
            document.getElementById("txtTitle").value = res.title;
            document.getElementById("txtAuthor").value = res.author;
            document.getElementById("txtGenre").value = res.genre;
            document.getElementById("addbtn").innerText = "Update";
        }, err => console.log(err));
};

/* 
  */