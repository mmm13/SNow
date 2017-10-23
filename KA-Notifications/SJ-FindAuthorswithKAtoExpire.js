function getOldKAs(numDays) {
	try {
		//var activeDays = gs.daysAgoStart(-numDays);
		var count = new GetExpiringKAs();
		gs.info("calling GetExpiringKAs.getArticleCount with : "+ numDays);
		count.getArticleCount(numDays);
	}
	catch(ex) {
		var errMsg = ex.getMessage();
		gs.error('FindAuthors with KA to expire  Exception Message['+ errMsg + ']');
	}
}//end of function
getOldKAs(1);
