class WrongPasswordException extends Error {
    constructor(message: string = "Wrong Password Exception") {
        super(message);
        this.name = "WrongPasswordException";
    }
}
class WrongLoginException extends Error {
    constructor(message: string = "Wrong Login Exception") {
        super(message);
        this.name = "WrongLoginException";
    }
}
class User {
    static validateUser(login: string, password: string, confirmPassword: string): boolean {
        try {
            if (!/^[a-zA-Z0-9_]{1,20}$/.test(login)) {
                throw new WrongLoginException();
            }
            if (!/^[a-zA-Z0-9_]{1,20}$/.test(password) || password !== confirmPassword) {
                throw new WrongPasswordException();
            }
            return true;
        } catch (e) {
            console.error(`User validation failed due to ${e.name}: ${e.message}`);
            return false;
        }
    }
}
// Пример использования
console.log(User.validateUser("my_login1", "my_password1", "my_password1")); // true
console.log(User.validateUser("my_login1!", "my_password1", "my_password1")); // false
console.log(User.validateUser("my_login1", "my_password1", "my_password2")); // false