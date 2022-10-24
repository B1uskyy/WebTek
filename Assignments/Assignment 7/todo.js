let inputValue = document.getElementById('add_task');
let ul = document.querySelector('ul');
let button = document.querySelector('button');
const output = document.querySelector('#output');
const completed = document.querySelector('#completed');

const todo_liste = [];


function addTask(e) {




    let liste = document.createElement('li');
    let p = document.createElement('p');

    let check = document.createElement('input');
    check.type = 'checkbox';
   
    let today = new Date().getTime();


   // remove the list dots
   liste.style.display = "flex"
    liste.style.listStyle = "none"
   

    // Gives the 'li' element the value of the userinput, and pushes to the array the value so it can be counted 
    liste.innerHTML = inputValue.value;
    todo_liste.push(liste);
    

    // appends the inputvalue from the user as it has already been made a list, and prepends the checkbox before the text
    ul.append(liste);
    liste.prepend(check)


    
    console.log(todo_liste);
    
    // clears the input field after the user has clicked the button
    inputValue.value = "";


    function totalTask() {
        output.innerHTML = todo_liste.length; 
    }

   
    totalTask()


    function completedTask () {
        counter = 0
        completed.innerHTML = counter;

        check.addEventListener('click', function() { {
            if (check.checked) {
                counter += 1;
                completed.innerHTML = (`${counter} / ${todo_liste.length}`);
            } else if (check.checked === false) {
                counter -= 1;
                completed.innerHTML = (`${counter} / ${todo_liste.length}`);
            }

        }
    
    })
    }
    completedTask()
   
    function line_through() {
        if (check.checked == true) {
            liste.style.textDecoration = "line-through";
        } else {
            liste.style.textDecoration = "none";
        }
    }

     check.addEventListener('click', line_through);

     button.addEventListener('click', console.log(today))

    e.preventDefault();
}




button.addEventListener('click', addTask);















