const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I am learning Spanish and will book a trip to Spain!",
        user_id: 1,
        post_id: 6,
        
    },
    {
        comment_text: "I noticed that the moon is getting closer to the Earth. Is this normal?",
        user_id: 1,
        post_id: 2,
        
    },
    {
        comment_text: "I am not a fan of math, but I am willing to give it a try.",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Great excuse to travel to Japan! I am going to start learning Japanese now.",
        user_id: 2,
        post_id: 6,
        
    },
    {
        comment_text: "My favorite subject is math. I am excited to learn more about it.",
        user_id: 6,
        post_id: 1,
        
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;