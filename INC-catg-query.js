var check= new GlideRecord('incident');
check.addQuery('active', true);
check.query();
gs.print('Count is :'+check.getRowCount());
var arr= [];
while(check.next()) {
    var key = check.category.trim();
    arr.push(key);
}
var arrayUtil = new ArrayUtil();
arr= arrayUtil.unique(arr);
  //gs.print(arr.length);
  for (var i = 0; i < arr.length; i++)  {
    gs.print(arr[i]);
}
