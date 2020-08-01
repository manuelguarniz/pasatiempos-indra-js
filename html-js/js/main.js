let div = document.createElement('div')

let numeros = [ {id:1, name:'xd'}, {id:2, name:'xd2'}]


let table = `
<table border=1>
<thead>
  <th>
    <tr>
      Id
    </tr>
    <tr>
      Nombre
    </tr>
  </th>
</thead>
<tbody>`

numeros.forEach(item => {
  table += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
          </tr>`
})
  

table += `
</tbody>
</table>
`
 
div.innerHTML += table

window.document.body.appendChild(div)