document.addEventListener("DOMContentLoaded", () => {
    ComedianApi.fetchAllComedians()
    EventApi.fetchAllEvents()
    const createComedianForm = document.getElementById("create-comedian-form")
    createComedianForm.addEventListener("submit", (event) => {
        event.preventDefault() //this prevents page from refreshing which for a form is a default behavior
        const data = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            age: event.target.age.value,
            description: event.target.description.value,
            style: event.target.style.value
        }
        ComedianApi.createComedian(data)
        event.target.reset() //returns form element, and clear form to default value
        
    }) 
})