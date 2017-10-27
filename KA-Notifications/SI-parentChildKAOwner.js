var parentChildKAOwner = Class.create();
parentChildKAOwner.prototype = {
	initialize: function() {
	},
	ownerGroups: function(number){
		try{
			var gr = new GlideRecord('kb_knowledge');
			gr. addQuery('number',number);
			gr.query();
			gs.info('row count: '+ gr.getRowCount());
			var parent_to_KA;
			while (gr.next()) {
				parent_to_KA = gr.parent.short_description;
			}//while
			if (parent_to_KA) {
				gs.info('Parent to '+ number +' : '+ parent_to_KA);
				var gr_owners = new GlideRecord('kb_knowledge');
				gr_owners.addQuery('parent.short_description',parent_to_KA);
				gr_owners.query();
				gs.info('Parent count : '+ gr_owners.getRowCount() );
				var owner_group=[];
				while (gr_owners.next()) {
					var key = gr_owners.u_article_owner.name.trim();
					if (key) {
						owner_group.push(key);
					}
				}//while
				var unique_owner_group = new ArrayUtil().unique(owner_group);
				gs.info('groups : '+ unique_owner_group.length);
				for (var i=0; i < unique_owner_group.length; i++){
					gs.info(unique_owner_group[i]);
				}
			}else
			{gs.info ('No parent found for : '+ number);}
		}//try
		catch(ex) {
			var errMsg = ex.getMessage();
			gs.info('parentChildKAOwner.ownerGroups :  Exception Message['+ errMsg + ']');
		}
	},

	type: 'parentChildKAOwner'
};
