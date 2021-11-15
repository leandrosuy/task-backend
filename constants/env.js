const config = {
    port: process.env.PORT || 3000,
    url_connection: 'mongodb+srv://leandrosuy:12345672@tasks.wtwmq.mongodb.net/tasks?retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true }

}
module.exports = config;