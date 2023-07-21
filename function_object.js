let person={
    firstname:"joe",
    lastname:"biden",
    fullname: function()
    {
        return this.firstname+ " "+this.lastname;
    }
}
console.log(person.fullname());