const a0_0x57c62d=a0_0x2703;(function(_0x32c046,_0x1ff583){const _0x7ecb0b=a0_0x2703,_0x55aee5=_0x32c046();while(!![]){try{const _0x5a8048=parseInt(_0x7ecb0b(0x155))/0x1+-parseInt(_0x7ecb0b(0x164))/0x2+-parseInt(_0x7ecb0b(0x12b))/0x3+-parseInt(_0x7ecb0b(0x185))/0x4+-parseInt(_0x7ecb0b(0x19b))/0x5*(-parseInt(_0x7ecb0b(0x19f))/0x6)+parseInt(_0x7ecb0b(0x147))/0x7+-parseInt(_0x7ecb0b(0x10a))/0x8*(-parseInt(_0x7ecb0b(0x17e))/0x9);if(_0x5a8048===_0x1ff583)break;else _0x55aee5['push'](_0x55aee5['shift']());}catch(_0x4736f7){_0x55aee5['push'](_0x55aee5['shift']());}}}(a0_0x3b11,0xa1cf4));const enemies=[{'id':0x1,'name':'Dragão\x20Jovem','image':a0_0x57c62d(0x170),'maxHealth':0xc8,'damageRange':[0x5,0xf]},{'id':0x2,'name':'Cavaleiro\x20Negro','image':a0_0x57c62d(0x16e),'maxHealth':0x352,'damageRange':[0x4,0x8]},{'id':0x3,'name':a0_0x57c62d(0x18e),'image':a0_0x57c62d(0x183),'maxHealth':0x190,'damageRange':[0x8,0x10]},{'id':0x4,'name':a0_0x57c62d(0x17a),'image':a0_0x57c62d(0x162),'maxHealth':0x226,'damageRange':[0xa,0x14]}];let currentEnemyIndex=0x0,currentEnemy={...enemies[currentEnemyIndex]},enemyHealth=currentEnemy[a0_0x57c62d(0x1b4)],playerHealth=0x64,playerDiscard=0x3,selectedIndices=[],deck=[],playerHand=[],playerMaxHealth=0x64,playerDefenseModifier=0x1,playerAttackModifier=0x1,baseDiscardCount=0x3,discardPile=[],isReshuffling=![];const CRITICAL_CHANCE=0.07,CRITICAL_DAMAGE_PER_CARD=0.15,values=['2','3','4','5','6','7','8','9','10','J','Q','K','A'],suits=['♠','♣','♥','♦'];function initGame(){renderEnemyTrack(),startBattle();}function renderEnemyTrack(){const _0x35101b=a0_0x57c62d,_0x2a79e4=document[_0x35101b(0x19a)](_0x35101b(0x113));_0x2a79e4[_0x35101b(0x18c)]='',enemies[_0x35101b(0x175)]((_0x5028b6,_0x51007a)=>{const _0x3ee3b8=_0x35101b,_0x4005e0=document[_0x3ee3b8(0x1ad)](_0x3ee3b8(0x192));_0x4005e0[_0x3ee3b8(0x11f)]=_0x3ee3b8(0x181)+(_0x51007a<currentEnemyIndex?_0x3ee3b8(0x189):_0x51007a===currentEnemyIndex?_0x3ee3b8(0x11c):_0x3ee3b8(0x137)),_0x4005e0['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22'+_0x5028b6[_0x3ee3b8(0x173)]+_0x3ee3b8(0x1a6)+_0x5028b6[_0x3ee3b8(0x13f)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>'+_0x5028b6['name']+_0x3ee3b8(0x18a),_0x2a79e4[_0x3ee3b8(0x138)](_0x4005e0);});}function initializeDeck(){const _0x3438e7=a0_0x57c62d;deck=[];for(let _0x16a212 of suits){for(let _0x42a261 of values){const _0x5b054a={'value':_0x42a261,'suit':_0x16a212,'color':_0x16a212==='♥'||_0x16a212==='♦'?_0x3438e7(0x150):'black','isCritical':Math[_0x3438e7(0x16d)]()<CRITICAL_CHANCE};deck[_0x3438e7(0x1ac)](_0x5b054a);}}deck[_0x3438e7(0x193)](()=>Math[_0x3438e7(0x16d)]()-0.6);}function startBattle(){const _0x31e340=a0_0x57c62d;currentEnemy={...enemies[currentEnemyIndex]},enemyHealth=currentEnemy[_0x31e340(0x1b4)],playerDiscard=baseDiscardCount,document['getElementById'](_0x31e340(0x12f))[_0x31e340(0x10e)]=playerDiscard,document[_0x31e340(0x163)](_0x31e340(0x104))[_0x31e340(0x191)]=currentEnemy['image'];const _0x1135bd=document[_0x31e340(0x19a)](_0x31e340(0x1a8));_0x1135bd['innerHTML']=''+currentEnemy[_0x31e340(0x13f)],selectedIndices=[],initializeDeck(),dealCards(),updateHealth(),document[_0x31e340(0x19a)](_0x31e340(0x176))[_0x31e340(0x18c)]='',document['getElementById'](_0x31e340(0x178))[_0x31e340(0x11a)]=![],document[_0x31e340(0x19a)](_0x31e340(0x178))[_0x31e340(0x159)][_0x31e340(0x10f)]='1',document[_0x31e340(0x19a)](_0x31e340(0x12f))[_0x31e340(0x10e)]=playerDiscard,log(_0x31e340(0x1b1)+currentEnemy[_0x31e340(0x13f)]+'!');}function dealCards(){const _0x5363f3=a0_0x57c62d;playerHand=[];for(let _0xae2194=0x0;_0xae2194<0x7;_0xae2194++){if(deck[_0x5363f3(0x198)]===0x0)break;let _0x26a2c1=deck[_0x5363f3(0x19e)]();playerHand[_0x5363f3(0x1ac)](setCriticalStatus(_0x26a2c1));}renderHand();}function renderHand(){const _0x36c8b3=a0_0x57c62d,_0x25cb37=document['getElementById'](_0x36c8b3(0x12a));_0x25cb37[_0x36c8b3(0x18c)]='',selectedIndices=[],playerHand[_0x36c8b3(0x175)]((_0x264ef6,_0x579df1)=>{const _0xb56e0e=_0x36c8b3,_0x5b713b=_0x264ef6[_0xb56e0e(0x154)]?_0xb56e0e(0x135):'',_0x356ec5=document['createElement']('div');_0x356ec5['className']=_0xb56e0e(0x169)+_0x264ef6[_0xb56e0e(0x1b2)]+'\x20'+_0x5b713b,_0x356ec5[_0xb56e0e(0x18c)]='<div\x20class=\x22card-value\x22>'+_0x264ef6['value']+_0xb56e0e(0x167)+_0x264ef6['suit']+_0xb56e0e(0x188),_0x356ec5[_0xb56e0e(0x1a3)][_0xb56e0e(0x14c)]=_0x579df1,_0x356ec5['onclick']=()=>{toggleCard(_0x579df1,_0x356ec5),updateDamagePreview();},_0x25cb37['appendChild'](_0x356ec5);}),updateDamagePreview();}function setCriticalStatus(_0x3404f7){const _0x2ead7e=a0_0x57c62d;return!_0x3404f7[_0x2ead7e(0x1b0)]('isCritical')&&(_0x3404f7['isCritical']=Math[_0x2ead7e(0x16d)]()<CRITICAL_CHANCE),_0x3404f7;}function toggleCard(_0x5d539a,_0x13c6f1){const _0x39e9ca=a0_0x57c62d,_0x171705=selectedIndices[_0x39e9ca(0x16a)](_0x5d539a),_0x3899ec=playerHand[_0x5d539a];_0x171705===-0x1?selectedIndices['length']<0x5&&(selectedIndices[_0x39e9ca(0x1ac)](_0x5d539a),_0x13c6f1[_0x39e9ca(0x187)]['add'](_0x39e9ca(0x149)),_0x3899ec[_0x39e9ca(0x154)]&&(_0x13c6f1[_0x39e9ca(0x159)][_0x39e9ca(0x13b)]=_0x39e9ca(0x13c),_0x13c6f1[_0x39e9ca(0x159)][_0x39e9ca(0x114)]=_0x39e9ca(0x14b))):(selectedIndices[_0x39e9ca(0x11e)](_0x171705,0x1),_0x13c6f1[_0x39e9ca(0x187)]['remove'](_0x39e9ca(0x149)),_0x3899ec[_0x39e9ca(0x154)]&&(_0x13c6f1[_0x39e9ca(0x159)][_0x39e9ca(0x13b)]='none')),updateDamagePreview();}function updateDamagePreview(){const _0x4778ff=a0_0x57c62d,_0x18bdc0=document[_0x4778ff(0x19a)](_0x4778ff(0x14d));if(selectedIndices[_0x4778ff(0x198)]===0x0)_0x18bdc0[_0x4778ff(0x144)]=_0x4778ff(0x166);else{const _0x7ebf4f=selectedIndices[_0x4778ff(0x186)](_0x12db34=>playerHand[_0x12db34]),_0x321beb=evaluateHand(_0x7ebf4f),_0x1952d9=_0x7ebf4f['filter'](_0x56ce40=>_0x56ce40['isCritical'])[_0x4778ff(0x198)],_0x5ba345=Math[_0x4778ff(0x10b)](_0x321beb['damage']*(0x1+Math[_0x4778ff(0x1a2)](_0x1952d9,0x5)*CRITICAL_DAMAGE_PER_CARD));_0x18bdc0[_0x4778ff(0x144)]=_0x4778ff(0x190)+_0x321beb['name']+_0x4778ff(0x182)+_0x321beb[_0x4778ff(0x127)]+'\x20'+(_0x1952d9>0x0?_0x4778ff(0x136)+_0x1952d9+_0x4778ff(0x1a0)+_0x1952d9*0xf+'%)':'')+_0x4778ff(0x1ae)+_0x5ba345;}}function evaluateHand(_0xc660f){const _0x1f2c58=a0_0x57c62d,_0x405a6c={},_0x1f55bb={};_0xc660f['forEach'](_0x255998=>{const _0x165970=a0_0x2703;_0x405a6c[_0x255998['value']]=(_0x405a6c[_0x255998[_0x165970(0x10c)]]||0x0)+0x1,_0x1f55bb[_0x255998[_0x165970(0x109)]]=(_0x1f55bb[_0x255998[_0x165970(0x109)]]||0x0)+0x1;});const _0x2a1e7a=Object[_0x1f2c58(0x132)](_0x405a6c)[_0x1f2c58(0x13b)](_0x22af2a=>_0x22af2a===0x2)[_0x1f2c58(0x198)],_0x7732ac=Object[_0x1f2c58(0x132)](_0x405a6c)[_0x1f2c58(0x13b)](_0x58f516=>_0x58f516===0x3)[_0x1f2c58(0x198)],_0x17a73d=Object[_0x1f2c58(0x132)](_0x405a6c)[_0x1f2c58(0x13b)](_0x34f61d=>_0x34f61d===0x4)[_0x1f2c58(0x198)],_0x377d2a=Object[_0x1f2c58(0x132)](_0x1f55bb)['some'](_0x325505=>_0x325505>=0x5),_0x93e1d2=checkStraight(_0x405a6c),_0xa6b37d=Object[_0x1f2c58(0x12e)](_0x405a6c)[_0x1f2c58(0x186)](_0x505d79=>{if(_0x505d79==='A')return 0xe;if(_0x505d79==='K')return 0xd;if(_0x505d79==='Q')return 0xc;if(_0x505d79==='J')return 0xb;if(_0x505d79==='10')return 0xa;return parseInt(_0x505d79);})['sort']((_0x2d3850,_0x43f556)=>_0x2d3850-_0x43f556),_0x254bc8=_0xa6b37d[_0x1f2c58(0x198)]>=0x5&&(_0xa6b37d[_0xa6b37d[_0x1f2c58(0x198)]-0x1]-_0xa6b37d[_0xa6b37d[_0x1f2c58(0x198)]-0x5]===0x4||_0xa6b37d[_0x1f2c58(0x13d)](0xe)&&_0xa6b37d[_0x1f2c58(0x13d)](0x2)&&_0xa6b37d[_0x1f2c58(0x13d)](0x3)&&_0xa6b37d[_0x1f2c58(0x13d)](0x4)&&_0xa6b37d[_0x1f2c58(0x13d)](0x5)),_0x3ea0be=_0x377d2a&&_0xa6b37d[_0x1f2c58(0x13d)](0xa)&&_0xa6b37d[_0x1f2c58(0x13d)](0xb)&&_0xa6b37d[_0x1f2c58(0x13d)](0xc)&&_0xa6b37d[_0x1f2c58(0x13d)](0xd)&&_0xa6b37d[_0x1f2c58(0x13d)](0xe),_0x3b0ed9=_0x377d2a&&_0x254bc8&&!_0x3ea0be;if(_0x3ea0be)return{'name':'Yagai\x20夜ガイ','damage':Math[_0x1f2c58(0x10b)](0x7d0*playerAttackModifier)};if(_0x17a73d)return{'name':_0x1f2c58(0x199),'damage':Math[_0x1f2c58(0x10b)](0x15e*playerAttackModifier)};if(_0x7732ac&&_0x2a1e7a)return{'name':'Cataclismo\x20Celestial','damage':Math[_0x1f2c58(0x10b)](0xa0*playerAttackModifier)};if(_0x3b0ed9)return{'name':'Fúria\x20do\x20Conquistador','damage':Math[_0x1f2c58(0x10b)](0x258*playerAttackModifier)};if(_0x377d2a)return{'name':_0x1f2c58(0x116),'damage':Math['floor'](0x6e*playerAttackModifier)};if(_0x93e1d2)return{'name':_0x1f2c58(0x19c),'damage':Math[_0x1f2c58(0x10b)](0x5a*playerAttackModifier)};if(_0x7732ac)return{'name':_0x1f2c58(0x18d),'damage':Math['floor'](0x46*playerAttackModifier)};if(_0x2a1e7a===0x2)return{'name':_0x1f2c58(0x15b),'damage':Math[_0x1f2c58(0x10b)](0x1e*playerAttackModifier)};if(_0x2a1e7a===0x1)return{'name':'Corte\x20Duplo','damage':Math['floor'](0x14*playerAttackModifier)};return{'name':'Corte\x20Rápido','damage':Math['floor'](0xa*playerAttackModifier)};}function checkStraight(_0x582271){const _0x23b20d=['2','3','4','5','6','7','8','9','10','J','Q','K','A'],_0xccd96e=_0x23b20d['reduce']((_0x256b2d,_0x5ea786,_0x131d70)=>{const _0x3f2d82=a0_0x2703;if(_0x582271[_0x5ea786])_0x256b2d[_0x3f2d82(0x1ac)](_0x131d70);return _0x256b2d;},[]);for(let _0x3e52dd=0x0;_0x3e52dd<=_0xccd96e['length']-0x5;_0x3e52dd++){let _0x299a40=!![];for(let _0x33d5af=0x0;_0x33d5af<0x4;_0x33d5af++){if(_0xccd96e[_0x3e52dd+_0x33d5af+0x1]!==_0xccd96e[_0x3e52dd+_0x33d5af]+0x1){_0x299a40=![];break;}}if(_0x299a40)return!![];}if(_0x582271['A']&&_0x582271['2']&&_0x582271['3']&&_0x582271['4']&&_0x582271['5'])return!![];return![];}function playHand(){const _0x2ca59f=a0_0x57c62d;if(selectedIndices[_0x2ca59f(0x198)]===0x0)return;const _0x42099b=selectedIndices[_0x2ca59f(0x186)](_0x344e86=>playerHand[_0x344e86]),_0x4d1c51=evaluateHand(_0x42099b),_0xcb2caf=_0x42099b['filter'](_0x364d46=>_0x364d46[_0x2ca59f(0x154)])['length'],_0x1dd1e2=0x1+Math[_0x2ca59f(0x1a2)](_0xcb2caf,0x5)*CRITICAL_DAMAGE_PER_CARD,_0x3bf871=Math[_0x2ca59f(0x10b)](_0x4d1c51['damage']*_0x1dd1e2);enemyHealth-=_0x3bf871,log('Jogador\x20usou\x20'+_0x4d1c51[_0x2ca59f(0x13f)]+_0x2ca59f(0x16c)+_0xcb2caf+_0x2ca59f(0x141)+_0x3bf871+'\x20de\x20dano!'),updateHealth(),_0xcb2caf>0x0?showCriticalAttackAnimation(_0xcb2caf)[_0x2ca59f(0x165)](()=>{enemyHealth>0x0?enemyCounterAttack():finishTurn(),checkGameOver();}):(applyDamageAnimation(_0x2ca59f(0x1a5)),enemyHealth>0x0?setTimeout(()=>{enemyCounterAttack(),checkGameOver();},0x320):(finishTurn(),checkGameOver()));}function a0_0x3b11(){const _0x3a43c1=['scrollTop','heal','3334758qncTJj','special-attack-overlay','selected','blue-particle','filter\x200.3s\x20ease','index','damage-preview','modal-content','O\x20herói\x20superou\x20todos\x20os\x20desafios!','red','reward-screen','modal-image','add','isCritical','404089BcwvSH','victory','height','flex','style','offsetHeight','Corte\x20Estelar','discard','scrollHeight','innerWidth','all\x20','player-health','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-suit\x20bottom\x22>','assets/images/anciao.jpg','querySelector','1793476NnXXSy','then','Selecione\x20cartas\x20para\x20ver\x20o\x20dano\x20potencial','</div><div\x20class=\x22card-suit\x22>','\x20de\x20vida!','card\x20','indexOf','game-modal','\x20com\x20','random','assets/images/dd.jpg','easeOutExpo','assets/images/dbb.jpg','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-suit\x22>','O\x20herói\x20foi\x20derrotado\x20em\x20batalha...','image','Não\x20há\x20mais\x20cartas\x20disponíveis!','forEach','log','<span\x20class=\x22defeat-icon\x22>💀</span>','play-btn','animation','Demônio\x20Ancião','display','setProperty','offsetWidth','18pjTZoP','modal-submessage','shuffle-card','enemy-status\x20','\x20|\x20Dano\x20Base:\x20','assets/images/lith.jpg','defense','4770700ImjvOq','map','classList','</div>','defeated','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','some','innerHTML','Trindade\x20Divina','Lich\x20Rei','Você\x20escolheu\x20descarte\x20e\x20agora\x20tem\x20+1\x20descarte\x20por\x20batalha!','Jogada:\x20','src','div','sort','#ffd0d0','selected-reward','attack','left','length','Apocalipse\x20do\x20Imperador','getElementById','15695vOKOTN','Golpe\x20Mortal','Nova\x20Jornada','pop','1062HKYxCx','\x20(+','special-attack-text','min','dataset','.energy-particle','enemy-container','\x22\x20alt=\x22','modal-action-button','nickMonster','enemy-health','modal-title','Atenção:\x20não\x20há\x20cartas\x20suficientes\x20no\x20baralho!','push','createElement','\x20|\x20Dano\x20Total:\x20','.card.critical.selected','hasOwnProperty','Você\x20está\x20enfrentando\x20','color','Reiniciar\x20Jornada','maxHealth','enemy-attack','modal-quit-button','<div\x20class=\x22log-entry\x22>','shuffle-bg-pattern','Você\x20escolheu\x20defesa\x20e\x20agora\x20recebe\x2010%\x20menos\x20dano!','#enemy-container\x20.portrait\x20img','body','Jornada\x20Concluída!','Uma\x20nova\x20jornada\x20começa...','translate(-50%,\x20-50%)','suit','6476216RkZnsN','floor','value','querySelectorAll','innerText','opacity','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-value\x22\x20style=\x22text-align:\x20right\x22>','getBoundingClientRect','player-container','enemy-track','transition','specialAttackBeam\x205s\x20forwards','Aurora\x20Celestial','.reward-card','Todos\x20os\x20progressos\x20serão\x20perdidos.','Descartes\x20restantes:\x20','disabled','onclick','current','black','splice','className','0.5','Você\x20escolheu\x20ataque\x20e\x20agora\x20causa\x2010%\x20mais\x20dano!','\x20contra-ataca\x20causando\x20','Fim\x20da\x20Jornada','none','top','defeat','damage','\x20de\x20dano!','0.8','player-hand','908865oUKDyz','innerHeight','remove','keys','discard-count','has','special-attack-beam','values','modal-message','offsetLeft','critical','|\x20Críticas:\x20','future','appendChild','#f0f4ff','.modal-content','filter','hue-rotate(45deg)\x20brightness(1.2)','includes','<span\x20class=\x22victory-icon\x22>🏆</span>','name','Você\x20derrotou\x20','\x20carta(s)\x20crítica(s)\x20e\x20causou\x20','Você\x20escolheu\x20cura\x20e\x20recuperou\x20','width','textContent'];a0_0x3b11=function(){return _0x3a43c1;};return a0_0x3b11();}function showCriticalAttackAnimation(_0xc9162a){return new Promise(_0x401211=>{const _0x2c4796=a0_0x2703,_0x1646ca=document[_0x2c4796(0x19a)](_0x2c4796(0x112)),_0x5236d5=document[_0x2c4796(0x1ad)](_0x2c4796(0x192));_0x5236d5['className']='player-aura',_0x1646ca['appendChild'](_0x5236d5);const _0x53512a=document['querySelectorAll'](_0x2c4796(0x1af));_0x53512a[_0x2c4796(0x175)]((_0x303f7b,_0x57a814)=>{const _0x42b07f=_0x2c4796,_0x472daa=_0x303f7b[_0x42b07f(0x111)](),_0x7adc4a=0xa+_0xc9162a*0x2;for(let _0x269f82=0x0;_0x269f82<_0x7adc4a;_0x269f82++){const _0x20781e=document[_0x42b07f(0x1ad)]('div');_0x20781e['className']=_0x42b07f(0x14a),_0x20781e[_0x42b07f(0x159)][_0x42b07f(0x197)]=_0x472daa['left']+_0x472daa[_0x42b07f(0x143)]/0x2+'px',_0x20781e['style'][_0x42b07f(0x125)]=_0x472daa[_0x42b07f(0x125)]+_0x472daa[_0x42b07f(0x157)]/0x2+'px',document['body'][_0x42b07f(0x138)](_0x20781e),anime({'targets':_0x20781e,'left':_0x1646ca[_0x42b07f(0x134)]+_0x1646ca['offsetWidth']/0x2,'top':_0x1646ca['offsetTop']+_0x1646ca[_0x42b07f(0x15a)]/0x2,'scale':[0x1,0x0],'opacity':[0x1,0x0],'duration':0x320,'delay':anime[_0x42b07f(0x16d)](0x0,0x12c),'easing':_0x42b07f(0x16f),'complete':()=>_0x20781e['remove']()});}}),setTimeout(()=>{const _0x735849=_0x2c4796;_0x5236d5[_0x735849(0x12d)](),_0x401211();},0x3e8);});}function enemyCounterAttack(){const _0x490394=a0_0x57c62d,[_0x21ce64,_0x583cae]=currentEnemy['damageRange'];let _0x438e37=Math[_0x490394(0x10b)](Math[_0x490394(0x16d)]()*(_0x583cae-_0x21ce64+0x1))+_0x21ce64;_0x438e37=Math[_0x490394(0x10b)](_0x438e37*(0x1-(playerDefenseModifier-0x1))),playerHealth-=_0x438e37,log(currentEnemy[_0x490394(0x13f)]+_0x490394(0x122)+_0x438e37+_0x490394(0x128)),createEnemyAttackAnimation(),applyDamageAnimation(_0x490394(0x112)),finishTurn();}async function finishTurn(){const _0x1f4edf=a0_0x57c62d,_0x108312=selectedIndices['map'](_0x1272c0=>playerHand[_0x1272c0]);discardPile[_0x1f4edf(0x1ac)](..._0x108312),selectedIndices['sort']((_0x475b07,_0x49b236)=>_0x49b236-_0x475b07),selectedIndices[_0x1f4edf(0x175)](_0x1e3366=>playerHand[_0x1f4edf(0x11e)](_0x1e3366,0x1));const _0x46d1ba=0x7-playerHand['length'];if(_0x46d1ba>0x0){deck[_0x1f4edf(0x198)]<_0x46d1ba&&discardPile[_0x1f4edf(0x198)]>0x0&&await reshuffleDeck();if(deck[_0x1f4edf(0x198)]===0x0&&discardPile[_0x1f4edf(0x198)]===0x0)log(_0x1f4edf(0x174));else for(let _0x504ddc=0x0;_0x504ddc<_0x46d1ba;_0x504ddc++){if(deck[_0x1f4edf(0x198)]===0x0)break;playerHand[_0x1f4edf(0x1ac)](deck[_0x1f4edf(0x19e)]());}}updateHealth(),renderHand();}async function playDiscard(){const _0x229ec2=a0_0x57c62d;if(selectedIndices[_0x229ec2(0x198)]===0x0||isReshuffling)return;try{isReshuffling=!![];const _0x3c475a=selectedIndices[_0x229ec2(0x186)](_0x5a8d67=>playerHand[_0x5a8d67]);discardPile['push'](..._0x3c475a),selectedIndices[_0x229ec2(0x193)]((_0xb0583a,_0x2a10a8)=>_0x2a10a8-_0xb0583a),selectedIndices[_0x229ec2(0x175)](_0x4eb23f=>{const _0xa90408=_0x229ec2;playerHand[_0xa90408(0x11e)](_0x4eb23f,0x1);});const _0x1208c5=0x7-playerHand['length'];if(_0x1208c5>0x0){deck['length']<_0x1208c5&&discardPile[_0x229ec2(0x198)]>0x0&&await reshuffleDeck();let _0xc31a08=0x0;while(_0xc31a08<_0x1208c5&&(deck[_0x229ec2(0x198)]>0x0||discardPile[_0x229ec2(0x198)]>0x0)){deck[_0x229ec2(0x198)]===0x0&&discardPile['length']>0x0&&await reshuffleDeck(),deck[_0x229ec2(0x198)]>0x0&&(playerHand[_0x229ec2(0x1ac)](deck['pop']()),_0xc31a08++);}_0xc31a08<_0x1208c5&&log(_0x229ec2(0x1ab));}discardAtt(),renderHand(),log(_0x229ec2(0x119)+playerDiscard);}finally{isReshuffling=![];}}async function reshuffleDeck(){const _0x3e0ae7=a0_0x57c62d;await showShuffleAnimation();const _0x1aadb3=new Set(playerHand['map'](_0x552afa=>''+_0x552afa[_0x3e0ae7(0x10c)]+_0x552afa[_0x3e0ae7(0x109)]+_0x552afa[_0x3e0ae7(0x1b2)])),_0x55bc3a=discardPile[_0x3e0ae7(0x13b)](_0x5f106b=>!_0x1aadb3[_0x3e0ae7(0x130)](''+_0x5f106b[_0x3e0ae7(0x10c)]+_0x5f106b['suit']+_0x5f106b[_0x3e0ae7(0x1b2)]))[_0x3e0ae7(0x186)](_0x2bc7aa=>({..._0x2bc7aa,'isCritical':_0x2bc7aa['isCritical']}));while(_0x55bc3a[_0x3e0ae7(0x198)]<values[_0x3e0ae7(0x198)]*suits['length']){for(let _0x43b64b of suits){for(let _0x393f70 of values){!_0x55bc3a[_0x3e0ae7(0x18b)](_0x451fc6=>_0x451fc6[_0x3e0ae7(0x10c)]===_0x393f70&&_0x451fc6['suit']===_0x43b64b)&&_0x55bc3a[_0x3e0ae7(0x1ac)]({'value':_0x393f70,'suit':_0x43b64b,'color':_0x43b64b==='♥'||_0x43b64b==='♦'?_0x3e0ae7(0x150):_0x3e0ae7(0x11d),'isCritical':Math[_0x3e0ae7(0x16d)]()<CRITICAL_CHANCE});}}}deck=[..._0x55bc3a];for(let _0x1a16e6=deck[_0x3e0ae7(0x198)]-0x1;_0x1a16e6>0x0;_0x1a16e6--){const _0xcbda2d=Math[_0x3e0ae7(0x10b)](Math[_0x3e0ae7(0x16d)]()*(_0x1a16e6+0x1));[deck[_0x1a16e6],deck[_0xcbda2d]]=[deck[_0xcbda2d],deck[_0x1a16e6]];}discardPile=[],log('Baralho\x20reembaralhado\x20com\x20cartas\x20descartadas!');}async function drawNewCards(_0x570ab4){const _0x125938=a0_0x57c62d;for(let _0x1d6645=0x0;_0x1d6645<_0x570ab4;_0x1d6645++){if(deck['length']===0x0)break;let _0x33c9ef=deck[_0x125938(0x19e)]();!_0x33c9ef[_0x125938(0x1b0)](_0x125938(0x154))&&(_0x33c9ef['isCritical']=Math[_0x125938(0x16d)]()<CRITICAL_CHANCE),playerHand[_0x125938(0x1ac)](_0x33c9ef);}}function a0_0x2703(_0x5d34c0,_0x1f46a4){const _0x3b1166=a0_0x3b11();return a0_0x2703=function(_0x2703c9,_0x439413){_0x2703c9=_0x2703c9-0x100;let _0x2bc8a4=_0x3b1166[_0x2703c9];return _0x2bc8a4;},a0_0x2703(_0x5d34c0,_0x1f46a4);}function discardAtt(){const _0x108079=a0_0x57c62d;playerDiscard>0x0&&(playerDiscard--,document['getElementById'](_0x108079(0x12f))[_0x108079(0x10e)]=playerDiscard,playerDiscard===0x0&&(document[_0x108079(0x19a)](_0x108079(0x178))['disabled']=!![],document[_0x108079(0x19a)]('play-btn')['style'][_0x108079(0x10f)]=_0x108079(0x120)));}function updateHealth(){const _0x38080d=a0_0x57c62d;document['getElementById'](_0x38080d(0x1a9))['style'][_0x38080d(0x143)]=(enemyHealth>0x0?enemyHealth/currentEnemy[_0x38080d(0x1b4)]*0x64:0x0)+'%',document[_0x38080d(0x19a)](_0x38080d(0x160))[_0x38080d(0x159)][_0x38080d(0x143)]=(playerHealth>0x0?playerHealth:0x0)+'%';}function restartGame(){const _0x29add7=a0_0x57c62d;currentEnemyIndex=0x0,playerHealth=0x64,playerMaxHealth=0x64,playerDefenseModifier=0x1,playerAttackModifier=0x1,baseDiscardCount=0x3,renderEnemyTrack(),startBattle(),log(_0x29add7(0x107));}function log(_0x10247e){const _0x42e8e9=a0_0x57c62d,_0x5dbac4=document[_0x42e8e9(0x19a)](_0x42e8e9(0x176));_0x5dbac4[_0x42e8e9(0x18c)]+=_0x42e8e9(0x101)+_0x10247e+_0x42e8e9(0x188),_0x5dbac4[_0x42e8e9(0x145)]=_0x5dbac4[_0x42e8e9(0x15d)];}function showModal(_0x5c89cb){const _0x12ee00=a0_0x57c62d,_0x40c323=document['getElementById'](_0x12ee00(0x16b)),_0x593813=_0x40c323[_0x12ee00(0x163)](_0x12ee00(0x13a));_0x593813[_0x12ee00(0x11f)]=_0x12ee00(0x14e),_0x593813[_0x12ee00(0x187)][_0x12ee00(0x153)](_0x5c89cb);if(_0x5c89cb===_0x12ee00(0x126)){document[_0x12ee00(0x19a)](_0x12ee00(0x1aa))['textContent']=_0x12ee00(0x123),document[_0x12ee00(0x19a)](_0x12ee00(0x133))['textContent']=_0x12ee00(0x172),document['getElementById'](_0x12ee00(0x17f))[_0x12ee00(0x144)]=_0x12ee00(0x118),document[_0x12ee00(0x19a)](_0x12ee00(0x1a7))[_0x12ee00(0x144)]=_0x12ee00(0x1b3);const _0x124db8=document[_0x12ee00(0x19a)](_0x12ee00(0x152));_0x124db8[_0x12ee00(0x18c)]=_0x12ee00(0x177),document[_0x12ee00(0x19a)](_0x12ee00(0x1a7))[_0x12ee00(0x11b)]=()=>{const _0xc7439b=_0x12ee00;_0x40c323[_0xc7439b(0x159)][_0xc7439b(0x17b)]=_0xc7439b(0x124),restartGame();};}else{if(_0x5c89cb==='victory'){document[_0x12ee00(0x19a)](_0x12ee00(0x1aa))[_0x12ee00(0x144)]=_0x12ee00(0x106),document[_0x12ee00(0x19a)](_0x12ee00(0x133))[_0x12ee00(0x144)]=_0x12ee00(0x14f),document[_0x12ee00(0x19a)]('modal-submessage')['textContent']='Todos\x20os\x20inimigos\x20foram\x20derrotados.',document[_0x12ee00(0x19a)](_0x12ee00(0x1a7))['textContent']=_0x12ee00(0x19d);const _0x65bb66=document[_0x12ee00(0x19a)](_0x12ee00(0x152));_0x65bb66[_0x12ee00(0x18c)]=_0x12ee00(0x13e),document['getElementById'](_0x12ee00(0x1a7))[_0x12ee00(0x11b)]=()=>{const _0x5577b5=_0x12ee00;_0x40c323[_0x5577b5(0x159)][_0x5577b5(0x17b)]=_0x5577b5(0x124),restartGame();};}}document[_0x12ee00(0x19a)](_0x12ee00(0x100))[_0x12ee00(0x11b)]=()=>{const _0x41677f=_0x12ee00;_0x40c323[_0x41677f(0x159)][_0x41677f(0x17b)]=_0x41677f(0x124),restartGame();},_0x40c323[_0x12ee00(0x159)][_0x12ee00(0x17b)]=_0x12ee00(0x158);}function showGameOverModal(){const _0x4de4f7=a0_0x57c62d;showModal(_0x4de4f7(0x126));}function showVictoryModal(){const _0x8a28f7=a0_0x57c62d;showModal(_0x8a28f7(0x156));}function checkGameOver(){const _0x25a305=a0_0x57c62d,_0x2bc42f=document['getElementById'](_0x25a305(0x178));if(playerHealth<=0x0)log('Você\x20foi\x20derrotado\x20por\x20'+currentEnemy['name']+'!'),_0x2bc42f['disabled']=!![],setTimeout(()=>{showGameOverModal();},0x5dc);else enemyHealth<=0x0&&(log(_0x25a305(0x140)+currentEnemy[_0x25a305(0x13f)]+'!'),_0x2bc42f[_0x25a305(0x11a)]=!![],currentEnemyIndex++,setTimeout(()=>{const _0x5b9583=_0x25a305;currentEnemyIndex<enemies[_0x5b9583(0x198)]?showRewardScreen():showVictoryModal();},0x3e8));}function showRewardScreen(){const _0x14ad04=a0_0x57c62d,_0x145fd1=document[_0x14ad04(0x19a)]('reward-screen');_0x145fd1['style'][_0x14ad04(0x17b)]=_0x14ad04(0x158);const _0x4b9ab2=document['querySelectorAll'](_0x14ad04(0x117));_0x4b9ab2[_0x14ad04(0x175)](_0x1d8b0b=>_0x1d8b0b[_0x14ad04(0x187)][_0x14ad04(0x12d)](_0x14ad04(0x195))),_0x4b9ab2[0x0][_0x14ad04(0x187)][_0x14ad04(0x153)]('selected-reward');}function selectReward(_0x4ed4c2){const _0x1f8c83=a0_0x57c62d,_0x43b1d4=document[_0x1f8c83(0x19a)](_0x1f8c83(0x151));_0x43b1d4['style'][_0x1f8c83(0x17b)]=_0x1f8c83(0x124);const _0x33e3d1=document[_0x1f8c83(0x10d)](_0x1f8c83(0x117));_0x33e3d1[_0x1f8c83(0x175)](_0x4c3081=>_0x4c3081[_0x1f8c83(0x187)][_0x1f8c83(0x12d)](_0x1f8c83(0x195))),event['currentTarget'][_0x1f8c83(0x187)][_0x1f8c83(0x153)](_0x1f8c83(0x195));switch(_0x4ed4c2){case _0x1f8c83(0x146):const _0x501d20=Math['floor'](playerMaxHealth*0.2);playerHealth=Math[_0x1f8c83(0x1a2)](playerHealth+_0x501d20,playerMaxHealth),log(_0x1f8c83(0x142)+_0x501d20+_0x1f8c83(0x168));break;case _0x1f8c83(0x184):playerDefenseModifier+=0.1,log(_0x1f8c83(0x103));break;case _0x1f8c83(0x196):playerAttackModifier+=0.1,log(_0x1f8c83(0x121));break;case _0x1f8c83(0x15c):baseDiscardCount+=0x1,log(_0x1f8c83(0x18f));break;}updateHealth(),renderEnemyTrack(),startBattle();}initGame();function applyDamageAnimation(_0x34f8d2){const _0x523388=a0_0x57c62d,_0xd95400=document['getElementById'](_0x34f8d2);_0xd95400[_0x523388(0x187)][_0x523388(0x153)](_0x523388(0x127)),setTimeout(()=>{const _0x4db6ca=_0x523388;_0xd95400[_0x4db6ca(0x187)][_0x4db6ca(0x12d)](_0x4db6ca(0x127));},0x1f4);}function showSpecialAttackAnimation(){return new Promise(_0x4c0cf9=>{const _0x290be5=a0_0x2703,_0x476419=document[_0x290be5(0x19a)](_0x290be5(0x148)),_0x91a024=document[_0x290be5(0x19a)](_0x290be5(0x1a1)),_0x1f9d5f=document[_0x290be5(0x19a)](_0x290be5(0x131));_0x476419[_0x290be5(0x159)][_0x290be5(0x17b)]='flex',createEnergyParticles(),_0x91a024[_0x290be5(0x159)]['animation']=_0x290be5(0x124),_0x1f9d5f[_0x290be5(0x159)][_0x290be5(0x179)]='none',void _0x91a024[_0x290be5(0x17d)],void _0x1f9d5f['offsetWidth'],_0x91a024['style'][_0x290be5(0x179)]='specialAttackText\x205s\x20forwards',_0x1f9d5f[_0x290be5(0x159)][_0x290be5(0x179)]=_0x290be5(0x115),setTimeout(()=>{const _0x664cd0=_0x290be5;_0x476419[_0x664cd0(0x159)][_0x664cd0(0x17b)]=_0x664cd0(0x124),_0x4c0cf9();},0x1004);});}function createEnergyParticles(){const _0x484858=a0_0x57c62d,_0x21fca7=document[_0x484858(0x19a)]('special-attack-overlay'),_0x2ee7c4=document[_0x484858(0x10d)](_0x484858(0x1a4));_0x2ee7c4['forEach'](_0x2778c1=>_0x2778c1[_0x484858(0x12d)]());for(let _0x47ef53=0x0;_0x47ef53<0x32;_0x47ef53++){const _0x3bf29c=document['createElement'](_0x484858(0x192));_0x3bf29c['className']='energy-particle';const _0x29e2e0=Math['random']()*window[_0x484858(0x15e)],_0x4d4096=Math['random']()*window[_0x484858(0x12c)],_0x6f2c6e=Math[_0x484858(0x16d)]()*0xa+0x5;_0x3bf29c['style']['left']=_0x29e2e0+'px',_0x3bf29c[_0x484858(0x159)][_0x484858(0x125)]=_0x4d4096+'px',_0x3bf29c[_0x484858(0x159)][_0x484858(0x143)]=_0x6f2c6e+'px',_0x3bf29c[_0x484858(0x159)][_0x484858(0x157)]=_0x6f2c6e+'px';const _0x23cbb3=Math[_0x484858(0x16d)]()*0x7d0+0x7d0;_0x3bf29c[_0x484858(0x159)][_0x484858(0x114)]=_0x484858(0x15f)+_0x23cbb3+'ms\x20ease-out',_0x21fca7['appendChild'](_0x3bf29c),setTimeout(()=>{const _0x4f9e4d=_0x484858;_0x3bf29c[_0x4f9e4d(0x159)][_0x4f9e4d(0x10f)]=_0x4f9e4d(0x129),_0x3bf29c[_0x4f9e4d(0x159)][_0x4f9e4d(0x197)]='50%',_0x3bf29c[_0x4f9e4d(0x159)]['top']='50%',_0x3bf29c['style']['transform']=_0x4f9e4d(0x108),setTimeout(()=>{const _0xb23e86=_0x4f9e4d;_0x3bf29c[_0xb23e86(0x12d)]();},_0x23cbb3);},0x64);}}function createEnemyAttackAnimation(){const _0x7c1377=a0_0x57c62d,_0x3f8a1e=document[_0x7c1377(0x19a)](_0x7c1377(0x1a5)),_0x53f3bc=document['getElementById'](_0x7c1377(0x112)),_0x37be87=_0x3f8a1e[_0x7c1377(0x111)](),_0x55ff11=_0x53f3bc['getBoundingClientRect'](),_0x2318bd=document[_0x7c1377(0x1ad)](_0x7c1377(0x192));_0x2318bd[_0x7c1377(0x11f)]=_0x7c1377(0x1b5),_0x2318bd[_0x7c1377(0x159)]['left']=_0x37be87['left']+_0x37be87[_0x7c1377(0x143)]/0x2-0x32+'px',_0x2318bd[_0x7c1377(0x159)][_0x7c1377(0x125)]=_0x37be87[_0x7c1377(0x125)]+_0x37be87['height']/0x2-0x32+'px';const _0x49f330=document[_0x7c1377(0x1ad)](_0x7c1377(0x192));_0x49f330['className']='fire-effect',_0x49f330['style']['left']=_0x55ff11[_0x7c1377(0x197)]+_0x55ff11[_0x7c1377(0x143)]/0x2-0x96+'px',_0x49f330[_0x7c1377(0x159)][_0x7c1377(0x125)]=_0x55ff11[_0x7c1377(0x125)]+_0x55ff11['height']/0x2-0x96+'px',document[_0x7c1377(0x105)]['appendChild'](_0x2318bd),document[_0x7c1377(0x105)][_0x7c1377(0x138)](_0x49f330),setTimeout(()=>{const _0x1e1989=_0x7c1377;_0x2318bd[_0x1e1989(0x12d)](),_0x49f330[_0x1e1989(0x12d)]();},0x3e8);}async function showShuffleAnimation(){return new Promise(_0x106b41=>{const _0x2cb70d=a0_0x2703,_0x488c94=['♠','♣','♥','♦'],_0x1449d4=['A','K','Q','J','10','9','8'],_0x237796=document[_0x2cb70d(0x1ad)]('div');_0x237796['id']='shuffle-animation';const _0x8494bd=document['createElement'](_0x2cb70d(0x192));_0x8494bd[_0x2cb70d(0x11f)]=_0x2cb70d(0x102),_0x237796[_0x2cb70d(0x138)](_0x8494bd);const _0x59ffb6=document[_0x2cb70d(0x1ad)](_0x2cb70d(0x192));_0x59ffb6[_0x2cb70d(0x11f)]='shuffle-stage';for(let _0xcd9a82=0x0;_0xcd9a82<0xa;_0xcd9a82++){const _0x3ab5bd=document['createElement'](_0x2cb70d(0x192));_0x3ab5bd[_0x2cb70d(0x11f)]=_0x2cb70d(0x180),_0x3ab5bd['style'][_0x2cb70d(0x17c)]('--i',_0xcd9a82);const _0x242662=_0x488c94[Math['floor'](Math[_0x2cb70d(0x16d)]()*_0x488c94['length'])],_0x1dcadb=_0x1449d4[Math['floor'](Math[_0x2cb70d(0x16d)]()*_0x1449d4[_0x2cb70d(0x198)])],_0x13e1fc=_0x242662==='♥'||_0x242662==='♦';_0x3ab5bd[_0x2cb70d(0x18c)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-face\x20card-front\x22\x20style=\x22color:\x20'+(_0x13e1fc?_0x2cb70d(0x194):_0x2cb70d(0x139))+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-value\x22>'+_0x1dcadb+_0x2cb70d(0x171)+_0x242662+_0x2cb70d(0x161)+_0x242662+_0x2cb70d(0x110)+_0x1dcadb+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-face\x20card-back\x22></div>\x0a\x20\x20\x20\x20\x20\x20',_0x59ffb6[_0x2cb70d(0x138)](_0x3ab5bd);}_0x237796[_0x2cb70d(0x138)](_0x59ffb6),document[_0x2cb70d(0x105)][_0x2cb70d(0x138)](_0x237796),setTimeout(()=>{_0x237796['remove'](),_0x106b41();},0xbb8);});}
