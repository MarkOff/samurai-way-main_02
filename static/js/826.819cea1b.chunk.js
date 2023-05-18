"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[826],{5826:function(t,e,s){s.r(e),s.d(e,{default:function(){return rt}});var n=s(5671),r=s(3144),o=s(136),i=s(5716),a=s(2791),l=s(885),u="ProfileBlock_profileContainer__YhXOP",c="ProfileBlock_blockNameAndStatus__eM2jQ",d={status:"ProfileStatusWithHooks_status__lumN0"},h=s(184),f=function(t){var e=t.status,s=t.updateStatus,n=(0,a.useState)(!1),r=(0,l.Z)(n,2),o=r[0],i=r[1],u=(0,a.useState)(e),c=(0,l.Z)(u,2),f=c[0],p=c[1];(0,a.useEffect)((function(){p(e)}),[e]);var x=e?e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("b",{children:"Status:"})," ",e]}):"No status";return(0,h.jsxs)("div",{className:d.status,children:[!o&&(0,h.jsx)("div",{children:(0,h.jsxs)("span",{onClick:function(){i(!0)},children:[" ",x," "]})}),o&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s&&s(f)},className:d.statusInput,value:f,placeholder:"change you status",minLength:0,maxLength:30})})]})},p="Contacts_contacts__+FfTV",x=function(t){var e=t.contacts,s=Object.values(e).some((function(t){return null!==t&&""!==t}));return(0,h.jsx)(h.Fragment,{children:s&&(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("b",{children:"Contacts:"})," ",Object.keys(e).filter((function(t){var s=t;return void 0!==e[s]&&null!==e[s]&&""!==e[s]})).map((function(t){var s=t;return(0,h.jsx)(j,{contactKey:t,contactValue:e[s]},t)}))]})})},j=function(t){var e=t.contactValue,s=t.contactKey;return(0,h.jsx)("a",{href:e,children:s})},m=s(8011),v="StatusJob_statusJob__yVhUm",b=function(t){var e=t.lookingForAJob,s=t.lookingForAJobDescription,n=null!==s?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("b",{children:"Status Job: "}),s]}):null,r=e?"yes":"no",o=e&&(0,h.jsx)("div",{className:v,children:n});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("b",{children:"Looking for a job: "})," ",r]}),o]})},g="AboutMe_aboutMe__LqVKo",_=function(t){var e=t.aboutMe,s=null!==e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("b",{children:"About me: "}),e]}):null;return(0,h.jsx)("div",{className:g,children:s})},P="FullName_FullName__gQNSE",k=function(t){var e=t.fullName;return(0,h.jsx)("div",{className:P,children:e})},N="MainAvatar_avatar__rY5vl",S="MainAvatar_inputPhoto__aGAv4",y="MainAvatar_labelPhoto__-46BW",F=s(9534),A=function(t){var e=t.profile,s=t.isOwner,n=t.savePhoto,r=null!==(null===e||void 0===e?void 0:e.photos.large)?null===e||void 0===e?void 0:e.photos.large:F,o=s&&(0,h.jsx)("input",{type:"file",onChange:function(t){var e;null!==(e=t.target.files)&&void 0!==e&&e.length&&n&&n(t.target.files[0])},className:S});return(0,h.jsxs)("label",{className:s?y:"",children:[(0,h.jsx)("img",{className:N,alt:"Main avatar","aria-label":"updload photo",src:r}),o]})},M=function(t){var e=t.profile,s=t.isOwner,n=t.status,r=t.updateStatus,o=t.savePhoto,i=t.goToEditMode;return e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)(A,{profile:e,isOwner:s,savePhoto:o}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(k,{fullName:e.fullName}),(0,h.jsx)(f,{updateStatus:r,status:n})]}),(0,h.jsx)(x,{contacts:e.contacts})]}),(0,h.jsxs)("div",{children:[s&&(0,h.jsx)("button",{onClick:i,children:"edit"}),"  "]}),(0,h.jsx)(_,{aboutMe:e.aboutMe}),(0,h.jsx)(b,{lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription})]}):(0,h.jsx)(m.p,{})},w=s(4254),I=s(3079),O=s(704),C="ProfileDataForm_formSummeryError__5IcDn",J=(0,O.Z)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,n=t.error;return(0,h.jsxs)("form",{onSubmit:e,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{children:"save"}),n&&(0,h.jsx)("div",{className:C,children:n})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full Name: "})," ",(0,w.Gr)(w.II,"text","fullName","Enter you name",[I.C],null)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts).map((function(t){return(0,h.jsx)("div",{children:(0,h.jsxs)("b",{children:[t,": ",(0,w.Gr)(w.gx,"text","contacts."+t,null,null,null)]})},t)}))]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me: "})," ",(0,w.Gr)(w.gx,"text","aboutMe","Write about yourself",null,null)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job: "})," ",(0,w.Gr)(w.II,"checkbox","lookingForAJob",null,null,null)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills: "})," ",(0,w.Gr)(w.gx,"text","lookingForAJobDescription","Enter you skills",null,null)]})]})})),Z=function(t){var e=t.profile,s=t.saveProfile,n=t.savePhoto,r=t.updateStatus,o=t.status,i=t.isOwner,u=(0,a.useState)(!1),c=(0,l.Z)(u,2),d=c[0],f=c[1];return e?(0,h.jsx)(h.Fragment,{children:d?(0,h.jsx)(J,{initialValues:e,profile:e,onSubmit:function(t){s(t).then((function(t){t&&f(!1)}))}}):(0,h.jsx)(M,{profile:e,isOwner:i,status:o,updateStatus:r,savePhoto:n,goToEditMode:function(){f(!0)}})}):(0,h.jsx)(m.p,{})},D=s(81),L="MyPosts_postBlock__tQRVL",E="MyPosts_posts__IcSjH",B="Post_posts__OmU92",U=function(t){return(0,h.jsxs)("div",{className:B,children:[(0,h.jsx)("img",{src:"https://i.pinimg.com/736x/1e/33/a5/1e33a5fad800ee8e782ad87e63169187.jpg"}),t.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:[" like ",t.counterLike]})})]})},V=s(6139),G=(0,I.D)(41),T=a.memo((function(t){return(0,h.jsxs)("form",{onSubmit:function(e){t.handleSubmit(e),t.reset()},children:[(0,h.jsx)("div",{children:(0,h.jsx)(V.Z,{name:"newPostTextBody",component:w.gx,minLength:0,maxLength:40,placeholder:"Enter you text",validate:[I.C,G]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),q=(0,O.Z)({form:"addPostForm",initialValues:{newPostTextBody:""}})(T),z=a.memo((function(t){var e=t.profilePost,s=t.addPost,n=e.map((function(t){return(0,h.jsx)(U,{id:t.id,message:t.message,counterLike:t.counterLike},t.id)}));return(0,h.jsxs)("div",{className:L,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(q,{onSubmit:function(t){s(t.newPostTextBody)}}),(0,h.jsx)("div",{className:E,children:n})]})})),K=s(364),Q=function(t){return t.profilePage.posts},W=function(t){return t.profilePage.profile},$=function(t){return t.profilePage.status},H=function(t){return t.profilePage.isOwner},R=(0,K.$j)((function(t){return{profilePost:Q(t)}}),{addPost:D.q2})(z),Y=function(t){var e=t.profile,s=t.saveProfile,n=t.savePhoto,r=t.updateStatus,o=t.status,i=t.isOwner;return(0,h.jsxs)("div",{children:[(0,h.jsx)(Z,{profile:e,updateStatus:r,status:o,saveProfile:s,isOwner:i,savePhoto:n}),(0,h.jsx)(R,{})]})},X=s(9271),tt=s(7781),et=s(8845),st=s(6477),nt=function(t){(0,o.Z)(s,t);var e=(0,i.Z)(s);function s(){return(0,n.Z)(this,s),e.apply(this,arguments)}return(0,r.Z)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;!t&&this.props.authorizedUserId&&((t=this.props.authorizedUserId)||this.props.history.push("/login")),this.props.setProfile(t),this.props.setUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var t=this.props,e=t.profile,s=t.updateStatus,n=t.status,r=t.savePhoto,o=t.saveProfile;return(0,h.jsx)(Y,{profile:e,savePhoto:r,updateStatus:s,status:n,isOwner:!this.props.match.params.userId,saveProfile:o})}}]),s}(a.Component),rt=(0,tt.qC)((0,K.$j)((function(t){return{profile:W(t),status:$(t),authorizedUserId:(0,et.c7)(t),isAuth:(0,et.Jt)(t),isOwner:H(t)}}),{setProfile:D.RG,setUserStatus:D.ij,updateStatus:D.Nf,savePhoto:D.Ju,saveProfile:D.Ii}),st.D,X.EN)(nt)},6477:function(t,e,s){s.d(e,{D:function(){return d}});var n=s(8683),r=s(5987),o=(s(2791),s(9271)),i=s(364),a=s(8845),l=s(184),u=["isAuth"],c=function(t){return{isAuth:(0,a.Jt)(t)}};function d(t){return(0,i.$j)(c)((function(e){var s=e.isAuth,i=(0,r.Z)(e,u);return s?(0,l.jsx)(t,(0,n.Z)({},i)):(0,l.jsx)(o.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=826.819cea1b.chunk.js.map