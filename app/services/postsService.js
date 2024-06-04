const ULID = require('ulid')
const database = require('../../config/database');
const sluggify = require('../utilities/sluggify');
const NotFound = require('./../errors/NotFound')
const { format } = require('date-fns');

async function getPosts() {
    const collection = await database.connect(process.env.DB_DATABASE);

    return await collection.find({}).toArray()
}

async function getPost(identifier) {

    const result = await dbCollection.findOne({'id': identifier});

    if (result === null) {
        throw new NotFound("Post not found.");
    }

    return result;
}

async function createPost(postData) {
    const collection = await database.connect(process.env.DB_DATABASE);
    
    const today = new Date();

    const result = await collection.insertOne({
        id: ULID.ulid(),
        title: postData.title,
        slug: sluggify(postData.title),
        author: postData.author,
        body: postData.body,
        is_featured: postData.is_featured ?? false,
        created_at: format(today, 'yyyy-MM-dd'),
        category: postData.category ?? "Uncategorized"
    });

    return result;
}

async function updatePost(postData, identifier) {
    const collection = await database.connect(process.env.DB_DATABASE);
    
    const today = new Date();

    const result = await collection.updateOne({"id": identifier}, {$set: {
        title: postData.title,
        slug: sluggify(postData.title),
        author: postData.author,
        body: postData.body,
        is_featured: postData.is_featured ?? false,
        created_at: format(today, 'yyyy-MM-dd'),
        category: postData.category ?? "Uncategorized"
    }});

    return result;
}

async function deletePost(identifier) {
    const collection = await database.connect(process.env.DB_DATABASE);

    const result = await collection.deleteOne({"id": identifier});

    return result;
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}