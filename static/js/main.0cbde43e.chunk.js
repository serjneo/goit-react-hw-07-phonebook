(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=n(4),i=n(18),u=n(12),l=n(1),d=n(17),j=n(5),b=Object(d.a)({reducerPath:"contactApi",baseQuery:Object(j.d)({baseUrl:"https://619f9ec91ac52a0017ba496f.mockapi.io/api/v1"}),tagTypes:["Contact"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]})}}}),h=b.useFetchContactsQuery,m=b.useDeleteContactMutation,p=b.useCreateContactMutation,f=Object(l.a)({reducer:Object(u.a)({},b.reducerPath,b.reducer),middleware:function(e){return[].concat(Object(i.a)(e()),[b.middleware])}}),O=n(9),x=n(2),C=function(e){var t=e.children;return Object(x.jsx)("div",{className:"container",children:t})},v=n(15);n(31);var g=function(){var e=h().data,t=p(),n=Object(O.a)(t,1)[0];return Object(x.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var a=t.currentTarget.name.value,c=t.currentTarget.phone.value,r={name:a,phone:c};!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(a)?!function(t){return e.find((function(e){return e.phone===t}))}(c)?t.currentTarget.reset():v.a.info("\ud83e\udd14 ".concat(c," is already in use"),{autoClose:2500}):v.a.info("'".concat(a,"' is already in use!"),{autoClose:2500}),n(r),t.currentTarget.reset()},children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("p",{className:"title",children:"Name:"}),Object(x.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("p",{className:"title",children:"Phone:"}),Object(x.jsx)("input",{className:"input",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})};n(32);var y=function(e){var t=e.value,n=e.onChange;return Object(x.jsx)("input",{className:"input",type:"text",name:"filter",onChange:n,value:t,placeholder:"search contact"})};n(33);var N=function(e){var t=e.contacts,n=m(),a=Object(O.a)(n,1)[0];return Object(x.jsx)("ul",{className:"list",children:t.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsxs)("p",{className:"title",children:["Name: ",e.name]}),Object(x.jsxs)("p",{className:"title",children:["Number: ",e.phone]}),Object(x.jsx)("button",{className:"button",onClick:function(){return a(e.id)},type:"button",children:"Delete"})]},e.id)}))})};var T=function(){var e=h().data,t=Object(a.useState)(""),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(x.jsxs)(C,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(g,{contacts:e}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(y,{value:c,onChange:function(e){r(e.currentTarget.value)}}),e&&Object(x.jsx)(N,{contacts:e.filter((function(e){return e.name.toLowerCase().includes(c.trim().toLowerCase())}))})]})};n(34),n(35);o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(s.a,{store:f,children:Object(x.jsx)(T,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0cbde43e.chunk.js.map