The Scheduled Job runs the Script Include with the number of days
which create the event kb.author.count
A notification happens when the event is fired using email scripts:
  author_from_email & CountKAtoExpire

  The notification has parm1 contains recepient CHECKED

  current notification contents (10/20)
  *********************
  ${mail_script:author_from_email},



 ${mail_script:CounttoExpire}



count :  ${event.parm2}



Look HERE to see them.

  *********************

Event Registration:
event name : kb.author.count
table:  kb_knowledge
application: Global
Fired by : scheduled job
description:  fires when ka is about to expire

*********************

 The scheduled job script is prefaced with SJ-
 The script includes are prefaced with SI-
 The email scripts are prefaced with ES-
