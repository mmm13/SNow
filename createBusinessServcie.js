function createBusinessService() {
	// First check for dups
	var isThereDuplicate = new GlideRecord('cmdb_ci_service');
	isThereDuplicate.addQuery('name', current.variables.name + '');
	isThereDuplicate.query();

	if (isThereDuplicate.next()) {
		current.comments = 'This Business Service already exists.';
		return;
	}

	var newBusService = new GlideRecord('cmdb_ci_service');
	newBusService.managed_by = current.variables.caller_id + '';
	newBusService.name = current.variables.name + '';
	newBusService.short_description = current.variables.description + '';
	newBusService.used_for = current.variables.used_for + '';
	newBusService.operational_status = current.variables.operational_status + '';
	var newID = newBusService.insert();

	if (!newID) {
		current.comments = 'There was an error while trying to insert the new Business Service, please contact the System Administrator.';
	} else {
		current.comments = 'Business Service created: Sys ID: ' + newID;
	}

}
