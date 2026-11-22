({MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env);F=require('fs')
for(d of F.readdirSync(I)){
R=F.readFileSync(I+'/'+d+'/level.txt','utf8').split('\n');W=R[0].length;G=R.join('');A=G.indexOf('@');H=A/W|0;X=A%W;S='';Y=[[-W,'u'],[W,'d'],[-1,'l'],[1,'r']]
for(x=0;x<W;x++)for(s of[-W,W]){
D=H*W+x+s;if(G[D]=='#')continue
K=new Set(Q=[D])
while(c=Q.pop())for(k of Y)if(G[n=c+k[0]]!='#'&&(n/W|0)^H&&!K.has(n))K.add(n),Q.push(n)
S+=X<x?'r'.repeat(x-X):'l'.repeat(X-x);X=x
P=H*W+x;K.add(P)
B=[...K].filter(c=>'$*'.includes(G[c]));q=[[P,B,'']];V={};h=0
while(h<q.length){
[p,b,s]=q[h++]
if(p==P&&b.every(c=>G[c]>='*')){S+=s;break}
for([k,t]of Y){
n=p+k;if(!K.has(n))continue
j=b.indexOf(n)
if(j<0)b2=b
else{m=n+k;if(!K.has(m)||b.includes(m)||G[m]<'*'&&(!K.has(m-W)||!K.has(m+W))&&(!K.has(m-1)||!K.has(m+1)))continue;b2=b.map(e=>e-n?e:m).sort((a,c)=>a-c)}
K2=n+','+b2;z=[n,b2,s+t];V[K2]||(V[K2]=1,j<0?q[--h]=z:q.push(z))
}
}
}
F.mkdirSync(T=O+'/'+d,{recursive:true});F.writeFileSync(T+'/solution.txt',S+'\n')
}