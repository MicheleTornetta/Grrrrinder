

function requireText() {
    document.getElementById("text").required = true;
    document.getElementById("demo").innerHTML = "Please fill in the blank text feilds.";
}

    // $("form").on("submit", async function(event){
    document.getElementById("add_button").addEventListener("click", async function(event){

   console.log(dogURL);
    event.preventDefault();
    console.log("hello")
    // if its input you put input, if its select put select, if its text text..
    const dog_name = document.querySelector('input[name = "dog_name"]').value;
    const dog_breed = document.querySelector('input[name = "dog_breed"]').value;
    const dog_gender = document.querySelector('select[name= "dog_gender"]').value;
    const dog_size = document.querySelector('select[name= "dog_size"]').value;
    const dog_age = document.querySelector('select[name= "dog_age"]').value;
    let dog_vaccinations = document.querySelector('select[name= "dog_vaccinations"]').value;
    let dog_neuter_spayed = document.querySelector('select[name= "dog_neuter_spayed"]').value;
    const dog_temperment = document.querySelector('select[name= "dog_temperment"]').value;
    const dog_notes = document.querySelector('input[name= "dog_notes"]').value;
    const dog_picture = dogURL
    const preferred_days = document.querySelector('select[name= "preferred_days"]').value;
    const preferred_timeofday = document.querySelector('select[name= "preferred_timeofday"]').value;
    const preferred_location = document.querySelector('input[name= "preferred_location"]').value;
    console.log(dog_name, dog_breed, dog_gender, dog_size, dog_age, dog_vaccinations, dog_neuter_spayed, dog_temperment, dog_notes, dog_picture, preferred_days, preferred_timeofday, preferred_location,)
    // const dog_name = document.querySelector("name = dog_name").value;
    // const dog_gender = document.querySelector("name= dog_gender").value;
    // const dog_size = document.querySelector("name= dog_size").value;
    // const dog_age = document.querySelector("name= dog_age").value;
    // const dog_vaccinations = document.querySelector("name= dog_vaccinations").value;
    // const dog_neuter_spayed = document.querySelector("name= dog_neuter_spayed").value;
    // const dog_temperment = document.querySelector("name= dog_temperment").value;
    // const preferred_days = document.querySelector("name= preferred_days").value;
    // const preferred_timeofday = document.querySelector("name= preferred_timeofday").value;
    // const preferred_location = document.querySelector("name= preferred_location"]').value;
    if (!dog_vaccinations.value){
        dog_vaccinations = false
        console.log(dog_vaccinations)
    } else {
        dog_vaccinations = true
    }
    if (!dog_neuter_spayed.value){
        dog_neuter_spayed = false
    } else {
        dog_neuter_spayed = true
    }
    await fetch('/api/dogs', {
        method: "POST",
        body: JSON.stringify({
            dog_name:dog_name, dog_breed:dog_breed, dog_gender: dog_gender, dog_size: dog_size, dog_age: dog_age, dog_vaccinations: dog_vaccinations, dog_neuter_spayed: dog_neuter_spayed, dog_temperment: dog_temperment, dog_notes: dog_notes, dog_picture: dog_picture, preferred_days: preferred_days, preferred_timeofday: preferred_timeofday, preferred_location: preferred_location,
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    })  
        .then((data) => {
            console.log(data)
            if (data.ok===true){
                // window.location.assign('/profile')
            }
          
        })

})
// //need to create another page showing the profile  