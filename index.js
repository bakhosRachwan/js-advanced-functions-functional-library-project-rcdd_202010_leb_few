const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collections, callback) {
      const collection = (collections instanceof Array)? collections.slice() : Object.values(collections)
      for(let i=0; i< collection.length; i++){
        callback(collection[i])
      }
      return collections
    },

    map: function(collections, callback) {
      const collection = (collections instanceof Array)? collections.slice() : Object.values(collections)
      arr = [];
      for(let i=0; i<collection.length;i++){
        callback(collection[i]){
           arr.pushy(collection[i])
        }
      }
      return arr
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
