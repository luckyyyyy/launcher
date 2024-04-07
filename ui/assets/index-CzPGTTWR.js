function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Setup-Dw_2oDTL.js","./vendor-8-YBH5HO.js","./Overview-B_d7r7m6.js","./Connections-k8FeHNWQ.js","./index-Dxcu7CSP.js","./ConfigTitle-CI5ujqvH.js","./global-BXG-JOT0.js","./Logs-DcpSo1S1.js","./Proxies-juajLEEL.js","./Rules-B6PBO5Ae.js","./Config-Ds0sIv3Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as qe,a as je,m as Ae,t as L,i as m,c,S as k,b as I,d as P,e as X,f as ge,g as _,h as Fe,j as y,k as d,l as ze,n as Ne,r as Re,o as Be,p as V,u as me,q as R,v as He,w as B,x as fe,y as Oe,z as We,A,B as Xe,I as Ve,C as K,F as G,D as J,E as Je,G as Ze,H as Ge,J as Ee,K as Qe,L as Ke,M as Ye,N as et,O as tt,P as st,Q as at,R as nt,T as ot,U as rt,V as lt,W as it,X as S,Y as ct,Z as M}from"./vendor-8-YBH5HO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const dt="modulepreload",ut=function(e,t){return new URL(e,t).href},ee={},U=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),p=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.all(a.map(r=>{if(r=ut(r,s),r in ee)return;ee[r]=!0;const i=r.endsWith(".css"),g=i?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const v=o[f];if(v.href===r&&(!i||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${g}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":dt,i||(u.as="script",u.crossOrigin=""),u.href=r,p&&u.setAttribute("nonce",p),document.head.appendChild(u),i)return new Promise((f,v)=>{u.addEventListener("load",f),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}return n.then(()=>t()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};var pt=P('<div class="loading loading-spinner">'),gt=P('<button><span class="truncate rounded-none">');const he=e=>{const[t,a]=qe(e,["class","loading","icon"]);return(()=>{var s=gt(),n=s.firstChild;return je(s,Ae({get class(){return L("btn flex items-center",t.loading?"btn-disabled":t.class)}},a),!1,!0),m(s,c(k,{get when(){return t.loading},get children(){return pt()}}),n),m(n,()=>e.icon||e.children),I(()=>n.classList.toggle("flex-1",!t.icon)),s})()};var mt=P('<div><div class="collapse-title p-4 text-xl font-medium after:!top-8"></div><div>');const Rs=e=>{const{title:t,onCollapse:a}=e,s=()=>e.isOpen?"collapse-open":"collapse-close",n=()=>e.isOpen?"opacity-100":"opacity-0";return(()=>{var o=mt(),l=o.firstChild,p=l.nextSibling;return l.$$click=()=>a(!e.isOpen),m(l,t),m(p,c(k,{get when(){return e.isOpen},get children(){return ge(()=>e.children)()}})),I(r=>{var i=L(s(),"collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md"),g=L(n(),"collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5");return i!==r.e&&_(o,r.e=i),g!==r.t&&_(p,r.t=g),r},{e:void 0,t:void 0}),o})()};X(["click"]);const ft=["acid","aqua","autumn","black","bumblebee","business","cmyk","coffee","corporate","cupcake","cyberpunk","dark","dim","dracula","emerald","fantasy","forest","garden","halloween","lemonade","light","lofi","luxury","night","nord","pastel","retro","sunset","synthwave","valentine","winter","wireframe"];var C=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(C||{});const ht=10,Bs={title:{align:"center",style:{color:"gray",fontSize:"16px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"16px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:ht,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"13px"},formatter:e=>Fe(e).toString()}}};var Y=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Y||{}),ve=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(ve||{}),ye=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ye||{}),T=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(T||{}),H=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(H||{}),be=(e=>(e.Details="details",e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.SniffHost="sniffHost",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.SourceIP="sourceIP",e.SourcePort="sourcePort",e.Destination="destination",e.InboundUser="inboundUser",e))(be||{});const te=200,we=Object.values(be),vt={...Object.fromEntries(we.map(e=>[e,!0])),ID:!1};var D=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(D||{}),yt=(e=>(e.Global="global",e.Rule="rule",e.Direct="direct",e))(yt||{}),xe=(e=>(e.Info="info",e.Error="error",e.Warning="warning",e.Debug="debug",e.Silent="silent",e))(xe||{});const bt=[200,300,500,800,1e3],wt=bt[0],xt={add:"Add",overview:"Overview",proxies:"Proxies",proxiesSettings:"Proxies Settings",rules:"Rules",connections:"Connections",connectionsSettings:"Connections Settings",connectionsDetails:"Connections Details",logs:"Logs",logsSettings:"Logs Settings",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",sniffHost:"Sniff Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",sourceIP:"Source IP",sourcePort:"Source Port",destination:"Destination",inboundUser:"Inbound User",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForIPv6SupportTest:"URL for IPv6 support test",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically Close connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",tableSize:"Table size",logLevel:"Log Level",info:"info",silent:"silent",debug:"debug",warning:"warning",error:"error",logMaxRows:"Log Maximum Reserved Rows",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",latencyTestTimeoutDuration:"Latency Test Timeout Duration",all:"All",sequence:"Sequence",payload:"Payload",details:"Details",endpointURL:"Endpoint URL",secret:"Secret",global:"Global",rule:"Rule",direct:"Direct",active:"Active",closed:"Closed",sort:"Sort",hideUnAvailableProxies:"Hide UnAvailable Proxies",reloadConfig:"Reload Config",flushFakeIP:"Flush Fake-IP",tagClientSourceIPWithName:"Tag Client Source IP With Name",tag:"Tag",coreConfig:"Core Config",xdConfig:"XD Config",version:"Version",expire:"Expire",noExpire:"Null",allowLan:"Allow Lan",enableTunDevice:"Enable TUN Device",tunModeStack:"TUN Mode Stack",tunDeviceName:"TUN Device Name",interfaceName:"Interface Name",en:"English",zh:"Chinese",port:"{{ name }} Port"},Pt={add:"添加",overview:"概览",proxies:"代理",proxiesSettings:"代理设置",rules:"规则",connections:"连接",connectionsSettings:"连接设置",connectionsDetails:"连接详情",logs:"日志",logsSettings:"日志设置",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",sniffHost:"嗅探域名",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",sourceIP:"源地址",sourcePort:"源端口",destination:"目标地址",inboundUser:"入站用户",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForIPv6SupportTest:"测试 IPv6 支持链接",urlForLatencyTest:"测速链接",autoCloseConns:"自动断开连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"双列渲染",updateGEODatabases:"更新 GEO 数据库",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",tableSize:"表格大小",logLevel:"日志等级",info:"信息",silent:"静默",debug:"调试",warning:"警告",error:"错误",logMaxRows:"日志最大保留行数",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",latencyTestTimeoutDuration:"测速超时时间",all:"全部",sequence:"序列号",payload:"内容",details:"详情",endpointURL:"后端地址",secret:"密钥",global:"全局",rule:"规则",direct:"直连",active:"活动",closed:"已关闭",sort:"排序",hideUnAvailableProxies:"隐藏不可用节点",reloadConfig:"重载配置",flushFakeIP:"清空 Fake-IP",tagClientSourceIPWithName:"为客户端源 IP 地址添加名称标记",tag:"标记",coreConfig:"核心配置",xdConfig:"XD 配置",version:"版本",expire:"到期时间",noExpire:"不限时",allowLan:"允许局域网访问",enableTunDevice:"开启 TUN 转发",tunModeStack:"TUN 模式堆栈",tunDeviceName:"TUN 设备名称",interfaceName:"接口名称",en:"英文",zh:"中文",port:"{{ name }} 端口"},Pe={[H.EN]:xt,[H.ZH]:Pt},[Ct,Hs]=y(d(Reflect.has(Pe,navigator.language)?navigator.language:H.EN),{name:"lang",storage:localStorage}),[St,$t]=ze(e=>[Ne(()=>Be(Pe[e.locale]),Re)]),Ce=()=>$t(),[Os,Ws]=y(d(ye.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Xs,Vs]=y(d(T.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[Js,Zs]=y(d(!1),{name:"hideUnAvailableProxies",storage:localStorage}),[Gs,Es]=y(d(!0),{name:"renderProxiesInTwoColumns",storage:localStorage}),[O,Qs]=y(d("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[E,Ks]=y(d("https://api-ipv6.ip.sb/ip"),{name:"urlForIPv6SupportTest",storage:localStorage}),[Tt,Ys]=y(d(!1),{name:"autoCloseConns",storage:localStorage}),[Dt,ea]=y(d(!0),{name:"useTwemoji",storage:localStorage}),[Lt,ta]=y(d(!1),{name:"autoSwitchTheme",storage:localStorage}),[kt,sa]=y(d("nord"),{name:"favDayTheme",storage:localStorage}),[It,aa]=y(d("sunset"),{name:"favNightTheme",storage:localStorage}),[na,oa]=y(d(D.XS),{name:"connectionsTableSize",storage:localStorage}),[ra,la]=y(d(vt),{name:"connectionsTableColumnVisibility",storage:localStorage}),[ia,ca]=y(d(we),{name:"connectionsTableColumnOrder",storage:localStorage}),[da,ua]=y(d([]),{name:"clientSourceIPTags",storage:localStorage}),[pa,ga]=y(d(D.XS),{name:"logsTableSize",storage:localStorage}),[ma,fa]=y(d(xe.Info),{name:"logLevel",storage:localStorage}),[ha,va]=y(d(wt),{name:"logMaxRows",storage:localStorage}),ya=e=>{let t="table-xs";switch(e){case D.XS:t="table-xs";break;case D.SM:t="table-sm";break;case D.MD:t="table-md";break;case D.LG:t="table-lg";break}return t},[N,ba]=y(d(5e3),{name:"latencyTestTimeoutDuration",storage:localStorage}),Mt=()=>O().startsWith("https"),$=()=>Mt()?ve:Y,[Ut,Se]=d([]),[$e,_t]=d(null),wa=()=>{const[e,t]=d([]),[a,s]=d([]),[n,o]=d(!1);return V(()=>{var p;const l=(p=$e())==null?void 0:p.connections;l&&me(()=>{const r=Te(l,a());if(qt(a()),!n()){const i=jt(r,Ut());s(r),t(i.slice(-te))}Se(i=>i.slice(-(r.length+te)))})}),{closedConnections:e,activeConnections:a,paused:n,setPaused:o}},Te=(e,t)=>{const a=new Map;return t.forEach(s=>a.set(s.id,s)),e.map(s=>{const n=a.get(s.id);return!n||!R.isNumber(n.download)||!R.isNumber(n.upload)?{...s,downloadSpeed:0,uploadSpeed:0}:{...s,downloadSpeed:s.download-n.download,uploadSpeed:s.upload-n.upload}})},qt=e=>{Se(t=>R.unionWith(t,e,(a,s)=>a.id===s.id))},jt=(e,t)=>R.differenceWith(t,e,(a,s)=>a.id===s.id),xa=()=>w().delete("connections"),At=e=>w().delete(`connections/${e}`),[Pa,se]=d(!1),[Ca,ae]=d(!1),[Sa,ne]=d(!1),[$a,oe]=d(!1),[Ta,re]=d(!1),Da=async()=>{const e=w();se(!0);try{await e.put("configs",{searchParams:{force:!0},json:{path:"",payload:""}})}catch{}se(!1)},La=async()=>{const e=w();ne(!0);try{await e.post("cache/fakeip/flush")}catch{}ne(!1)},ka=async()=>{const e=w();ae(!0);try{await e.post("configs/geo")}catch{}ae(!1)},Ia=async()=>{const e=w();oe(!0);try{await e.post("upgrade")}catch{}oe(!1)},Ma=async()=>{const e=w();re(!0);try{await e.post("restart")}catch{}re(!1)},Ua=()=>w().get("configs").json(),_a=async(e,t,a)=>{try{await w().patch("configs",{json:{[e]:t}}).json(),await a()}catch(s){He.error(s.message)}},qa=async()=>{const e=w(),{version:t}=await e.get("version").json();return t},Ft=()=>w().get("providers/proxies").json(),zt=()=>w().get("proxies").json(),le=e=>w().put(`providers/proxies/${e}`),De=e=>w().get(`providers/proxies/${e}/healthcheck`,{timeout:5*1e3}).json(),Nt=(e,t)=>w().put(`proxies/${e}`,{body:JSON.stringify({name:t})}),ie=(e,t,a,s)=>{const n=w();return t!==""?De(t).then(o=>({delay:o[e]})):n.get(`proxies/${e}/delay`,{searchParams:{url:a,timeout:s}}).json()},ce=(e,t,a)=>w().get(`group/${e}/delay`,{searchParams:{url:t,timeout:a}}).json(),ja=()=>w().get("rules").json(),Aa=()=>w().get("providers/rules").json(),Fa=e=>w().put(`providers/rules/${e}`),za=async e=>{const t="https://api.github.com/repos/MetaCubeX/mihomo",a=/(alpha|beta|meta)-?(\w+)/.exec(e);if(!a)return!1;const s=a[1],n=a[2];if(s==="meta"){const{assets:o}=await B.get(`${t}/releases/latest`).json();return!o.some(({name:p})=>p.includes(n))}if(s==="alpha"){const{assets:o}=await B.get(`${t}/releases/tags/Prerelease-Alpha`).json();return!o.some(({name:p})=>p.includes(n))}return!1},Na=e=>e.includes("sing-box"),Ra=e=>/^https?/.test(e)?e:`${window.location.protocol}//${e}`,F=()=>{const[e,t]=d({}),a=(n,o)=>{t({...e(),[n]:o})};return{map:e,set:a,setWithCallback:async(n,o)=>{a(n,!0);try{await o()}catch{}a(n,!1)}}},Rt=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t==="hysteria"?"hy":t==="wireguard"?"wg":t},Ba=(e,t,a,s)=>a===T.NATURAL?e:e.sort((n,o)=>{if(s!=null&&s.has(n)&&!(s!=null&&s.has(o)))return-1;if(s!=null&&s.has(o)&&!(s!=null&&s.has(n)))return 1;const l=t[n],p=t[o];switch(a){case T.LATENCY_ASC:return l===$().NOT_CONNECTED?1:p===$().NOT_CONNECTED?-1:l-p;case T.LATENCY_DESC:return l===$().NOT_CONNECTED?1:p===$().NOT_CONNECTED?-1:p-l;case T.NAME_ASC:return n.localeCompare(o);case T.NAME_DESC:return o.localeCompare(n);default:return 0}}),Ha=(e,t,a,s)=>s?e.filter(n=>a!=null&&a.has(n)?!0:t[n]!==$().NOT_CONNECTED):e,{map:Bt,set:Ht}=F(),{map:Ot,setWithCallback:Wt}=F(),{map:Xt,setWithCallback:Vt}=F(),{map:Jt,setWithCallback:Zt}=F(),{map:Gt,setWithCallback:Et}=F(),[Qt,de]=d(!1),[Kt,Yt]=d([]),[es,ts]=d(new Set),[ue,ss]=d([]),[Le,Q]=d({}),[ke,j]=d({}),[Ie,as]=d({}),ns=e=>{var p;const t={...Ie()},a={...Le()},s={...ke()},n=(r,i,g=!0)=>{var u,f,v,x;const h=(u=r.extra)==null?void 0:u[i];if(Array.isArray(h)){const b=(f=h.at(-1))==null?void 0:f.delay;if(b)return b}if(g)return(x=(v=r.history)==null?void 0:v.at(-1))==null?void 0:x.delay},o={};e.forEach(r=>{const{udp:i,xudp:g,type:h,now:u,name:f,provider:v=""}=r;if(t[r.name]={udp:i,xudp:g,type:h,now:u,name:f,provider:v},!u)a[r.name]=n(r,O())||$().NOT_CONNECTED;else if(a[u]!==void 0)a[r.name]=a[u];else{const b=o[u]??new Set;b.add(r.name),o[u]=b}const x=(n(r,E(),!1)??0)>0;s[r.name]=x});const l=Object.keys(o).filter(r=>a[r]!==void 0);for(;l.length>0;){const r=l.shift(),i=a[r];for(const g of((p=o[r])==null?void 0:p.values())??[])a[g]=i,l.push(g)}fe(()=>{as(t),Q(a),j(s)})},W=()=>{const e=async()=>{const[{providers:i},{proxies:g}]=await Promise.all([Ft(),zt()]),h=[...g.GLOBAL.all??[],"GLOBAL"],u=Object.values(g).filter(x=>{var b;return(b=x.all)==null?void 0:b.length}).sort((x,b)=>h.indexOf(x.name)-h.indexOf(b.name)),f=Object.values(i).filter(x=>x.name!=="default"&&x.vehicleType!=="Compatible"),v=[...Object.values(g),...f.flatMap(x=>x.proxies.filter(b=>!(b.name in g)).map(b=>({...b,provider:x.name})))];fe(()=>{Yt(u),ts(new Set(["DIRECT","REJECT",...u.map(x=>x.name)])),ss(f),ns(v)})},t=async(i,g)=>{await Nt(i.name,g),await e(),Tt()&&me(()=>{var u;const h=Te(((u=$e())==null?void 0:u.connections)??[],[]);h.length>0&&h.forEach(({id:f,chains:v})=>{v.includes(i.name)&&At(f)})})},a=async(i,g)=>{const h=E();if(!h||h.length===0){j({});return}let u=!1;try{const{delay:f}=await ie(i,g,h,N());u=f>0}catch{u=!1}j(f=>({...f,[i]:u}))},s=async i=>{const g=E();if(!g||g.length===0){j({});return}const h=await ce(i,g,N()),u=Object.fromEntries(Object.entries(h).map(([f,v])=>[f,v>0]));j(f=>({...f,...u}))};return{collapsedMap:Bt,setCollapsedMap:Ht,proxyIPv6SupportMap:ke,proxyLatencyTestingMap:Ot,proxyGroupLatencyTestingMap:Xt,proxyProviderLatencyTestingMap:Jt,updatingMap:Gt,isAllProviderUpdating:Qt,proxies:Kt,proxyGroupNames:es,proxyProviders:ue,proxyLatencyTest:async(i,g)=>{Wt(i,async()=>{const{delay:h}=await ie(i,g,O(),N());Q(u=>({...u,[i]:h}))}),await a(i,g)},proxyGroupLatencyTest:async i=>{Vt(i,async()=>{const g=await ce(i,O(),N());Q(h=>({...h,...g})),await e()}),await s(i)},latencyMap:Le,proxyNodeMap:Ie,fetchProxies:e,selectProxyInGroup:t,updateProviderByProviderName:i=>Et(i,async()=>{try{await le(i)}catch{}await e()}),updateAllProvider:async()=>{de(!0);try{await Promise.allSettled(ue().map(i=>le(i.name))),await e()}finally{de(!1)}},proxyProviderLatencyTest:i=>Zt(i,async()=>{await De(i),await e()})}},[os,Oa]=y(d(""),{name:"selectedEndpoint",storage:localStorage}),[rs,Wa]=y(d([]),{name:"endpointList",storage:localStorage}),w=()=>{const e=z();if(!e)return B.create({});const t=new Headers;return e.secret&&t.set("Authorization",`Bearer ${e.secret}`),B.create({prefixUrl:e.url,headers:t})},z=()=>rs().find(({id:e})=>e===os()),ls=()=>{var e;return(e=z())==null?void 0:e.secret},is=()=>{var e;return new URL(((e=z())==null?void 0:e.url)??"").origin.replace("http","ws")},cs=(e,t={})=>{const a=new URLSearchParams(t);a.set("token",ls()??"");const s=Oe(`${is()}/${e}?${a.toString()}`),n=We(s,"message");return A(()=>{var l;return n()?JSON.parse((l=n())==null?void 0:l.data):null})},[ds,Me]=y(d("sunset"),{name:"theme",storage:localStorage});var us=P('<li class="tooltip tooltip-bottom">'),ps=P('<div class="drawer drawer-end w-auto sm:ml-auto"><input id=themes type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=themes class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side overflow-x-hidden"><label for=themes class=drawer-overlay></label><ul class="menu gap-2 rounded-l-box bg-base-300 p-2">'),gs=P('<li class="btn btn-xs">'),ms=P('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),fs=P('<ul class="navbar z-50 flex w-auto items-center justify-center bg-base-300 px-4 shadow-lg"><div class="navbar-start gap-4"><div class="drawer w-auto lg:hidden"><input id=navs type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=navs class="btn btn-circle drawer-button btn-sm"></label></div><div class=drawer-side><label for=navs class=drawer-overlay></label><ul class="menu min-h-full w-2/5 gap-2 rounded-r-box bg-base-300 pt-20"></ul></div></div></div><div class=navbar-end><div class="flex items-center gap-2">'),hs=P("<li>");const vs=({href:e,tooltip:t,children:a})=>(()=>{var s=us();return J(s,"data-tip",t),m(s,c(K,{class:"rounded-box",href:e,children:a})),s})(),ys=()=>(()=>{var e=ps(),t=e.firstChild,a=t.nextSibling,s=a.firstChild,n=a.nextSibling,o=n.firstChild,l=o.nextSibling;return m(s,c(Je,{})),m(l,c(G,{each:ft,children:p=>(()=>{var r=gs();return r.$$click=()=>Me(p),J(r,"data-theme",p),m(r,p),r})()})),e})(),bs=()=>{const[e]=Ce(),t=()=>[{href:C.Overview,name:e("overview"),icon:c(Ze,{})},{href:C.Proxies,name:e("proxies"),icon:c(Ge,{})},{href:C.Rules,name:e("rules"),icon:c(Ee,{})},{href:C.Conns,name:e("connections"),icon:c(Qe,{})},{href:C.Log,name:e("logs"),icon:c(Ke,{})},{href:C.Config,name:e("config"),icon:c(Ye,{})}],a=Xe(),[s,n]=d(!1);return(()=>{var o=fs(),l=o.firstChild,p=l.firstChild,r=p.firstChild,i=r.nextSibling,g=i.firstChild,h=i.nextSibling,u=h.firstChild,f=u.nextSibling,v=l.nextSibling,x=v.firstChild;return r.addEventListener("change",b=>n(b.target.checked)),m(g,c(Ve,{})),m(f,c(G,{get each(){return t()},children:({href:b,name:Z})=>(()=>{var q=hs();return q.$$click=()=>n(!1),m(q,c(K,{href:b,children:Z})),q})()})),m(l,c($s,{}),null),m(o,c(k,{get when(){return a.pathname!==C.Setup},get children(){var b=ms(),Z=b.firstChild;return m(Z,c(G,{get each(){return t()},children:({href:q,name:Ue,icon:_e})=>c(vs,{href:q,tooltip:Ue,children:_e})})),b}}),v),m(x,c(ys,{})),I(()=>r.checked=s()),o})()};X(["click"]);var ws=P('<span class="badge badge-sm p-px"><span class=scale-75>IPv6');const xs=e=>{const{proxyIPv6SupportMap:t}=W(),a=A(()=>t()[e.name]===!0);return c(k,{get when(){return a()},get children(){return ws()}})};var Ps=P("<span>");const Cs=e=>{const[t]=Ce(),{latencyMap:a}=W(),[s,n]=d(""),o=A(()=>a()[e.name]);return V(()=>{n("text-success"),o()>$().HIGH?n("text-error"):o()>$().MEDIUM&&n("text-warning")}),c(k,{get when(){return A(()=>typeof o()=="number")()&&o()!==Y.NOT_CONNECTED},get children(){var l=Ps();return m(l,o,null),m(l,()=>t("ms"),null),I(()=>_(l,`whitespace-nowrap text-xs ${s()}`)),l}})};var Ss=P('<div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl"><span>(</span><a class="text-primary transition-transform hover:rotate-90 hover:scale-125"href=https://github.com/metacubex/metacubexd target=_blank>xd</a><span>)');const $s=()=>(()=>{var e=Ss(),t=e.firstChild;return m(e,c(K,{class:"bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",get href(){return z()?"/":"/setup"},children:"metacube"}),t),e})();var Ts=P('<div class="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur"><div class="flex justify-end gap-2">'),Ds=P('<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box p-0"><div><div class="flex items-center gap-4 text-xl font-bold"><span></span></div></div><div class=p-4></div></div><form method=dialog class=modal-backdrop><button>');const Ls="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur",Xa=e=>{let t;return(()=>{var a=Ds(),s=a.firstChild,n=s.firstChild,o=n.firstChild,l=o.firstChild,p=n.nextSibling;return et(r=>{var i;return(t=r)&&((i=e.ref)==null?void 0:i.call(e,r))},a),s.$$contextmenu=r=>r.preventDefault(),m(o,()=>e.icon,l),m(l,()=>e.title),m(n,c(he,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.close(),get icon(){return c(tt,{size:20})}}),null),m(p,ge(()=>e.children)),m(s,c(k,{get when(){return e.action},get children(){var r=Ts(),i=r.firstChild;return m(i,()=>e.action),r}}),null),I(()=>_(n,L(Ls,"top-0 justify-between"))),a})()};X(["contextmenu"]);var ks=P('<div><div class="flex items-center justify-between gap-1"><span class="break-all text-left text-sm truncate"><span class="text-xs text-slate-500 mr-1"></span><span class="text-xs text-slate-500 mr-1"></span></span><span class="flex items-center gap-1">');const Va=e=>{const{proxyLatencyTest:t,proxyLatencyTestingMap:a}=W(),{proxyName:s,isSelected:n,onClick:o}=e,{proxyNodeMap:l}=W(),p=A(()=>l()[s]);return(()=>{var r=ks(),i=r.firstChild,g=i.firstChild,h=g.firstChild,u=h.nextSibling,f=g.nextSibling;return st(r,"click",o,!0),J(r,"title",s),m(h,()=>{var v;return Rt((v=p())==null?void 0:v.type)}),m(u,c(Cs,{get name(){return e.proxyName}})),m(g,s,null),m(f,c(xs,{get name(){return e.proxyName}}),null),m(f,c(he,{class:"btn-circle btn-ghost h-auto min-h-0 w-auto",get icon(){return c(at,{size:20,get class(){return L(a()[s]&&"animate-pulse text-success")}})},onClick:v=>{v.stopPropagation(),t(s,p().provider)}}),null),I(()=>_(r,L("border-neutral-focus card card-bordered tooltip-bottom flex flex-col justify-between gap-1 bg-neutral py-1 px-2 text-neutral-content",n&&"border-primary bg-primary-content text-primary",o&&"cursor-pointer"))),r})()};X(["click"]);var Is=P('<div><div class="flex-1 overflow-y-auto p-2 sm:p-4"><div class=pb-8>');const Ms=()=>{const e=cs("connections");return V(()=>_t(e())),null},Us=({children:e})=>{const t=nt();return V(()=>{Lt()&&Me(t()?It():kt())}),(()=>{var a=Is(),s=a.firstChild,n=s.firstChild;return m(a,c(bs,{}),s),m(n,e),m(a,c(k,{get when(){return z()},get children(){return c(Ms,{})}}),null),I(o=>{var l=L("relative flex h-screen flex-col overscroll-y-none subpixel-antialiased",Dt()?"font-twemoji":"font-no-twemoji"),p=ds();return l!==o.e&&_(a,o.e=l),p!==o.t&&J(a,"data-theme",o.t=p),o},{e:void 0,t:void 0}),a})()},_s=M(()=>U(()=>import("./Setup-Dw_2oDTL.js"),__vite__mapDeps([0,1]),import.meta.url)),pe=M(()=>U(()=>import("./Overview-B_d7r7m6.js"),__vite__mapDeps([2,1]),import.meta.url)),qs=M(()=>U(()=>import("./Connections-k8FeHNWQ.js"),__vite__mapDeps([3,1,4,5,6]),import.meta.url)),js=M(()=>U(()=>import("./Logs-DcpSo1S1.js"),__vite__mapDeps([7,1,4,5]),import.meta.url)),As=M(()=>U(()=>import("./Proxies-juajLEEL.js"),__vite__mapDeps([8,1,6,5]),import.meta.url)),Fs=M(()=>U(()=>import("./Rules-B6PBO5Ae.js"),__vite__mapDeps([9,1,6]),import.meta.url)),zs=M(()=>U(()=>import("./Config-Ds0sIv3Y.js"),__vite__mapDeps([10,1,5]),import.meta.url));ot.extend(rt);lt(()=>c(St,{get locale(){return Ct()},get children(){return[c(it,{root:Us,get children(){return[c(S,{get path(){return C.Setup},component:_s}),c(S,{path:"*",component:pe}),c(S,{get path(){return C.Overview},component:pe}),c(S,{get path(){return C.Proxies},component:As}),c(S,{get path(){return C.Rules},component:Fs}),c(S,{get path(){return C.Conns},component:qs}),c(S,{get path(){return C.Log},component:js}),c(S,{get path(){return C.Config},component:zs})]}}),c(ct,{position:"bottom-center"})]}}),document.querySelector("#root"));export{Js as $,fa as A,he as B,ht as C,Bs as D,va as E,bt as F,pa as G,ma as H,ha as I,Ys as J,Qs as K,xe as L,Xa as M,ba as N,Ks as O,Vs as P,T as Q,Zs as R,Es as S,D as T,Ws as U,ye as V,Tt as W,O as X,N as Y,E as Z,Xs as _,os as a,Gs as a0,Os as a1,$ as a2,Cs as a3,W as a4,Ha as a5,Ba as a6,Rs as a7,Va as a8,ja as a9,ft as aA,aa as aB,kt as aC,It as aD,Dt as aE,za as aF,Ua as aG,Aa as aa,Fa as ab,F as ac,Ct as ad,qa as ae,Na as af,w as ag,_a as ah,Pa as ai,Da as aj,Ca as ak,ka as al,Sa as am,La as an,$a as ao,Ia as ap,Ta as aq,Ma as ar,C as as,yt as at,H as au,ea as av,Hs as aw,ta as ax,Lt as ay,sa as az,Oa as b,z as c,cs as d,rs as e,we as f,vt as g,oa as h,da as i,ua as j,na as k,$e as l,Ut as m,wa as n,be as o,At as p,ia as q,ra as r,Wa as s,Ra as t,Ce as u,xa as v,ca as w,la as x,ya as y,ga as z};
