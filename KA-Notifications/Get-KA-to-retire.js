var fourteenDays = gs.daysAgoStart(-14);
var articleCounter = 0;

var gr = new GlideRecord('kb_knowledge');
// only get published articles
 gr.addQuery('workflow_state', 'Published');
 // get requests whose due date is less than or equal to 14 days from now
 // may need to be exactly 14 days if script runs daily
 gr.addQuery('valid_to', '<=', fourteenDays);
 gr.query();
 gs.print('Count is:'+gr.getRowCount());
 var owned_by_groups=[];
 while (gr.next()) {
  // want count by u_article_owner and send 1 notifcation
  //  Group -- you have X knowledge articles that will expire in 14 days
       var key = gr.u_article_owner.name.trim();
         if (key){
           owned_by_groups.push(key);
             }
               articleCounter++;
               }
               gs.print('MMMc: ' + articleCounter);
               gs.print('MMMc arrlen: ' + owned_by_groups.length);
               var arrayUtil = new ArrayUtil();
               owned_by_gropus=arrayUtil.unique(owned_by_groups);
               gs.print('MMMc arrlen2: ' + owned_by_groups.length);
               for (var i=0; i < owned_by_groups.length; i++){
                 gs.print(owned_by_groups[i]);
                 }
