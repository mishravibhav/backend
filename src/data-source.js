const typeorm = require("typeorm")
const { DataSource } = require("typeorm")
// const main = require('./index').main
const User = require("./model/user").User

const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "password",
        database: "vibhav_db",
        synchronize: true,
        logging: false,
        entities: [
            require("./entity/User")
        ]
})

dataSource.initialize().then(async(e)=>{
        console.log("db connection established")

        // await dataSource.createQueryBuilder().insert() 
        //   .into(User)  
        //   .values([ {user_id:"vibhavA", first_name: "Vibahv",last_name:"Mishra",password:"12345",role:"admin"}, 
        //      { user_id:"vibhavU", first_name: "Vibahv",last_name:"Mishra",password:"123456789",role:"user"} ]) .execute(); 
        
        const userRepository = dataSource.getRepository(User)
        const allUser = await userRepository.find()
        console.log("All photos from the db: ", allUser)
        
        const findByid = await userRepository.findOneBy({
            user_id: "vibhavA",
        })
        console.log("findByid",findByid)
        
    }).catch((err)=>{
        console.log("error",err)
    })


// module.export = {
//     AppDataSource : master
// }  
