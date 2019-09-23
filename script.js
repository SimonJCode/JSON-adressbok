//Variables
const ul = document.getElementById("adressbok");

//Fetch the JSON file and store i "data".
fetch ('adressbok-1.json')
    .then(response => response.json())
    .then(function(data){

        //Sort the array by age.
        data.sort(function(a, b){
           return a.age - b.age;
        })

        //Create a <li> for every object in the array.
        for(i = 0; i < data.length; i++){
            let li = document.createElement("li");
            li.innerHTML = data[i].lastname + " " + data[i].firstname + "<br> " + data[i].phone;
            ul.appendChild(li);

            console.log(data[i]);
        }
    })

    //Log in case of error
    .catch(err => console.log(err))
    