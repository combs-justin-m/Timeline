
$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){

  data.timelines.forEach(function(post){
    var date = moment(post.timestamp);
    post.timerHour = date.format("h:mm");
    post.timerDate = date.format("MM/DD/YY");
  })

  $('main').html(template.timelines(data));
});