
$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){

  data.timelines.map(function(post){
    var date = new Date(post.timestamp);
    post.timestamp = moment(date).format("MM/DD/YY h:mm");
    return post;
  })

  $('main').html(template.timelines(data));
});