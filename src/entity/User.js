const EntitySchema = require("typeorm").EntitySchema;
const User = require("../model/user").User

module.exports = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        user_id: {
            primary: true,
            type: "varchar"
        },
        first_name: {
            type: "varchar"
        },
        last_name :{
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        role: {
            type: "varchar"
        }
    }
});