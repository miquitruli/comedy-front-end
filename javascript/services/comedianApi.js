class ComedianApi {
    static fetchAllComedians() {
        fetch("http://127.0.0.1:3000/comedians")
        .then(res => res.json())
        .then(comedians => {
            comedians.forEach(c => {
                const comedian = new Comedian(c)
                comedian.addToPage() //calling add to page
            })  //array of every single comedian
        Comedian.populateSelectTag()
        })
        
    }

    static createComedian(comedianData) {
        fetch("http://127.0.0.1:3000/comedians", {
            method: "post", 
            headers: {
                accept: "application/json", 
                "content-type": "application/json" //when sending and receiving information to and from rails it has to be json
            },
            body: JSON.stringify({ //converting Javascript object into JSON(string) so rails can take this and convert it into a hash in Ruby
                comedian: comedianData
            })
        })
        .then(res => res.json())
        .then(c => {
            const comedian = new Comedian(c)
            comedian.addToPage() //calling add to page
        })
    }

    static deleteComedian(id) {
        fetch(`http://127.0.0.1:3000/comedians/${id}`, {
            method: "delete"
        }) 
        .then(()=> {
            const comedian = document.getElementById(`comedian-${id}`).remove() //target container we wabt to delete and then invoke remove()
        })
    }

    static updateComedian(comedianData) {
        
        fetch(`http://127.0.0.1:3000/comedians/${comedianData.id}`, {
            method: "PATCH", 
            headers: {
                Accept: "application/json", 
                "Content-type": "application/json" //when sending and receiving information to and from rails it has to be json
            },
            body: JSON.stringify({ //converting Javascript object into JSON(string) so rails can take this and convert it into a hash in Ruby
                comedian: comedianData
            })
        })
        .then(res => res.json())
        .then(c => {
            // const comedian = new Comedian(c)
            // comedian.addToPage() //calling add to page
            const comedian = Comedian.all.find(comedian => comedian.id === c.id) //hold the comedian object we just updated
            comedian.updateComedian(c) 
        })
    }
}
