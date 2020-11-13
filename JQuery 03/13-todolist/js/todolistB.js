/*
 * @Author: Baron
 * @Date: 2020-07-20 11:59:00
 * @LastEditTime: 2020-07-20 13:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\3. JQuery         网页开发案例精讲\JQuery 03\13-todolist\js\todolistB.js
 */

$(function () {
  load();
  $("#title").on("keydown", function (event) {
    if (event.keyCode === 13) {
      if ($(this).val() === "") {
        alert("请输入您的操作");
      } else {
        let local = getDate();
        //console.log(local)
        local.push({
          title: $(this).val(),
          done: false,
        });
        saveDate(local);
        load();
        $(this).val("");
      }
    }
  });

  $("ol,ul").on("click", "a", function () {
    let data = getDate();
    let index = $(this).prop("id");
    data.splice(index, 1);
    saveDate(data);
    load();
  });

  $("ol,ul").on("click", "input", function () {
    let data = getDate();
    let index = $(this).siblings("a").prop("id");
    data[index].done = $(this).prop("checked");
    saveDate(data);
    load();
  });

  function load() {
    let data = getDate();
    let doneCount = 0;
    let todoCount = 0;
    $("ol,ul").empty();
    $.each(data, function (index, n) {
      if (n.done) {
        doneCount++;
        let li = `<li><input type="checkbox" checked="true"/><p>${n.title}</p><a href="javascript:;" id="${index}"></li>`;
        $("ul").prepend(li);
      } else {
        todoCount++;
        let li = `<li><input type="checkbox"/><p>${n.title}</p><a href="javascript:;" id="${index}"></li>`;
        $("ol").prepend(li);
      }
      $("#donecount").text(doneCount);
      $("#todocount").text(todoCount);
    });
  }

  function saveDate(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
  }

  function getDate() {
    let data = localStorage.getItem("todolist");
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
});
