(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{158:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",o="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,a),r=n-s<0,o=e.clone().add(i+(r?-1:1),a);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:u,w:r,d:s,D:c,h:i,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=l;var g=function(t){return t instanceof v},b=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)$[t]&&(i=t),e&&($[t]=e,i=t);else{var s=t.name;$[s]=t,i=s}return!n&&i&&(m=i),i||!n&&m},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},M=p;M.l=b,M.i=g,M.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,h=!!M.u(o)||o,l=M.p(t),f=function(t,e){var n=M.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?n:n.endOf(s)},p=function(t,e){return M.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},m=this.$W,$=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case u:return h?f(1,0):f(31,11);case a:return h?f(1,$):f(0,$+1);case r:var j=this.$locale().weekStart||0,v=(m<j?m+7:m)-j;return f(h?g-v:g+(6-v),$);case s:case c:return p(b+"Hours",0);case i:return p(b+"Minutes",1);case n:return p(b+"Seconds",2);case e:return p(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,o){var d,h=M.p(r),l="set"+(this.$u?"UTC":""),f=(d={},d[s]=l+"Date",d[c]=l+"Date",d[a]=l+"Month",d[u]=l+"FullYear",d[i]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],p=h===s?this.$D+(o-this.$W):o;if(h===a||h===u){var m=this.clone().set(c,1);m.$d[f](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[M.p(t)]()},f.add=function(t,o){var c,d=this;t=Number(t);var h=M.p(o),l=function(e){var n=j(d);return M.w(n.date(n.date()+Math.round(e*t)),d)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===s)return l(1);if(h===r)return l(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,p=this.$d.getTime()+t*f;return M.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,u=s.weekdays,c=s.months,d=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},l=function(t){return M.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(s.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,u,2),ddd:d(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:M.s(r,2,"0"),h:l(1),hh:l(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||p[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var h,l=M.p(c),f=j(t),p=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,$=M.m(this,f);return $=(h={},h[u]=$/12,h[a]=$,h[o]=$/3,h[r]=(m-p)/6048e5,h[s]=(m-p)/864e5,h[i]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[l]||m,d?$:M.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),y=v.prototype;return j.prototype=y,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",a],["$y",u],["$D",c]].forEach((function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,v,j),t.$i=!0),j},j.locale=b,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=$[m],j.Ls=$,j.p={},j}()},169:function(t,e,n){"use strict";n.r(e);var i=n(0),s=(n(1),n(5)),r=n(21),a=n(158),o=n.n(a),u=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/site").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},c=[{title:"Corona-Virus Tracking Application",subtitle:"Web Development",image:"/images/projects/corona.jpg",date:"2021-08-15",desc:"Used Spring boot. Took dataset from the cssegianddata github repository which is updated on daily basis.,  Spring boot\u2019s thymeleaf and web dependencies were used. "},{title:"Bus Booking Portal",subtitle:"Web Development",image:"/images/projects/bus_booking.jpg",date:"2020-09-20",desc:"Developed a working bus booking web application using Node.js and React.Js and MySQL.Confirmed tickets with all details were sent to customers using REST API."},{title:"NIDRA",subtitle:"Internet Of Things",image:"/images/projects/nidra.jpg",date:"2018-05-20",desc:"Arduino based device using bluetooth module and gyro sensorto detect to detect sleep walking. An automated band was used to alarm people in case of sleep walk "},{title:"ANDROID APPLICATION FOR DELIVERING PARCELS USINGBICYCLE",subtitle:"Android Application",image:"/images/projects/android.jpg",date:"2019-05-15",desc:"Practical application of Travelling Salesperson Problem for suggesting optimal route for deliveries"},{title:"Notes Application(CLI based)",subtitle:"Application",image:"/images/projects/notes.jpg",date:"2020-06-15",desc:"Simple Nodejs Command Line based application to perform basic operations like add, delete, update notes."}];e.default=function(){return Object(i.jsx)(r.a,{title:"Projects",description:"Learn about Shishir Chauhan's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(s.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(i.jsx)(u,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=6.354f0312.chunk.js.map