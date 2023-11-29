function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        sayName: function () {
            alert(this.name);
        }
    };
    return member;
}