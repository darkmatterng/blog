$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("GkIIUGNHTbspk3Y527BCWmL9SyDzFSPN4QCOao9g", "5ywfFAzZAxzbFyyvwGCXcUcb0ZlpCXSL1M4ZfGzv");

 
    var Blog = Parse.Object.extend("Blog");
	
	var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();
blogs.fetch({
success: function(blogs) {
    var blogsView = new BlogsView({ collection: blogs });
    blogsView.render();
    $('.main-container').html(blogsView.el);
},
    error: function(blogs, error) {
        console.log(error);
    }
});

var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});



$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.leftsidebar').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});



$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.rightsidebar').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});


 
});