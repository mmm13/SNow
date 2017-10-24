//If KA has other articles attached
//  Send notification to owner of parent and/or child KAs when TheKA is updated
//do not spam if owner of all of the attached articles is 1 group then only 1 notification is sent

article THIS has been updated
search kb_knowledge for all articles where THIS is parent
  get owners
get owner for THIS parent
get unique article owners
send notification that THIS has been updated
