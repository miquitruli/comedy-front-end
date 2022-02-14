class EventApi {

    static fetchAllEvents() {
        fetch("http://127.0.0.1:3000/events")
        .then(res => res.json())
        .then(events => {
            events.forEach(c => {
                const event = new Event(c)
                event.addToPage() //calling add to page
            })  //array of every single comedian
        })
    }

    static createEvent(eventData) {
        fetch("http://127.0.0.1:3000/events", {
            method: "post", 
            headers: {
                accept: "application/json", 
                "content-type": "application/json" //when sending and receiving information to and from rails it has to be json
            },
            body: JSON.stringify({ //converting Javascript object into JSON(string) so rails can take this and convert it into a hash in Ruby
                event: eventData
            })
        })
        .then(res => res.json())
        .then(c => {
            const event = new Event(c)
            event.addToPage() //calling add to page
        })
    }

    static deleteEvent(id) {
        fetch(`http://127.0.0.1:3000/events/${id}`, {
            method: "delete"
        }) 
        .then(()=> {
            const event = document.getElementById(`event-${id}`).remove() //target container we wabt to delete and then invoke remove()
        })
    }

    static updateEvent(eventData) {
        
        fetch(`http://127.0.0.1:3000/comedians/${eventData.id}`, {
            method: "PATCH", 
            headers: {
                Accept: "application/json", 
                "Content-type": "application/json" //when sending and receiving information to and from rails it has to be json
            },
            body: JSON.stringify({ //converting Javascript object into JSON(string) so rails can take this and convert it into a hash in Ruby
                event: eventData
            })
        })
        .then(res => res.json())
        .then(c => {
            // const comedian = new Comedian(c)
            // comedian.addToPage() //calling add to page
            const event = Event.all.find(event => event.id === c.id) //hold the comedian object we just updated
            event.updateEvent(c) 
        })
    }
}