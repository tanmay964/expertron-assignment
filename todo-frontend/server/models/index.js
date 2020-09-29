const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://tanmay311:rv112233@cluster0.rlsna.mongodb.net/expertron?retryWrites=true&w=majority`,{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

// mongodb+srv://tanmay311:rv112233@cluster0.rlsna.mongodb.net/expertron?retryWrites=true&w=majority