// No var keyword so Posts is available to whole app.
// Using var limits scope to file in meteor.
Posts = new Mongo.Collection('posts');
