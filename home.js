// Existing binv-data.json remains the only source for public content.
fetch('/binv-data.json', {cache:'no-cache'}).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(data=>{
 const make=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;return e;};
 const focus=document.querySelector('.now-layout>div:last-child');
 if(Array.isArray(data.now?.building)){
  focus.querySelectorAll('.focus-item').forEach(e=>e.remove());
  data.now.building.slice().reverse().forEach((t,index)=>{const a=make('a');a.className='focus-item';a.href='/now';a.append(make('small',String(data.now.building.length-index).padStart(2,'0')+' / BUILDING'),make('h3',t+' '));focus.prepend(a);});
 }
 if(data.updated){const t=document.querySelector('.update-label time');t.dateTime=data.updated;t.textContent=data.updated;}
 if(Array.isArray(data.ideas))['seed','growing','building','built'].forEach((status,i)=>{document.querySelectorAll('.flow-stage b')[i].textContent=data.ideas.filter(x=>x.status===status).length;});
 if(Array.isArray(data.notes)){
  const box=document.querySelector('.paper .wrap');box.querySelectorAll('.note-row').forEach(e=>e.remove());
  data.notes.slice().sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,3).forEach(n=>{
   const a=make('a');a.className='note-row';a.href='/notes?n='+encodeURIComponent(n.slug);
   const meta=make('small'),time=make('time',n.date);time.dateTime=n.date;meta.append(make('b',n.series),time);
   const body=make('div');body.append(make('h3',n.title),make('p',n.summary));const arrow=make('span','');arrow.className='arrow';arrow.setAttribute('aria-hidden','true');a.append(meta,body,arrow);box.append(a);
  });
 }
}).catch(()=>{/* Readable HTML snapshot stays available if the request fails. */});
