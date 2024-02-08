const { Post } = require('../models');

const postData = [
    {
        title: "Math is Fun for Everyone!!!",
        content: "Math is fun for everyone! It is a universal language that everyone can understand" ,
        user_id: 1
    },
    {
        title: "2024 Lunar Eclipse",
        content: "Lunar eclipses occur when Earth's shadow blocks the sun's light, which otherwise reflects off the moon. There are three types — total, partial and penumbral — with the most dramatic being a total lunar eclipse, in which Earth's shadow completely covers the moon. The next total lunar eclipse will occur on May 26, 2021, and will be visible from eastern Asia, Australia, the Pacific Ocean and much of the Americas.",
        user_id: 2
    },
    {
        title: "The Best Way to Learn a New Language",
        content: "The best way to learn a new language is to immerse yourself in the culture and language. This means traveling to a country that speaks the language you want to learn and practicing with native speakers.",
        user_id: 6
    },
    {
        title: "Best Countries to Visit for Language Immersion",
        content: "The best countries to visit for language immersion are Spain, France, Italy, and Japan. These countries are known for their rich culture and history, and are great places to learn a new language.",
        user_id: 6
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;