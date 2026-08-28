document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu');
  const links=document.querySelector('.navlinks');
  if(menu&&links){menu.addEventListener('click',()=>{
    const isOpen=links.dataset.open==='true';
    links.dataset.open=isOpen?'false':'true';
    links.style.display=isOpen?'none':'flex';
    if(!isOpen){Object.assign(links.style,{position:'absolute',top:'66px',left:'0',right:'0',background:'#f5f2eb',padding:'20px',flexDirection:'column',borderBottom:'1px solid rgba(17,22,29,.14)'})}
  })}
});
