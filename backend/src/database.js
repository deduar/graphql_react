import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/graphql_react",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database connected'))
.catch(err => console.log(err));