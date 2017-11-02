//If KA has other articles attached
//  Send notification to owner of parent and/or child KAs when the KA is updated
//do not spam if owner of all of the attached articles is 1 group then only 1 notification is sent
// Should the notification be sent for every update?
// ex:  working on the change to KA every time a field is updated
//
// is there a state when article is being edited?

article THIS has been updated
search kb_knowledge for all articles where THIS is parent
  get owners
get owner for THIS parent
get unique article owners
send notification that THIS has been updated


-----------
business rule -> script include-> event -> notification
or
business rule -> notification

****Daily script that checks for updated KAs might be best so a notification isn't sent
every time there's an update to the KA during the edit.  
