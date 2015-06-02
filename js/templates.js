this["template"] = this["template"] || {};
this["template"]["timelines"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section>\n  <aside>\n\n\n    <span class=\"fa-stack fa-lg timeIcon\">\n      <i class=\"fa fa-circle fa-stack-2x outer-ring\"></i>\n      <i class=\"fa fa-circle fa-stack-2x inner-ring\"></i>\n      <i class=\"fa "
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-stack-1x fa-inverse\"></i>\n    </span>\n\n    <div class=\"stamp\">\n      <p class=\"date\">"
    + alias3(((helper = (helper = helpers.timerDate || (depth0 != null ? depth0.timerDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timerDate","hash":{},"data":data}) : helper)))
    + "</p>\n      <h4 class=\"hour\">"
    + alias3(((helper = (helper = helpers.timerHour || (depth0 != null ? depth0.timerHour : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timerHour","hash":{},"data":data}) : helper)))
    + "</h4>\n    </div>\n\n  </aside>\n  <article>\n    <figure>\n      <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n      <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n    </figure>\n  </article>\n</section>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timelines : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});