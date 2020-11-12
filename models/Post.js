const {model, Schema} = require('mongoose');

const postSchema =  new Schema ({
    body: String,
    username: String,
    creanedAt: String,
 comments: [
        {
            body: String,
            username: String,
            creanedAt: String
        }
    ],
likes: [
    {
        username: String,
        createdAt: String
    }
],
user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
}
});

module.exports = ('Post', postSchema)

