const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
}); 

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
}); 

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
});

Comment.belongsTo(User, { 
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
});

module.exports = { User, Post, Comment};
