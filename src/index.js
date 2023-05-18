var AppDataSource = require('./data-source').AppDataSource
// console.log(AppDataSource)

const User = require('./model/user').User

const main = async ()=>{
    let newAppDataSource = await AppDataSource
    // await AppDataSource.createQueryBuilder().insert() 
    //   .into(User)  
    //   .values([ {user_id:"vibhavA", first_name: "Vibahv",last_name:"Mishra",password:"12345",role:"admin"}, 
    //      { user_id:"vibhavU", first_name: "Vibahv",last_name:"Mishra",password:"123456789",role:"user"} ]) .execute(); 



    const userRepository = newAppDataSource.getRepository(User)
const allUser = await userRepository.find()
console.log("All photos from the db: ", allUser)

const findByid = await userRepository.findOneBy({
    user_id: "vibhavA",
})
console.log("findByid",findByid)
}

main()