(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
          /* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
          /* Optional GlideRecord */ event) {

var grAuthor = new GlideRecord("sys_user");
grAuthor.addQuery("email", event.parm1);
grAuthor.query();
grAuthor.next();
var userName = grAuthor.getDisplayValue("name");
	gs.info("MMMc:author_from_email : author "+ userName);
	template.print(userName);

})(current, template, email, email_action, event);
