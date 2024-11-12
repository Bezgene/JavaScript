function createNewUser() {
    let firstName = prompt("What is your first name?", "");
    let lastName = prompt("What is your last name?", "");
    let birthdate = prompt("Enter your birthdate (dd.mm.yyyy):", "");

    const newUser = {
        firstName,
        lastName,
        birthdate,

        getLogin() {
            return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`;
        },

        getAge() {
            const today = new Date();
            const birthDate = new Date(this.birthdate.split(".").reverse().join("-"));
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },

        getPassword() {
            const birthYear = this.birthdate.split(".")[2];
            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${birthYear}`;
        }
    };

    return newUser;
}

// Створення нового користувача
const user = createNewUser();

// Вивід інформації про користувача
console.log("User login:", user.getLogin());
console.log("User age:", user.getAge());
console.log("User password:", user.getPassword());
