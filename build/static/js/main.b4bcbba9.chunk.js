(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),l=(a(16),a(1)),c=a(2),r=a(4),u=a(3),h=a(5),d=(a(17),a(18),a(19),a(20),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(n.Component)),m=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title"},this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}}]),t}(n.Component)),p=(a(22),a(9)),b=a(6),g=a.n(b);g.a.init({appId:"z5kYOKNdDW7zKVc8N92lfOw7-gzGzoHsz",appKey:"r5P1kesCadRcUsjGBOXL8pXe"});g.a;function f(e,t,a,n){var s=new g.a.User;s.setUsername(e),s.setPassword(t),s.signUp().then(function(e){var t,n=(t=e,Object(p.a)({id:t.id},t.attributes));a.call(null,n)},function(e){n.call(null,e)})}var v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp",formData:{username:"",password:""}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var a=this.state.formData;f(a.username,a.password,function(e){t.props.onSignUp.call(null,e)},function(e){console.log(e)})}},{key:"signIn",value:function(e){}},{key:"changeFormData",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state));a.formData[e]=t.target.value,this.setState(a)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},s.a.createElement("nav",{onChange:this.switch.bind(this)},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected})," \u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected})," \u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?e:null,"signIn"===this.state.selected?t:null)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={user:{},newTodo:"test",todoList:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,a){return s.a.createElement("li",{key:"index"},s.a.createElement(m,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e"),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(d,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),s.a.createElement(v,{onSignUp:this.onSignUp.bind(this)}))}},{key:"onSignUp",value:function(e){this.state.user=e,this.setState(this.state)}},{key:"componentDidUpdate",value:function(){}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"addTodo",value:function(e){this.state.todoList.push({id:w(),title:e.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}}]),t}(n.Component),y=0;function w(){return y+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.b4bcbba9.chunk.js.map