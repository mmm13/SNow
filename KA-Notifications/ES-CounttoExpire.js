(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
          /* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
          /* Optional GlideRecord */ event) {
gs.info("MMMc:CounttoExpire: parm2 "+ event.parm2);
	if (event.parm2 > 1 ){
		template.print("You have "+ event.parm2 +" things about to expire");
	}else{
		template.print("You have "+ event.parm2 +" thing expiring");
	}
})(current, template, email, email_action, event);
