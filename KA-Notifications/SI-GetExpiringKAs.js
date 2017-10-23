var GetExpiringKAs = Class.create();
GetExpiringKAs.prototype = {
    initialize: function() {
    },
	getArticleCount: function(numDays){
	try {
		var activeDays = gs.daysAgoStart(-numDays);
		var gr = new GlideRecord('kb_knowledge');
		// only get published articles
		gr.addQuery('workflow_state', 'Published');
		// get requests whose due date is less than or equal to activeDays from now
		// may need to be exactly # days if script runs daily
		// so script can be used for any number of days
		gr.addQuery('valid_to', '<=', activeDays);
		gr.query();
		gs.info('getOldKAs:rows returned :'+ gr.getRowCount() +' ActiveTo:'+ activeDays);
		var author_emails=[];
		while (gr.next()) {
			var key = gr.author.email.trim();
			if (key) {
				author_emails.push(key);
			}
		}//end of query read while
		var unique_author_emails = new ArrayUtil().unique(author_emails);

		for (var i=0; i < unique_author_emails.length; i++){
			var author = unique_author_emails[i];
			var author_ka_count = 0;
			for (var x=0; x < author_emails.length; x++){
				if (author == author_emails[x] ) {
					author_ka_count++;
				}
			}//end of inner for
			gs.eventQueue('kb.author.count',current,author,author_ka_count);
			gs.info('getOldKAs: '+ author +' has '+ author_ka_count +' Knowledge Articles that will expire '+ activeDays);
		}//end of outer for
	}
	catch(ex) {
		var errMsg = ex.getMessage();
		gs.info('getOldKAs Exception Message['+ errMsg + ']');
	}
},//end of function

    type: 'GetExpiringKAs'
};
