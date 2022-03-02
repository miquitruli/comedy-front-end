class Event {
    constructor({name, address, city, state, zipcode, date, venue, comedian_name, id})  {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.date = date;
        this.venue = venue;
        this.comedian_name = comedian_name;
        this.id = id;

        Event.all.push(this)
    }   

    static all = []

    addToPage() {
        const events = document.getElementById("events")
        const eventContainer = document.createElement("div")
        eventContainer.id = `event-${this.id}` //make sure each id is different so we can target it.
        eventContainer.innerHTML = `
            <h4>Comedian Name: ${this.comedian_name}  Tour Name: ${this.name}  Address: ${this.address} ${this.city} ${this.state} ${this.zipcode}  </h4>
            <h4><p>Date and Time: ${this.date}   Venue: ${this.venue} </p></h4>
            <button class="edit-event">Edit</button>
            <button class="delete-event">Delete</button>
        `
        events.append(eventContainer) //comedianContainer is child element of comedians
        const deleteButton = eventContainer.querySelector(".delete-event")
        deleteButton.addEventListener("click", () => { //because it's a delete button
            EventApi.deleteEvent(this.id)
        }) 
        const editButton = eventContainer.querySelector(".edit-event")
        editButton.addEventListener("click", () => {
            this.displayEditForm()
        })

    }

    displayEditForm() {
        const form = document.createElement("form")
        form.innerHTML = `
        <h2>Edit Event:</h2>
        <select name="comedian_id" class="comedian-list">   
        </select></p>
        <label for="name">Event Name:</label>
        <input type="text" name="name" value="${this.name}"/>
        <label for="address">Address:</label>
        <input type="text" name="address" value="${this.address}"/>
        <label for="city">City:</label>
        <input type="text" name="city" value="${this.city}"/>
        <label for="zipcode">Zipcode:</label>
        <input type="text" name="state" value="${this.state}"/>
        <label for="state">State:</label>
        <input type="text" name="zipcode" value="${this.zipcode}"/>
        <label for="date">date:</label>
        <input type="text" name="date" value="${this.date}"/>
        <label for="venue">venue:</label>
        <input type="text" name="venue" value="${this.venue}"/>
        
        <input type="submit" value="Save"/>
        `//we interpolate so the form is populated when we click edit
        const eventContainer = document.getElementById(`event-${this.id}`)
        eventContainer.append(form)
        Comedian.populateSelectTag()
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const data = {
                name: event.target.name.value,
                address: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
                zipcode: event.target.zipcode.value,
                date: event.target.date.value,
                venue: event.target.venue.value,
                id: this.id, //because user cannot edit this
                comedian_id: event.target.comedian_id.value
            }
            EventApi.updateEvent(data)
            event.target.reset() //returns form element, and clear form to default value
        })
    }

    updateEvent(eventData) {
        this.comedian_name = eventData.comedian_name
        this.name = eventData.name
        this.address = eventData.address
        this.city= eventData.city
        this.state= eventData.state
        this.zipcode = eventData.zipcode
        this.date = eventData.date
        this.venue = eventData.venue

        const eventContainer = document.getElementById(`event-${this.id}`)
        eventContainer.innerHTML = `
            <h4>Name:  ${this.comedian_name} ${this.name}   Address: ${this.address} ${this.city} ${this.state} ${this.zipcode}   Date: ${this.date}    Venue: ${this.venue}</h4>
            <button class="edit-event">Edit</button>
            <button class="delete-event">Delete</button>
        `
    }
}



