import{I as d}from"./vue3-date-time-picker.esm.8cb886c4.js";import{u as l,r as p,o as m,c as u,b as i}from"./app.11732b8b.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const k={components:{Datepicker:d},props:["placeholder"],data(){return{date:new Date,dark:!0}},methods:{format(e){const o=e.getDate(),t=e.getMonth()+1,a=e.getFullYear();return`Selected date is ${o}/${t}/${a}`}},mounted(){this.dark=l()}},_={class:"demo-wrap"};function h(e,o,t,a,r,s){const c=p("Datepicker");return m(),u("div",_,[i(c,{modelValue:r.date,"onUpdate:modelValue":o[0]||(o[0]=n=>r.date=n),placeholder:t.placeholder,format:s.format,dark:r.dark},null,8,["modelValue","placeholder","format","dark"])])}var g=f(k,[["render",h]]);export{g as default};
