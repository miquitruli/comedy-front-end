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

    const createEventForm = document.getElementById("create-event-form")
    createEventForm.addEventListener("submit", (event) => {
        event.preventDefault() //this prevents page from refreshing which for a form is a default behavior
        const data = {
            comedian_id: event.target.comedian_id.value,
            name: event.target.name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            state: event.target.state.value,
            zipcode: event.target.zipcode.value,
            date: event.target.date.value,
            venue: event.target.venue.value,       
        }
        EventApi.createEvent(data)
        event.target.reset() //returns form element, and clear form to default value
        
    }) 

    // let comments = ""

})