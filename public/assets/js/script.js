// $("form").on("submit", async function(event){
  document
  .getElementById("addadog")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // if its input you put input, if its select put select, if its text text..
    const dog_name = document.querySelector('input[name = "dog_name"]').value;
    const dog_breed = document.querySelector('input[name = "dog_breed"]').value;
    const dog_gender = document.querySelector(
      'select[name= "dog_gender"]'
    ).value;
    const dog_size = document.querySelector('select[name= "dog_size"]').value;
    const dog_age = document.querySelector('select[name= "dog_age"]').value;
    const dog_vaccinations = document.querySelector(
      'select[name= "dog_vaccinations"]'
    ).value;
    const dog_neuter_spayed = document.querySelector(
      'select[name= "dog_neuter_spayed"]'
    ).value;
    const dog_temperment = document.querySelector(
      'select[name= "dog_temperment"]'
    ).value;
    const dog_notes = document.getElementById('dog_notes').value;
    const dog_picture = dogURL;

    if (!dog_picture) {
        alert('An image is required!');
        return;
    }

    const preferred_days = document.querySelector(
      'select[name= "preferred_days"]'
    ).value;
    const preferred_timeofday = document.querySelector(
      'select[name= "preferred_timeofday"]'
    ).value;
    const preferred_location = document.querySelector(
      'input[name= "preferred_location"]'
    ).value;

    await fetch("/api/dogs", {
      method: "POST",
      body: JSON.stringify({
        dog_name,
        dog_breed,
        dog_gender,
        dog_size,
        dog_age,
        dog_vaccinations,
        dog_neuter_spayed,
        dog_temperment,
        dog_notes,
        dog_picture,
        preferred_days,
        preferred_timeofday,
        preferred_location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.replace("/matchandmeet");
  });
// //need to create another page showing the profile
