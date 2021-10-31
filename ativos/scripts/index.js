function counterWords() {
    let input = document.getElementById('counterInput').value
    if (input.length === 0){
        document.getElementById('newNumber').textContent = 0
        } else 
        {document.getElementById('newNumber').textContent = input.split(' ').length
            }
    }
