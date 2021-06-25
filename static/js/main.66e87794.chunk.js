(this["webpackJsonpgoit-react-hw-03-phoneboook"]=this["webpackJsonpgoit-react-hw-03-phoneboook"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"Contact_button__oQbmj",list:"Contact_list__1LCCB"}},26:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n(7),o=n.n(r),i=n(3),s=n(6),u=n(4),l=n(8),b=n(9),j=n(12),m=n(11),d=n(5),h=Object(d.a)("contact/add"),f=Object(d.a)("contact/remove"),O=Object(d.a)("contact/filter"),p=n(28),v=n(1),C=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(p.a)(),name:a,number:c};t.props.addNewContact(r),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{children:["Name:",Object(v.jsx)("input",{type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name...",onChange:this.handleChange})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("label",{children:["Number:",Object(v.jsx)("input",{type:"tell",value:n,name:"number",placeholder:"Number...",onChange:this.handleChange})]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",disabled:!e.length||!n.length,children:"Add contact"})]})}}]),n}(c.Component),g={addNewContact:h},x=Object(i.b)((function(t,e){return{}}),g)(C),y=n(10),S=n.n(y),w=function(t){var e=t.name,n=t.number,a=t.onRemove;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("li",{children:[e," : ",n]}),Object(v.jsx)("button",{className:S.a.button,type:"button",onClick:a,children:"Delete"})]})},N={removeContact:f},k=function(t){var e=t.contacts,n=t.filter;if(e.length)return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},A=Object(i.b)((function(t,e){return{contacts:k(t)}}),N)((function(t){var e=t.contacts,n=t.removeContact;return Object(v.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(v.jsx)(w,{name:a,number:c,onRemove:function(){return n(e)}},e)}))})})),L={onChange:function(t){return O(t.target.value)}},_=Object(i.b)((function(t,e){return{filter:t.filter}}),L)((function(t){var e=t.onChange,n=t.filter;return Object(v.jsxs)(v.Fragment,{children:["Find contacts by name:",Object(v.jsx)("input",{placeholder:"Search...",value:n,type:"text",name:"filter",onChange:e})]})})),D=function(t){var e=t.title,n=t.children;return Object(v.jsxs)("section",{children:[Object(v.jsx)("h2",{children:e}),n]})},F=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.removeContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(s.a)(n)})},t.addContact=function(e){var n=e.name,a=t.state.contacts.map((function(t){return t.name.toLowerCase()}));console.log(a),a.includes(n.toLowerCase())?alert("".concat(n," is already in contact list")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.getVisibleContacts=function(){var e=t.props,n=e.contacts,a=e.filter;if(n.length)return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.props.contacts;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D,{title:"Phonebook",children:Object(v.jsx)(x,{})}),Object(v.jsxs)(D,{title:"Contacts",children:[t.length>1&&Object(v.jsx)(_,{onChange:this.handleChange}),t.length?Object(v.jsx)(A,{}):Object(v.jsx)("p",{children:"There are no contacts here"})]})]})}}]),n}(c.Component),J={addNewContact:h,removeContact:f},R=Object(i.b)((function(t,e){return{contacts:t.contacts,filter:t.filter}}),J)(F),z=n(2),I=n(16),Z=Object(d.b)([],(a={},Object(u.a)(a,h,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(u.a)(a,f,(function(t,e){var n=e.payload;return Object(s.a)(t.filter((function(t){return t.id!==n})))})),a)),B=Object(d.b)("",Object(u.a)({},O,(function(t,e){return e.payload}))),E=Object(z.combineReducers)({contacts:Z,filter:B}),T=Object(z.createStore)(E,Object(I.composeWithDevTools)());o.a.render(Object(v.jsx)(i.a,{store:T,children:Object(v.jsx)(R,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.66e87794.chunk.js.map