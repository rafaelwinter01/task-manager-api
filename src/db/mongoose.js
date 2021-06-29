const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGO_DB_CONN, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
