var parentChildKAOwner = Class.create();
parentChildKAOwner.prototype = {
	initialize: function() {
	},
	ownerGroups: function(ka_number){
		try{
			var owner_group=[];
			var key;
			var gr = new GlideRecord('kb_knowledge');
			gr.addQuery('number',ka_number);
			gr.addQuery('State','Published');
			gr.query();
			while (gr.next()) {
				key = gr.parent.u_article_owner.name.trim();
				if (key) {
					owner_group.push(key);
				}
				else {gs.info('parentChildKAOwner.ownerGroups: No parent found for : '+ ka_number);}
					parent = gr.short_description;
				}//while
			gs.info(parent);
			if (parent) {
				//find children KAs
				var gr_child = new GlideRecord('kb_knowledge');
				gr_child. addQuery('parent.short_description',parent);
				gr.addQuery('State','Published');
				gr_child.query();
				gs.info('row count: '+ gr_child.getRowCount());
				while (gr_child.next()) {
					key = gr_child.u_article_owner.name.trim();
					if (key) {
						owner_group.push(key);
					}else{
						gs.info('No Owned by Group for '+ gr_child.number);
					}
				}//while
	gs.info('groups : '+ owner_group.length);
				var unique_owner_group = new ArrayUtil().unique(owner_group);

	gs.info('groups : '+ unique_owner_group.length);
				for (var i=0; i < unique_owner_group.length; i++){
					gs.info(unique_owner_group[i]);
					gs.eventQueue('ka.changed',gr,unique_owner_group[i],ka_number);
				}
			}else {
				gs.info ('short description not found for '+ ka_number);
			}
		}//try
		catch(ex) {
			var errMsg = ex.getMessage();
			gs.info('parentChildKAOwner.ownerGroups :  Exception Message['+ errMsg + ']');
		}
	},

	type: 'parentChildKAOwner'
};
