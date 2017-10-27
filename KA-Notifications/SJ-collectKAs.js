function collectKAs(numDays) {
	try {
		var maxKAUpdates = 25;
		var gr = new GlideRecord('kb_knowledge');
		gr.addQuery('State','Published');
		gr.addQuery('sys_updated_on', '>=', gs.daysAgoStart(numDays));
		gr.query();
		gs.info('rows returned : '+ gr.getRowCount());
		if (gr.getRowCount() > maxKAUpdates) {
			gs.info('More than '+ maxKAUpdates +' articles updated yesterday : '+ gr.getRowCount());
		} else {
			while (gr.next()){
				var ka_number = gr.number.trim();
				var ka_owner = new parentChildKAOwner();
				gs.info('calling parentChildKAOwner.ownerGroups with : '+ ka_number);
				ka_owner.ownerGroups(ka_number);
			}//end of query next while
		}// end of else
	} // try
	catch(ex) {
		var errMsg = ex.getMessage();
		gs.error('Collect owners of KAs updated yesterday:  ExMsg['+ errMsg + ']');
	}//catch
}//function
collectKAs(8);
