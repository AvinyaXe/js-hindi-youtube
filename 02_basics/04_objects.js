// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abd342"
tinderUser.name = "Sam"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "vansh",
            lastname: "gill"
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname);
