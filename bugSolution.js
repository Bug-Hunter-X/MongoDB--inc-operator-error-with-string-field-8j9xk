```javascript
// Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});

//Alternative Solution. Assuming the age field is a string in the format '25'
 db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: parseInt('1')}});
```