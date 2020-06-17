(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),s=a.n(c),r=(a(13),a(5)),i=a(1),d=a(2),m=a(4),o=a(3),u=(a(14),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).minDate=(new Date).toISOString().slice(0,10),e.state={text:"",checked:!1,date:e.minDate,msg:""},e.handleText=function(t){e.setState({text:t.target.value})},e.handleCheckbox=function(t){e.setState({checked:t.target.checked})},e.handleDate=function(t){e.setState({date:t.target.value})},e.handleClick=function(){var t=e.state,a=t.text,n=t.date,l=t.checked;a.length>2?e.props.add(a,n,l)&&e.setState({text:"",checked:!1,date:e.minDate,msg:""}):e.setState({msg:"Text must have more than 3 chars."})},e}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"text",placeholder:"Task to do",value:this.state.text,onChange:this.handleText}),l.a.createElement("label",{htmlFor:"important"},l.a.createElement("input",{id:"important",type:"checkbox",checked:this.state.checked,onChange:this.handleCheckbox}),"Priority"),l.a.createElement("br",null),l.a.createElement("span",{className:"validation"},this.state.msg),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"date"},l.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,onChange:this.handleDate}),"Perform to"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"addTaskButton",onClick:this.handleClick},l.a.createElement("i",{className:"fas fa-plus"})," Add task"))}}]),a}(n.Component)),E=function(e){var t={imp:{fontWeight:"bold",borderRight:"1px dotted rgba(240, 168, 86, .5)"},td:{borderRight:"1px dotted rgba(240, 168, 86, .5)"}},a=e.task,n=a.text,c=a.date,s=a.id,r=a.active,i=a.important,d=a.finishDate,m=a.deleted;if(r&&!m){var o=(new Date).toISOString().slice(0,10),u=new Date(o).toISOString().slice(0,10);return l.a.createElement("tr",null,l.a.createElement("td",{style:t.td},i?"imp.":null),l.a.createElement("td",{style:i?t.imp:t.td},n),l.a.createElement("td",{style:t.td},c),l.a.createElement("td",{style:t.td},u),l.a.createElement("td",null,l.a.createElement("button",{className:"actions actionDone",onClick:function(){return e.change(s)}},l.a.createElement("i",{className:"fas fa-check-square"})),l.a.createElement("button",{className:"actions actionDelete",onClick:function(){return e.delete(s)}},l.a.createElement("i",{className:"fas fa-trash"}))))}if(!r&&!m){var E=(new Date).toISOString().slice(0,10),h=new Date(d).toISOString().slice(0,10);return l.a.createElement("tr",null,l.a.createElement("td",{style:t.td},i?"imp.":null),l.a.createElement("td",{style:i?t.imp:t.td},n),l.a.createElement("td",{style:t.td},E),l.a.createElement("td",{style:t.td},h),l.a.createElement("td",null,l.a.createElement("button",{className:"actions actionDelete",onClick:function(){return e.delete(s)}},l.a.createElement("i",{className:"fas fa-trash"}))))}if(i&&!m){var k=(new Date).toISOString().slice(0,10);return l.a.createElement("tr",null,l.a.createElement("td",{style:t.td},i?"imp.":null),l.a.createElement("td",{style:i?t.imp:t.td},n),l.a.createElement("td",{style:t.td},c),l.a.createElement("td",{style:t.td},k),l.a.createElement("td",null,l.a.createElement("button",{className:"actions actionDone",onClick:function(){return e.change(s)}},l.a.createElement("i",{className:"fas fa-check-square"})),l.a.createElement("button",{className:"actions actionDelete",onClick:function(){return e.delete(s)}},l.a.createElement("i",{className:"fas fa-trash"}))))}if(m&&r||m&&!r||m&&!r&&i||m&&r&&i){var f=(new Date).toISOString().slice(0,10),g=new Date(d).toISOString().slice(0,10);return l.a.createElement("tr",null,l.a.createElement("td",{style:t.td},i?"imp.":null),l.a.createElement("td",{style:i?t.imp:t.td},n),l.a.createElement("td",{style:t.td},f),l.a.createElement("td",{style:t.td},g),l.a.createElement("td",null,"None"))}},h=(a(15),function(e){var t=e.tasks.filter((function(e){return e.active})).map((function(t){return l.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})})),a=e.tasks.filter((function(e){return!e.active})).map((function(t){return l.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})})),n=e.tasks.filter((function(e){return e.important})).map((function(t){return l.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})})),c=e.trash.map((function(t){return l.a.createElement(E,{key:t.id,task:t,delete:e.delete,change:e.change})})),s=e.show;return 1===s?l.a.createElement("div",{className:"taskListContainer"},l.a.createElement("p",null,"Active tasks: ",t.length),l.a.createElement("table",{className:"tasksTable"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"titleRow"},l.a.createElement("td",null,"!"),l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"End date"),l.a.createElement("td",null,"Added"),l.a.createElement("td",null,"Actions")),t))):2===s?l.a.createElement("div",{className:"taskListContainer"},l.a.createElement("p",null,"Done tasks: ",a.length),l.a.createElement("table",{className:"tasksTable"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"titleRow"},l.a.createElement("td",null,"!"),l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"Added"),l.a.createElement("td",null,"Finished"),l.a.createElement("td",null,"Actions")),a))):3===s?l.a.createElement("div",{className:"taskListContainer"},l.a.createElement("p",null,"Deleted tasks: ",c.length),l.a.createElement("table",{className:"tasksTable"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"titleRow"},l.a.createElement("td",null,"!"),l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"Added"),l.a.createElement("td",null,"Deleted"),l.a.createElement("td",null,"Actions")),c))):4===s?l.a.createElement("div",{className:"taskListContainer"},l.a.createElement("p",null,"Important tasks: ",n.length),l.a.createElement("table",{className:"tasksTable"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"titleRow"},l.a.createElement("td",null,"!"),l.a.createElement("td",null,"Task"),l.a.createElement("td",null,"End date"),l.a.createElement("td",null,"Added"),l.a.createElement("td",null,"Actions")),n))):void 0}),k=(a(16),function(e){var t=e.todo,a=e.del,n=e.done,c=e.important;return l.a.createElement("div",{className:"cat"},l.a.createElement("button",{className:"categoryButton",onClick:t},l.a.createElement("i",{className:"fas fa-tasks"})," Tasks to do"),l.a.createElement("button",{className:"categoryButton",onClick:n},l.a.createElement("i",{className:"fas fa-check-square"})," Done tasks"),l.a.createElement("button",{className:"categoryButton",onClick:a},l.a.createElement("i",{className:"far fa-trash-alt"})," Deleted tasks"),l.a.createElement("button",{className:"categoryButton",onClick:c},l.a.createElement("i",{className:"fas fa-exclamation"})," Important tasks"))}),f=(a(17),function(){return l.a.createElement("div",null,"\xa9 marcin p. / 2020")}),g=(a(18),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).deletedTasksTable=[],e.state={tasks:[],selectedCategory:1},e.addTask=function(t,a,n){var l=e.state.tasks.length+e.deletedTasksTable.length,c={id:l,text:t,date:a,important:n,active:!0,finishDate:null,deleted:!1};return l++,e.setState((function(e){return{tasks:[].concat(Object(r.a)(e.tasks),[c])}})),!0},e.deleteTask=function(t){var a=Object(r.a)(e.state.tasks),n=a.findIndex((function(e){return e.id===t}));e.deletedTasksTable.push(a[n]),e.deletedTasksTable[e.deletedTasksTable.length-1].finishDate=(new Date).getTime(),e.deletedTasksTable[e.deletedTasksTable.length-1].deleted=!0,a.splice(n,1),e.setState({tasks:a})},e.changeTaskStatus=function(t){var a=Object(r.a)(e.state.tasks);a.forEach((function(e){e.id===t&&(e.active=!1,e.finishDate=(new Date).getTime())})),e.setState({tasks:a})},e.catToDo=function(){e.setState({selectedCategory:1})},e.catDone=function(){e.setState({selectedCategory:2})},e.catDel=function(){e.setState({selectedCategory:3})},e.catImportant=function(){e.setState({selectedCategory:4})},e}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("section",{className:"tasksContainer"},l.a.createElement("div",{className:"category"},l.a.createElement(k,{todo:this.catToDo,done:this.catDone,del:this.catDel,important:this.catImportant})),1===this.state.selectedCategory?l.a.createElement("div",{className:"addTask"},l.a.createElement(u,{add:this.addTask})):null,l.a.createElement("div",{className:"taskList",style:1===this.state.selectedCategory?null:{flexBasis:"89vh"}},l.a.createElement(h,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus,trash:this.deletedTasksTable,show:this.state.selectedCategory})),l.a.createElement("footer",{className:"footer"},l.a.createElement(f,null))))}}]),a}(n.Component));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7bae5df6.chunk.js.map