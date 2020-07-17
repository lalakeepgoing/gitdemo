//读取本地存储数据
function getDate(){
    var data=localStorage.getItem("todo")
    if(data != null){
        return JSON.parse(data)
    }else{
        return[]
    
  }
}


//保存本地存储数据
function saveDate(data){
   localStorage.setItem("todo",JSON.stringify(data));
}
//渲染页面 加载数据
function load(){
   //读取本地存储的数据
   var data=getDate();
   //先清空ol,ul里的li
   $("#todoList,#doneList").empty(); 
   //正在进行的个数
   var todoCount=0;
   //完成的个数
   var doneCount=0;
   //遍历数据 i索引号 n 为value
   $.each(data,function(i,n){
       if(n.done){
        $("#doneList").prepend("<li><img src='./logimg/done.png' class='buttonImg'></label><input type='text' id='liPut' name='title'  value="+n.title+" required='required' autocomplete='off' contentEditable='false'/> <a href='javascript:;' id="+i+"><img src='./logimg/delete.png' class='deleteImg'></a></li>");
       doneCount++; }else{
        //在ol中插入li
        $("#todoList").prepend("<li><img src='./logimg/circle.png'class='buttonImg'></label><input type='text' id='liPut' name='title'  value="+n.title+" required='required' autocomplete='off' contentEditable='false'/> <a href='javascript:;' id="+i+"><img src='./logimg/delete.png' class='deleteImg'></a></li>");
       todoCount++;}
    })
    $("#todoCount").text(todoCount);
    $("#doneCount").text(doneCount);

}
