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
        <input type="text" name="last_name"/>
        <label for="age">Age:</label>
        <input type="number" name="age"/>
        <label for="description">Description:</label>
        <textarea name="description"></textarea>
        <label for="style">Style:</label>
        <input type="style" name="style"/>
        <input type="submit" value="Edit"/>
        `
        const comedianContainer = document.getElementById(`comedian-${this.id}`)
        comedianContainer.append(form)
    }
}
