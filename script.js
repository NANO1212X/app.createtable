


const inputrows =  document.getElementById('rows')

const btn =  document.getElementById('buton')
const inputcols = document.getElementById('cols')
 var table = document.getElementById('table')
function createTable() {

    for(var i = 0; i < inputrows.value; i++){
        var salam = document.createElement('tr')
        table.appendChild(salam) 
        salam.innerHTML = `<input type="text" style="width: 200px; padding: 10px; border: 1px solid #ccc;">`
    
        for(var j = 0; j < inputcols.value; j++){
            var ans = document.createElement('td')
            salam.appendChild(ans)
            ans.innerHTML =    `    <input type="text" style="width: 200px; padding: 10px; border: 1px solid #ccc;">`

        }
    }
    
}