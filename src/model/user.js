class User {
    constructor(user_id, first_name, last_name, password,role) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.role = role;
    }
}

module.exports = {
    User: User
};
