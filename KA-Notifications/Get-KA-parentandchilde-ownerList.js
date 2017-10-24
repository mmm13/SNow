var gr = new GlideRecord('kb_knowledge');
gr. addQuery('number','KB0067023');
gr.query();
gs.info('row count: '+ gr.getRowCount());
while (gr.next()) {
var parent_to_KA = gr.parent.short_description;
var KA_short_description = gr.short_description.trim();
gs.info('Parent to KB0067023 : '+ parent_to_KA);
gs.info('KB0067023 sd : '+ KA_short_description);
}

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
}
var unique_owner_group = new ArrayUtil().unique(owner_group);
gs.info('groups : '+ unique_owner_group.length);
for (var i=0; i < unique_owner_group.length; i++){
gs.info(unique_owner_group[i]);
}
