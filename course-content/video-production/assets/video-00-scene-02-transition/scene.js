(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.Scene02=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const W=1920,H=1080,D=11;
  const C={navy:'#003366',blue:'#0055a4',cyan:'#00aeef',muted:'#5b7387',line:'#d8e8f2',white:'#ffffff',amber:'#f0b429'};
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const seg=(t,a,b)=>clamp((t-a)/(b-a));
  const ease=p=>1-Math.pow(1-p,3);
  function rounded(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}}
  function text(ctx,value,x,y,size,color,weight='400',align='left'){ctx.fillStyle=color;ctx.font=`${weight} ${size}px Arial, Helvetica, sans-serif`;ctx.textAlign=align;ctx.textBaseline='alphabetic';ctx.fillText(value,x,y)}
  function withAlpha(ctx,a,fn){ctx.save();ctx.globalAlpha=clamp(a);fn();ctx.restore()}
  function panel(ctx,x,y,w,h,kind,alpha,dx=0,scale=1){withAlpha(ctx,alpha,()=>{ctx.save();ctx.translate(x+w/2+dx,y+h/2);ctx.scale(scale,scale);ctx.translate(-w/2,-h/2);const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,C.white);g.addColorStop(1,kind==='after'?'#edf9ff':'#f7f9fb');rounded(ctx,0,0,w,h,34,g,'#d9e8f2');ctx.restore()})}
  function drawPaper(ctx,x,y,index,p){withAlpha(ctx,p,()=>{ctx.save();ctx.translate((1-p)*-34,(1-p)*34);ctx.translate(x+180,y+105);ctx.rotate((index-1)*3*(1-p)*Math.PI/180);ctx.translate(-180,-105);rounded(ctx,0,0,360,210,22,C.white,'#d8e3eb');for(let i=0;i<3;i++)rounded(ctx,32,44+i*40,i===index?172:296,12,6,'#dfe8ef');ctx.restore()})}
  function drawNode(ctx,x,y,num,title,copy,p){withAlpha(ctx,p,()=>{ctx.save();ctx.translate(0,(1-p)*38);ctx.translate(x+100,y+105);ctx.scale(.94+p*.06,.94+p*.06);ctx.translate(-100,-105);rounded(ctx,0,0,200,210,26,C.white,'#d6e8f3');rounded(ctx,28,28,48,48,14,'#e1f5fd');text(ctx,num,52,60,20,C.blue,'800','center');text(ctx,title,28,135,28,C.navy,'700');text(ctx,copy,28,175,17,'#657b8d','400');ctx.restore()})}
  function drawFrame(ctx,input){
    const t=clamp(Number(input)||0,0,D),intro=ease(seg(t,0,.85)),manual=ease(seg(t,.45,2.5)),convert=ease(seg(t,3.15,5.05));
    ctx.clearRect(0,0,W,H);const bg=ctx.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#ffffff');bg.addColorStop(.62,'#f7fbfe');bg.addColorStop(1,'#eef8fd');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#bed7e8';ctx.globalAlpha=.28;for(let y=19;y<H;y+=38)for(let x=19;x<W;x+=38){ctx.beginPath();ctx.arc(x,y,1.4,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;
    const glow=ctx.createRadialGradient(1800,-70,0,1800,-70,440);glow.addColorStop(0,'#cfefff');glow.addColorStop(1,'rgba(207,239,255,0)');ctx.fillStyle=glow;ctx.fillRect(1360,-510,880,880);
    withAlpha(ctx,intro,()=>{rounded(ctx,92,60,66,66,18,C.navy);text(ctx,'LC',125,103,27,C.white,'800','center');text(ctx,'LANGUAGE',180,89,17,C.navy,'700');text(ctx,'CENTER CHILE',180,113,17,C.navy,'700');text(ctx,'AUTOMATIZA TU NEGOCIO EN 7 PASOS',1828,99,17,'#557187','400','right');text(ctx,'De repetitivo a claro y medible',92,218,66,C.navy,'800');text(ctx,'Una tarea deja de ser ruido cuando puedes ver sus pasos y comprobar el resultado.',96,276,27,C.muted)});
    const by=342,bw=600,bh=510;panel(ctx,92,by,bw,bh,'before',1-convert*.82,convert*-62,1-convert*.04);
    withAlpha(ctx,1-convert*.82,()=>{ctx.save();ctx.translate(convert*-62,0);text(ctx,'ANTES',134,400,18,'#6b8092','800');text(ctx,'Tarea repetida',134,452,42,C.navy,'700');[[162,504],[206,526],[250,548]].forEach((p,i)=>drawPaper(ctx,p[0],p[1],i,ease(seg(t,.7+i*.38,1.55+i*.38))));withAlpha(ctx,manual,()=>{ctx.save();ctx.translate(487,642);ctx.rotate(seg(t,1.3,3.5)*290*Math.PI/180);ctx.strokeStyle=C.amber;ctx.lineWidth=11;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,0,104,-1.15,4.45);ctx.stroke();ctx.fillStyle=C.amber;ctx.beginPath();ctx.moveTo(92,-75);ctx.lineTo(120,-58);ctx.lineTo(112,-91);ctx.closePath();ctx.fill();ctx.restore()});const warning=ease(seg(t,1.7,2.5));withAlpha(ctx,warning,()=>{rounded(ctx,375,785+(1-warning)*18,270,50,25,'#fff3cd','#f1d886');text(ctx,'Copiar · buscar · corregir',510,817+(1-warning)*18,17,'#765300','700','center')});ctx.restore()});
    const cx=862,cy=597;rounded(ctx,cx,cy,162,8,4,C.line);withAlpha(ctx,convert,()=>rounded(ctx,cx,cy,162*convert,8,4,C.cyan));withAlpha(ctx,seg(t,3.2,3.65),()=>{const ox=943+(convert-.5)*110;ctx.fillStyle=C.white;ctx.beginPath();ctx.arc(ox,601,17,0,Math.PI*2);ctx.fill();ctx.strokeStyle=C.cyan;ctx.lineWidth=7;ctx.stroke()});
    const ax=1032,after=ease(seg(t,4.25,5.15));panel(ctx,ax,by,796,bh,'after',after,(1-after)*55);withAlpha(ctx,after,()=>{ctx.save();ctx.translate((1-after)*55,0);text(ctx,'DESPUÉS',1074,400,18,'#007bb8','800');text(ctx,'Proceso visible',1074,452,42,C.navy,'700');ctx.restore()});
    const nodeY=512;drawNode(ctx,1074,nodeY,'01','Entrada','Qué inicia la tarea',ease(seg(t,4.65,5.45)));drawNode(ctx,1324,nodeY,'02','Acción','Qué haces y decides',ease(seg(t,5.43,6.23)));drawNode(ctx,1574,nodeY,'03','Evidencia','Cómo compruebas',ease(seg(t,6.21,7.01)));
    [[1274,5.35,6.1],[1524,6.8,7.55]].forEach(([x,a,b])=>{rounded(ctx,x,614,50,6,3,C.line);const p=ease(seg(t,a,b));if(p)rounded(ctx,x,614,50*p,6,3,C.cyan)});
    const evidence=ease(seg(t,7.45,8.4));withAlpha(ctx,evidence,()=>{const y=742+(1-evidence)*25;rounded(ctx,1074,y,712,72,20,C.navy);text(ctx,'Resultado verificable',1102,y+45,21,C.white,'700');[['Tiempo',1504],['Errores',1610],['Evidencia',1717]].forEach(([label,x])=>{ctx.fillStyle=C.cyan;ctx.beginPath();ctx.arc(x,y+36,5,0,Math.PI*2);ctx.fill();text(ctx,label,x+12,y+42,17,'#ccecff')})});
    const closing=ease(seg(t,8.55,9.45));withAlpha(ctx,closing,()=>{const y=932+(1-closing)*28;rounded(ctx,92,y,1736,82,24,C.navy);text(ctx,'Elige una tarea · ordena el proceso · define cómo medirlo',960,y+53,28,C.white,'700','center')});ctx.fillStyle=C.cyan;ctx.fillRect(0,H-8,W*(t/D),8);
  }
  return {width:W,height:H,duration:D,drawFrame};
});
