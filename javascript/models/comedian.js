class Comedian {
    constructor({first_name, last_name, age, description, style, id})  {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.description = description;
        this. style = style;
        this.id = id;

        Comedian.all.push(this)
    }   

    static all = []

    addToPage() {
        const comedians = document.getElementById("comedians")
        const comedianContainer = document.createElement("div")
        comedianContainer.id = `comedian-${this.id}` //make sure each id is different so we can target it.
        comedianContainer.innerHTML = `
            <h4>Name: ${this.first_name} ${this.last_name} ${this.age} ${this.style}</h4>
            <p>${this.description}</p>
            <button class="edit-comedian">Edit</button>
            <button class="delete-comedian">Delete</button>
        `
        comedians.append(comedianContainer) //comedianContainer is child element of comedians
        const deleteButton = comedianContainer.querySelector(".delete-comedian")
        deleteButton.addEventListener("click", () => { //because it's a delete button
            ComedianApi.deleteComedian(this.id)
        }) 
        const editButton = comedianContainer.querySelector(".edit-comedian")
        editButton.addEventListener("click", () => {
            this.displayEditForm()
        })

    }

    displayEditForm() {
        const form = document.createElement("form")
        form.innerHTML = `
        <h2>Edit Comedian:</h2>
        <label for="first_name">First Name:</label>
        <input type="text" name="first_name" value="${this.first_name}"/>
        <label for="last_name">Last Name:</label>
        <input type="text" name="last_name" value="${this.last_name}"/>
        <label for="age">Age:</label>
        <input type="number" name="age" value="${this.age}"/>
        <label for="description">Description:</label>
        <textarea name="description">${this.description}"</textarea>
        <label for="style">Style:</label>
        <input type="style" name="style" value="${this.style}"/>
        <input type="submit" value="Save"/>
        `//we interpolate so the form is populated when we click edit
        const comedianContainer = document.getElementById(`comedian-${this.id}`)
        comedianContainer.append(form)
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const data = {
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value,
                age: event.target.age.value,
                description: event.target.description.value,
                style: event.target.style.value,
                id: this.id //because user cannot edit this
            }
            ComedianApi.updateComedian(data)
            event.target.reset() //returns form element, and clear form to default value
        })
    }

    updateComedian(comedianData) {
        this.first_name = comedianData.first_name
        this.last_name = comedianData.last_name
        this.age= comedianData.age
        this.description = comedianData.description
        this.style = comedianData.style

        const comedianContainer = document.getElementById(`comedian-${this.id}`)
        comedianContainer.innerHTML = `
            <h4>Name: ${this.first_name} ${this.last_name} ${this.age} ${this.style}</h4>
            <p>${this.description}</p>
            <button class="edit-comedian">Edit</button>
            <button class="delete-comedian">Delete</button>
        `
    }

    static populateSelectTag() {
        const comedianSelect = document.querySelectorAll(".comedian-list")
        comedianSelect.forEach( select => {
            let comedianOptions = ""
            Comedian.all.forEach(c => {
                comedianOptions +=`<option value="${c.id}">${c.first_name} ${c.last_name}</option>` //iterate over all comedians and create an option tag for each comedian
            })
            select.innerHTML = comedianOptions
        }) 
    }
}
