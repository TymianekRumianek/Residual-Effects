(() => {
  const pages = new Set(['home','about','research','bulletin','apply','archive']);
  const $ = (s) => document.querySelector(s);
  function showPage(name){
    if(!pages.has(name)) name='home';
    document.querySelectorAll('.page').forEach(el=>el.classList.toggle('active',el.id==='page-'+name));
    document.querySelectorAll('.nav-link').forEach(el=>{const yes=el.dataset.page===name;el.classList.toggle('selected',yes);el.setAttribute('aria-current',yes?'page':'false')});
    history.replaceState(null,'','#'+name);
    if(window.scrollY>200) document.querySelector('.navigation').scrollIntoView({behavior:'smooth',block:'start'});
  }
  document.querySelectorAll('[data-page],[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page||b.dataset.go)));
  document.querySelectorAll('[data-program]').forEach(b=>b.addEventListener('click',()=>{showPage('apply');$('#program').value=b.dataset.program}));
  window.addEventListener('hashchange',()=>showPage(location.hash.slice(1)));
  showPage(location.hash.slice(1)||'home');
  const now=()=>new Date().toLocaleTimeString('pl-PL',{hour12:false});
  const tick=()=>{$('#clock').textContent=now()};tick();setInterval(tick,1000);
  $('#sync-date').textContent='21.11.2026';
  // Dekoracyjny monitor bez rzeczywistych danych pacjentów.
  setInterval(()=>{$('#console-value').textContent=(77.4+Math.random()*1.2).toFixed(2)},2400);
  // Jedyny licznik jest jawnie oznaczony jako wartość pokazowa.
  $('#visitor-count').textContent='004182';
  // Dźwięk generowany lokalnie, tylko po kliknięciu. Nic nie gra automatycznie.
  let audioCtx=null, soundOn=false;
  function blip(f=460,d=.09){if(!soundOn)return; try {audioCtx??=new (window.AudioContext||window.webkitAudioContext)();const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type='sine';osc.frequency.value=f;gain.gain.setValueAtTime(.015,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+d);osc.connect(gain).connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+d)} catch(e){}}
  $('#sound-toggle').addEventListener('click',()=>{soundOn=!soundOn;$('#sound-toggle').textContent=soundOn?'◖ DŹWIĘK: WŁ.':'◖ DŹWIĘK: WYŁ.';$('#sound-toggle').setAttribute('aria-pressed',String(soundOn));blip(620,.13)});
  document.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>blip(340,.065)));
  const terminal=$('#terminal');
  ['#open-terminal','#archive-terminal','#footer-terminal'].forEach(x=>$(x).addEventListener('click',()=>{terminal.showModal();$('#access-code').focus()}));
  $('#close-terminal').addEventListener('click',()=>terminal.close());
  terminal.addEventListener('click',e=>{if(e.target===terminal)terminal.close()});
  const checkCode=()=>{const val=$('#access-code').value.trim().toUpperCase();$('#terminal-status').textContent=val?'ODRZUCONO / IDENTYFIKATOR NIEPOTWIERDZONY':'WPROWADŹ IDENTYFIKATOR';};
  $('#terminal-submit').addEventListener('click',checkCode);
  $('#access-code').addEventListener('keydown',e=>{if(e.key==='Enter')checkCode()});
  const form=$('#application-form');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const endpoint=(window.RE_CONFIG&&window.RE_CONFIG.formEndpoint||'').trim();
    const status=$('#form-status');
    if(!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)){
      status.textContent='FORMULARZ NIEAKTYWNY: administrator nie skonfigurował jeszcze odbioru zgłoszeń. Dane nie zostały wysłane.';return;
    }
    const button=form.querySelector('[type=submit]');button.disabled=true;status.textContent='WYSYŁANIE...';
    try{
      const res=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(!res.ok)throw new Error('HTTP '+res.status);
      status.textContent='ZGŁOSZENIE ZOSTAŁO WYSŁANE.';form.reset();
    }catch(err){status.textContent='NIE UDAŁO SIĘ WYSŁAĆ ZGŁOSZENIA. SPRÓBUJ PONOWNIE PÓŹNIEJ.'}
    finally{button.disabled=false}
  });
})();
