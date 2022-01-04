const databaseConfig=require('../config/db.config')

const mongoose=require('mongoose')

const database={}

database.mongoose=mongoose
database.url=databaseConfig.url
database.users=require('./user.model')(mongoose)

module.exports=database
