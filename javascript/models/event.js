class Event {
    constructor({name, address, city, zipcode, date, venue, comedian_id})  {
        this.name = name;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.date = date;
        this.venue = venue;
        this.comedian_id = comedian_id;

        Event.all.push(this)
    }   

    static all = []
}


