"use strict";(self.webpackChunkpetly=self.webpackChunkpetly||[]).push([[600],{2642:function(n,e,i){i.d(e,{Y:function(){return r},g:function(){return a}});var t=i(2797),r=t.Ry().shape({userName:t.Z_().min(2,"Too Short! Minimum 2 letters").max(32,"Too Long! Maximum 32 letters").matches(/^.*[a-zA-Z]+.*$/,"only letters please").required("Required"),email:t.Z_().email("Invalid email").matches(/^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,"Invalid email").min(10,"Email is too short, must be 10 chars min!").max(63,"Email is too long, must be 63 chars max!").required("Required"),password:t.Z_().required("No password provided.").min(7,"Password is too short - should be 7 chars minimum.").max(32,"Too Long!"),city:t.Z_().min(2,"Too Short!").max(14,"Too Long!").matches(/^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/,"only letters").required("Required"),phone:t.Z_().max(15,"Too Long!").matches(/^\+380[0-9]{9}$/,'The phone contains only numbers and starts with "+380"').required("Required")}),a=t.Ry().shape({email:t.Z_().email("Invalid email").required("Required"),password:t.Z_().required("No password provided.").min(7,"Password is too short - should be 7 chars minimum.").max(32,"Too Long! 32 chars max")})},600:function(n,e,i){i.r(e),i.d(e,{default:function(){return f}});var t=i(5861),r=i(7757),a=i.n(r),o=i(2691),d=i(3329),s=function(n){var e=n.handleSubmit,i=n.handleBlur,t=n.handleChange,r=n.values,a=n.touched,s=n.errors;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(o.Bt,{onSubmit:e,children:[(0,d.jsxs)(o.xu,{children:[(0,d.jsxs)(o.__,{children:[(0,d.jsx)(o.II,{name:"email",onChange:t,onBlur:i,value:r.email,type:"email",placeholder:"Email"}),a.email&&s.email&&(0,d.jsx)(o.jj,{children:s.email})]}),(0,d.jsxs)(o.__,{children:[(0,d.jsx)(o.II,{onChange:t,onBlur:i,value:r.password,name:"password",type:"password",placeholder:"Password"}),a.password&&s.password&&(0,d.jsx)(o.jj,{children:s.password})]})]}),(0,d.jsx)(o.$m,{type:"submit",style:{marginBottom:"0px"},children:"Login"})]})})},p=i(2642),u=i(5705),h=i(9434),m=i(1087),x=i(7689),c=i(9273),l=i(4217),g=i(643),f=function(){var n=(0,x.s0)(),e=(0,h.v9)(l.Ms),i=(0,h.I0)(),r=function(){var e=(0,t.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i((0,c.m3)(t)).then((function(e){return!e.error&&n("/user")}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)(g.W,{children:[(0,d.jsx)(o.bh,{children:(0,d.jsxs)(o.IE,{children:[(0,d.jsx)(o.x2,{children:"Login"}),(0,d.jsx)(u.J9,{initialValues:{email:"",password:""},validationSchema:p.g,onSubmit:r,children:function(n){var e=n.touched,i=n.errors,t=n.values,r=n.handleChange,a=n.handleBlur,o=n.handleSubmit;return(0,d.jsx)(s,{handleSubmit:o,handleBlur:a,handleChange:r,values:t,touched:e,errors:i})}}),!!e&&(0,d.jsx)("p",{style:{marginTop:"25px",color:"red"},children:"Email or password is wrong"}),(0,d.jsxs)(o.oJ,{children:["Don't have an account?",(0,d.jsx)(m.NavLink,{style:o.p4,to:"/register",children:"Register"})]})]})}),(0,d.jsx)(o.UI,{})]})}},2691:function(n,e,i){i.d(e,{$m:function(){return q},Bt:function(){return _},IE:function(){return P},II:function(){return L},UI:function(){return T},Z9:function(){return R},__:function(){return B},bh:function(){return I},jj:function(){return k},oJ:function(){return y},p4:function(){return Z},qH:function(){return S},x2:function(){return j},xu:function(){return z}});var t,r,a,o,d,s,p,u,h,m,x,c,l,g=i(168),f=i(6444),w=i(8186),b=i(9669),v=i(799),Z={textDecoration:"underline",color:"#3091EB",marginLeft:"3px"},j=f.ZP.h2(t||(t=(0,g.Z)(["\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 320px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 33px;\n  }\n\n  @media screen and (min-width: 767px) {\n    padding-top: 60px;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n  }\n"]))),y=f.ZP.h3(r||(r=(0,g.Z)(["\n  color: rgba(17, 17, 17, 0.6);\n  margin-top: 40px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.04em;\n\n  @media screen and (min-width: 767px) {\n    padding-bottom: 60px;\n  }\n"]))),k=f.ZP.h3(a||(a=(0,g.Z)(["\n  margin-top: -16px;\n  color: red;\n\n  @media screen and (min-width: 320px) {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n  @media screen and (min-width: 767px) {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),z=f.ZP.div(o||(o=(0,g.Z)(["\n  margin-bottom: 40px;\n"]))),P=f.ZP.div(d||(d=(0,g.Z)(["\n  position: relative;\n  z-index: 1;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 320px) {\n  }\n  @media screen and (min-width: 767px) {\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 40px;\n    width: 608px;\n  }\n  @media screen and (min-width: 1279px) {\n    width: 618px;\n  }\n"]))),I=f.ZP.div(s||(s=(0,g.Z)(["\n  z-index: 5;\n  @media screen and (min-width: 320px) {\n    margin-top: 42px;\n  }\n  @media screen and (min-width: 767px) {\n    padding-top: 204px;\n  }\n  @media screen and (min-width: 1279px) {\n    padding-top: 80px;\n  }\n\n  justify-content: center;\n  display: flex;\n"]))),q=f.ZP.button(p||(p=(0,g.Z)(["\n  border: ",";\n  color: ",";\n  background-color: ",";\n  border-radius: 40px;\n  justify-content: center;\n  align-items: center;\n  transition: var(--transition);\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    border: 2px solid var(--active);\n    cursor: pointer;\n  }\n\n  @media screen and (min-width: 320px) {\n    width: 280px;\n    height: 44px;\n  }\n  @media screen and (min-width: 767px) {\n    font-weight: 500;\n    font-size: 2;\n    line-height: 27px;\n\n    width: 458px;\n    height: 48px;\n  }\n"])),(function(n){return n.next?"2px solid var(--active)":"2px solid transparent"}),(function(n){return n.next?"var(--active)":"var(--white)"}),(function(n){return n.next?"var(--white)":"var(--active)"}),(function(n){return n.next?"var(--white)":"var(--active)"}),(function(n){return n.next?"var(--active)":"var(--white)"})),_=f.ZP.form(u||(u=(0,g.Z)(["\n  label:nth-last-child(1) {\n    margin-bottom: 0px;\n  }\n  button:nth-last-child(1) {\n    margin-bottom: 16px;\n  }\n"]))),B=f.ZP.label(h||(h=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),L=f.ZP.input(m||(m=(0,g.Z)(["\n  padding: 10px 30px;\n  background: #fdf7f2;\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  margin-bottom: 16px;\n  @media screen and (min-width: 320px) {\n    width: 280px;\n    height: 40px;\n  }\n  @media screen and (min-width: 767px) {\n    width: 458px;\n    height: 52px;\n  }\n"]))),T=f.ZP.div(x||(x=(0,g.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 620px;\n  @media screen and (min-width: 320px) {\n    background-image: url(",");\n    max-width: 620px;\n    margin-top: -150px;\n    height: 470px;\n    position: relative;\n    background-size: 280px;\n  }\n\n  @media screen and (min-width: 767px) {\n    max-width: 768px;\n    margin-top: -250px;\n    height: 538px;\n    background-image: url(",");\n    background-size: 768px;\n  }\n  @media screen and (min-width: 1279px) {\n    margin-top: -400px;\n    height: 538px;\n    max-width: 1280px;\n    background-image: url(",");\n    background-size: auto;\n  }\n"])),w,b,v),R=f.ZP.div(c||(c=(0,g.Z)(["\n  height: 5px;\n  margin-top: 5px;\n  border-radius: 40px;\n"]))),S=f.ZP.div(l||(l=(0,g.Z)(["\n  width: 0px;\n  transform: 3ms;\n  height: 5px;\n  transform-style: 5ms;\n"])))},643:function(n,e,i){i.d(e,{W:function(){return a}});var t,r=i(168),a=i(6444).ZP.div(t||(t=(0,r.Z)(["\n  max-width: 320px;\n  padding: 0 20px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 767px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1279px) {\n    max-width: 1280px;\n    padding: 0 16px;\n  }\n"])))},799:function(n,e,i){n.exports=i.p+"static/media/auth-desk@1x.bfc51a1654d7f4b258aa.png"},9669:function(n,e,i){n.exports=i.p+"static/media/auth-tablet@2x.54d8df9196a7ff5e3fb0.png"},8186:function(n,e,i){n.exports=i.p+"static/media/hero-waves-mob@2x.d215f04cc3d92b31d12e.png"}}]);
//# sourceMappingURL=600.b7aa54d0.chunk.js.map