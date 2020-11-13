/*
 * @Author: Baron
 * @Date: 2020-07-19 16:15:07
 * @LastEditTime: 2020-07-20 12:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\3. JQuery         网页开发案例精讲\JQuery 03\13-todolist\js\todolistA.js
 */

$(function () {
    load()
  $("#title").on("keydown", function (event) {
    if (event.keyCode === 13) {
     if($(this).val() === ""){
        alert("请输入您的操作")
     }else {
        let local = getDate();
        local.push({ title: $(this).val(), done: false });
        saveDate(local)
        load()
        $(this).val("")
     }
    }
  });

  function getDate() {
    var data = localStorage.getItem("todolist");
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  function saveDate(data){
      localStorage.setItem("todolist",JSON.stringify(data))
  }

  $("ol,ul").on("click","input",function(){
      var data = getDate()
      var index = $(this).siblings('a').prop("id")
      data[index].done = $(this).prop("checked")
      saveDate(data)
      load()

  })

  $("ol,ul").on("click","a",function(){
      let data = getDate()
      let index = $(this).prop("id")
      data.splice(index,1)
      saveDate(data)
      load()
  })

  function load(){
      var todoCount = 0
      var doneCount = 0
      let data = getDate()
      console.log(data)
      $("ol,ul").empty()
      $.each(data ,function(index,n){
          if(n.done){
              doneCount++
              console.log(doneCount)
          let li = $(`<li><input type="checkbox" checked="checked"/> <p>${n.title}</p> <a href='javascript:;' id='${index}'/></li>`)
          $("ul").prepend(li)
          }else{
              todoCount++
              console.log(todoCount)
              let li = $(`<li><input type="checkbox"/> <p>${n.title}</p> <a href='javascript:;' id='${index}'/></li>`)
              $("ol").prepend(li)
          }
          $("#todocount").text(todoCount)
          $("#donecount").text(doneCount)
      })
  }
});
