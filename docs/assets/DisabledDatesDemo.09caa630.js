import{I as n}from"./vue3-date-time-picker.esm.8cb886c4.js";import{u as c,r as p,o as m,c as l,b as i}from"./app.11732b8b.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const D={components:{Datepicker:n},data(){return{date:new Date,dark:!0}},computed:{disabledDates(){const o=new Date,e=new Date(o);e.setDate(e.getDate()+1);const t=new Date(e);return t.setDate(e.getDate()+1),[e,t]}},mounted(){this.dark=c()}},k={class:"demo-wrap"};function _(o,e,t,b,a,r){const s=p("Datepicker");return m(),l("div",k,[i(s,{modelValue:a.date,"onUpdate:modelValue":e[0]||(e[0]=d=>a.date=d),dark:a.dark,"disabled-dates":r.disabledDates},null,8,["modelValue","dark","disabled-dates"])])}var x=u(D,[["render",_]]);export{x as default};
