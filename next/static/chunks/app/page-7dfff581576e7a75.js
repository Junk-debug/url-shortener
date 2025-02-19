(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1051:(e,t,a)=>{Promise.resolve().then(a.bind(a,7356))},7356:(e,t,a)=>{"use strict";a.d(t,{default:()=>V});var r=a(6131),s=a(635),i=a(8428),n=a(451),l=a(4515),o=a(1225),d=a(833),c=a(6454);function u(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,c.QP)((0,d.$)(t))}let m=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=n.forwardRef((e,t)=>{let{className:a,variant:s,size:i,asChild:n=!1,...o}=e,d=n?l.DX:"button";return(0,r.jsx)(d,{className:u(m({variant:s,size:i,className:a})),ref:t,...o})});f.displayName="Button";let p=n.forwardRef((e,t)=>{let{className:a,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:u("flex h-10 w-full rounded-md border border-input bg-input text-foreground px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});p.displayName="Input";var h=a(4952);let x=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(h.b,{ref:t,className:u(x(),a),...s})});g.displayName=h.b.displayName;let b=(0,o.F)("relative w-full rounded-lg border border-neutral-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),v=n.forwardRef((e,t)=>{let{className:a,variant:s,...i}=e;return(0,r.jsx)("div",{ref:t,role:"alert",className:u(b({variant:s}),a),...i})});v.displayName="Alert";let y=n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("h5",{ref:t,className:u("mb-1 font-medium leading-none tracking-tight",a),...s})});y.displayName="AlertTitle";let N=n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:u("text-sm [&_p]:leading-relaxed",a),...s})});N.displayName="AlertDescription";var j=a(5850),w=a(9273);function k(e){let{url:t,setUrl:a,handleSubmit:n,isLoading:l,error:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(i.N,{mode:"wait",children:l?(0,r.jsx)(s.P.div,{animate:{rotate:360},transition:{duration:1,repeat:Number.POSITIVE_INFINITY,ease:"linear"},className:"inline-block mb-2",children:(0,r.jsx)(j.A,{className:"h-12 w-12 text-primary"})},"loading"):(0,r.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"inline-block mb-2",children:(0,r.jsx)(j.A,{className:"h-12 w-12 text-primary"})},"static")}),(0,r.jsx)("h1",{className:"text-4xl font-bold text-secondary-foreground",children:"URL Shortener"}),(0,r.jsx)("p",{className:"mt-2 text-muted-foreground",children:"Shorten your long URLs with style"})]}),(0,r.jsxs)(s.P.div,{className:"bg-card shadow-lg rounded-lg p-6 shadow-primary/50",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:[(0,r.jsxs)("form",{onSubmit:n,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{htmlFor:"url",className:"block",children:"Enter your URL"}),(0,r.jsxs)("div",{className:"mt-1 relative rounded-md shadow-xs",children:[(0,r.jsx)(p,{id:"url",name:"url",type:"text",required:!0,className:u("block w-full pr-10"),placeholder:"https://example.com/very-long-url",value:t,onChange:e=>a(e.target.value),disabled:l}),(0,r.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:(0,r.jsx)(j.A,{className:"h-5 w-5 text-muted-foreground","aria-hidden":"true"})})]})]}),(0,r.jsx)(f,{type:"submit",className:"w-full flex justify-center shadow-xs",disabled:l,children:l?"Processing...":"Shorten URL"})]}),o&&(0,r.jsxs)(v,{variant:"destructive",className:"mt-4",children:[(0,r.jsx)(w.A,{className:"h-4 w-4"}),(0,r.jsx)(y,{children:"Error"}),(0,r.jsx)(N,{children:o})]})]})]})}var R=a(1459);function L(e){let{shortUrl:t,copyToClipboard:a}=e;return(0,r.jsxs)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"mt-6",children:[(0,r.jsx)("h2",{className:"text-lg font-medium mb-2",children:"Your shortened URL:"}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(p,{value:t,readOnly:!0,className:"grow bg-background dark:bg-input"}),(0,r.jsx)(f,{onClick:a,className:"shrink-0",children:(0,r.jsx)(R.A,{className:"h-4 w-4"})})]})]})}var U=a(6300),P=a(1415),A=a(1510),C=a(7784),S=a(8818),_=a(1858),F=a(5094);let z=C.bL,E=C.l9;C.YJ,C.ZL,C.Pb,C.z6,n.forwardRef((e,t)=>{let{className:a,inset:s,children:i,...n}=e;return(0,r.jsxs)(C.ZP,{ref:t,className:u("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",a),...n,children:[i,(0,r.jsx)(S.A,{className:"ml-auto h-4 w-4"})]})}).displayName=C.ZP.displayName,n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(C.G5,{ref:t,className:u("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})}).displayName=C.G5.displayName;let T=n.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...i}=e;return(0,r.jsx)(C.ZL,{children:(0,r.jsx)(C.UC,{ref:t,sideOffset:s,className:u("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})})});T.displayName=C.UC.displayName;let I=n.forwardRef((e,t)=>{let{className:a,inset:s,...i}=e;return(0,r.jsx)(C.q7,{ref:t,className:u("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",s&&"pl-8",a),...i})});function O(){let{setTheme:e}=(0,A.D)();return(0,r.jsxs)(z,{children:[(0,r.jsx)(E,{asChild:!0,children:(0,r.jsxs)(f,{variant:"outline",size:"icon",children:[(0,r.jsx)(U.A,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(P.A,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,r.jsxs)(T,{align:"end",children:[(0,r.jsx)(I,{onClick:()=>e("light"),children:"Light"}),(0,r.jsx)(I,{onClick:()=>e("dark"),children:"Dark"}),(0,r.jsx)(I,{onClick:()=>e("system"),children:"System"})]})]})}I.displayName=C.q7.displayName,n.forwardRef((e,t)=>{let{className:a,children:s,checked:i,...n}=e;return(0,r.jsxs)(C.H_,{ref:t,className:u("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",a),checked:i,...n,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(C.VF,{children:(0,r.jsx)(_.A,{className:"h-4 w-4"})})}),s]})}).displayName=C.H_.displayName,n.forwardRef((e,t)=>{let{className:a,children:s,...i}=e;return(0,r.jsxs)(C.hN,{ref:t,className:u("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",a),...i,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(C.VF,{children:(0,r.jsx)(F.A,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=C.hN.displayName,n.forwardRef((e,t)=>{let{className:a,inset:s,...i}=e;return(0,r.jsx)(C.JU,{ref:t,className:u("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...i})}).displayName=C.JU.displayName,n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(C.wv,{ref:t,className:u("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=C.wv.displayName;var D=a(7154);function V(){let{url:e,setUrl:t,shortUrl:a,error:i,isLoading:l,handleSubmit:o,copyToClipboard:d}=function(){let[e,t]=(0,n.useState)(""),[a,r]=(0,n.useState)(""),[s,i]=(0,n.useState)(""),[l,o]=(0,n.useState)(!1),[d,c]=(0,n.useState)("idle"),u=async t=>{if(t.preventDefault(),i(""),r(""),o(!0),!e){i("Please enter a URL"),o(!1);return}try{var a;new URL(e);let t=await fetch("https://io.up.railway.app/links/shorten",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})});if(!t.ok)throw Error("Failed to shorten the URL");let s=await t.json();console.log("API Response:",s),(null==s?void 0:null===(a=s.data)||void 0===a?void 0:a.shortLink)?r(s.data.shortLink):i("Failed to shorten the URL, please try again.")}catch(e){i("Failed to shorten the URL or invalid URL"),console.log(e)}finally{o(!1)}},m=(0,n.useCallback)(async()=>{try{await navigator.clipboard.writeText(a),c("success")}catch(e){console.error("Failed to copy: ",e),c("error")}},[a]);return(0,n.useEffect)(()=>{"success"===d?(console.log("success"),D.oR.success("Copied! The shortened URL has been copied to your clipboard."),c("idle")):"error"===d&&(D.oR.success("Error copying URL"),c("idle"))},[d]),{url:e,setUrl:t,shortUrl:a,error:s,isLoading:l,handleSubmit:u,copyToClipboard:m}}();return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 bg-linear-to-br from-purple-100 to-indigo-200 dark:bg-background dark:bg-none",children:[(0,r.jsxs)(s.P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},className:"w-full max-w-md space-y-8",children:[(0,r.jsx)(k,{url:e,setUrl:t,handleSubmit:o,isLoading:l,error:i}),a&&(0,r.jsx)(L,{shortUrl:a,copyToClipboard:d})]}),(0,r.jsx)(s.P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},className:"mt-8",children:(0,r.jsx)(O,{})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[223,98,37,911,358],()=>t(1051)),_N_E=e.O()}]);