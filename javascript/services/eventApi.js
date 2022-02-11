class EventApi {
    static fetchAllEvents() {
        fetch("http://127.0.0.1:3000/events")
        .then(res => res.json())
        .then(events => {
            console.log(events)
        })
    }
}