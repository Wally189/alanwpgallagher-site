/* No account access or storage. All exercise data is synthetic. */
(() => {
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const explorer = document.getElementById('file-lab');
  if (explorer) {
    let view = 'before', folder = 'all', selected = null;
    const rows = document.getElementById('file-lab-rows');
    const detail = document.getElementById('file-lab-detail');
    const heading = document.getElementById('file-lab-heading');
    const status = document.getElementById('file-lab-status');
    const count = document.getElementById('file-lab-count');
    const draw = (data) => {
      const selectedRows = data.filter((entry) => folder === 'all' || entry.folder === folder);
      heading.textContent = `${view === 'before' ? 'Original directory' : 'Proposed structure'} · ${selectedRows.length} documents`;
      count.textContent = `${data.length} source records · 0 deleted`;
      rows.innerHTML = selectedRows.map((f) => `<tr class="${selected === f.id ? 'is-selected' : ''}"><td><button type="button" data-id="${escapeHtml(f.id)}" class="wb-file-open">▤ ${escapeHtml(view === 'before' ? f.name : f.proposed)}</button></td><td>${escapeHtml(f.area)}</td><td>${escapeHtml(f.issue)}</td></tr>`).join('');
      const item = data.find((r) => r.id === selected);
      if (item) {
        detail.innerHTML = `<p class="wb-mini-label">DOCUMENT ${escapeHtml(item.id)} · SYNTHETIC</p><h4>${escapeHtml(item.name)}</h4><dl><dt>Concern</dt><dd>${escapeHtml(item.issue)}</dd><dt>Evidence / question</dt><dd>${escapeHtml(item.evidence)}</dd><dt>Proposed treatment</dt><dd>${escapeHtml(item.treatment)}</dd><dt>Candidate destination</dt><dd>${escapeHtml(item.proposed)}</dd><dt>Decision status</dt><dd><strong>${escapeHtml(item.status)}</strong></dd></dl>`;
        status.textContent = item.id;
      } else { detail.innerHTML='<p class="wb-mini-label">INSPECTION NOTES</p><h4>Choose a document</h4><p>Select a document row to examine the risk, evidence and proposed treatment. Nothing is moved or deleted.</p>';status.textContent='Select a row'; }
    };
    // Embedded safe fallback supports file:// preview where fetch(file://) is restricted.
    const DATA = [
      ['CV-001','Governance','Policy_FINAL_NEW_v7.docx','governance','Missing approval','Conflicts with controlled v3; filename alone is not authority.','Compare version history and seek policy-owner confirmation before designating the approved copy.','01 Governance / Current Policies','Hold pending owner sign-off'],
      ['CV-002','Governance','Policy_Approved_v3.pdf','governance','Possible authority','Approval metadata appears complete in this fictional example.','Verify approval signature and effective date; retain as candidate master.','01 Governance / Current Policies','Verify approved master'],
      ['CV-003','Operations','Service Desk Notes.docx','operations','Unclear use','Operational notes do not identify an owner or review cycle.','Request owner classification; keep editable in controlled working area.','02 Operations / Draft Guidance','Needs owner review'],
      ['CV-004','Operations','Handover_FINAL_2.docx','operations','Version conflict','Multiple files present as final with no decision record.','Compare content with master and obtain handover-owner decision.','02 Operations / Handovers','Do not delete'],
      ['CV-005','Operations','Handover_FINAL_3.docx','operations','Version conflict','A later number does not itself prove approved status.','Compare evidence and seek owner approval before superseding another copy.','02 Operations / Handovers','Do not delete'],
      ['CV-006','Governance','Privacy note 2021.pdf','governance','Review due','Outdated review cycle in the fictional register.','Escalate to responsible owner for retention and replacement assessment.','90 Archive / Governance','Retention check'],
      ['CV-007','Unsorted','scan0002.pdf','inbox','Unidentified','Filename and folder reveal no content or owner.','Inspect safely, classify, and agree retention before moving.','03 Working / Triage','Content check required'],
      ['CV-008','Unsorted','final-contract-2.docx','inbox','Ambiguous contract','Draft and signed-copy status is not established.','Route to contract owner and verify signature/state before migration.','03 Working / Triage','Owner required'],
      ['CV-009','Unsorted','Staff list.xlsx','inbox','Access sensitivity','Likely contains personal information in this invented scenario.','Restrict access, minimise exposure, confirm purpose and applicable retention.','Restricted / People','Privacy review'],
      ['CV-010','Archives','Minutes 2022.pdf','archives','Historical record','No evidence of active use; may remain a record requiring retention.','Retain in controlled archive pending schedule confirmation.','90 Archive / Meeting Records','Preserve'],
      ['CV-011','Archives','Policy draft old.docx','archives','Legacy draft','Draft status confirmed in fictional register.','Retain under version history with context; do not substitute as policy master.','90 Archive / Policy History','Preserve'],
      ['CV-012','Operations','New employee request.xlsx','operations','Template drift','Fields inconsistent with documented approval process.','Standardise only after confirming process owner and fields.','02 Operations / Templates','Review template']
    ].map(([id,area,name,folder,issue,evidence,treatment,proposed,status])=>({id,area,name,folder,issue,evidence,treatment,proposed,status}));
    explorer.querySelectorAll('[data-mode]').forEach((button)=>button.addEventListener('click',()=>{
      view=button.dataset.mode;
      explorer.querySelectorAll('[data-mode]').forEach(x=>{x.classList.toggle('is-on',x===button);x.setAttribute('aria-pressed',String(x===button));});
      draw(DATA);
    }));
    explorer.querySelectorAll('[data-folder]').forEach((button)=>button.addEventListener('click',()=>{
      folder=button.dataset.folder;
      selected=null;
      explorer.querySelectorAll('[data-folder]').forEach(x=>x.classList.toggle('is-on',x===button));
      draw(DATA);
    }));
    rows.addEventListener('click',(event)=>{const button=event.target.closest('button[data-id]');if(!button)return;selected=button.dataset.id;draw(DATA);});
    draw(DATA);
  }
  const studio = document.getElementById('doc-studio');
  if(studio){
    const tabs=Array.from(studio.querySelectorAll('[data-doc-tab]'));
    const activate=(tab,focus=false)=>{
      tabs.forEach(b=>{const active=b===tab;b.setAttribute('aria-selected',String(active));b.setAttribute('tabindex',active?'0':'-1');const panel=document.getElementById(b.dataset.docTab);if(panel)panel.hidden=!active;});
      if(focus)tab.focus();
    };
    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>activate(tab));
      tab.addEventListener('keydown',(e)=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;activate(tabs[next],true);});
    });
    activate(tabs[0]);
  }
  const process = document.getElementById('process-rows');
  if(process){
    const DATA=`TA-001|Ireland|Missing specification|17\nTA-002|Canada|Missing specification|19\nTA-003|Australia|Missing specification|18\nTA-004|UK|Missing specification|15\nTA-005|Ireland|Missing specification|16\nTA-006|Canada|Missing specification|12\nTA-007|Australia|Missing specification|18\nTA-008|UK|Missing specification|15\nTA-009|Ireland|Missing specification|16\nTA-010|Canada|Ownership unclear|14\nTA-011|Australia|Ownership unclear|17\nTA-012|UK|Ownership unclear|17\nTA-013|Ireland|Ownership unclear|13\nTA-014|Canada|Ownership unclear|11\nTA-015|Australia|Ownership unclear|15\nTA-016|UK|Market exception|18\nTA-017|Ireland|Market exception|17\nTA-018|Canada|Market exception|19\nTA-019|Australia|Market exception|26\nTA-020|UK|Market exception|22\nTA-021|Ireland|Supplier evidence|8\nTA-022|Canada|Supplier evidence|8\nTA-023|Australia|Supplier evidence|14\nTA-024|UK|Supplier evidence|14`.trim().split('\n').map(line=>{const [ref,market,cause,days]=line.split('|');return{ref,market,cause,days:Number(days)};});
    const btns=Array.from(document.querySelectorAll('[data-cause-filter]'));
    const insight={all:'The four labels highlight candidate points of friction. The data do not prove root causes; use observation, interviews and workflow evidence before changing any procedure.',
      'Missing specification':'Nine of 24 requests have incomplete technical requirements. Hypothesis: a minimum-data intake check could avoid some rework; confirm what information is truly necessary.',
      'Ownership unclear':'Six of 24 requests lacked a clear owner at a handoff. Hypothesis: a named triage role and acceptance checkpoint may reduce time in an unowned queue.',
      'Market exception':'Five of 24 requests involve market-specific deviations. Hypothesis: explicit exception rules and appropriate engineering review would make decisions clearer.',
      'Supplier evidence':'Four of 24 requests are waiting for supplier specifications. Hypothesis: an evidence checkpoint could surface these gaps before formal review.'};
    const draw=(cause)=>{
      const subset=cause==='all'?DATA:DATA.filter(r=>r.cause===cause);
      process.innerHTML=subset.slice(0,8).map(r=>`<tr><td>${escapeHtml(r.ref)}</td><td>${escapeHtml(r.market)}</td><td>${escapeHtml(r.cause)}</td><td>${r.days}</td></tr>`).join('');
      document.getElementById('proc-count').textContent=String(DATA.length);
      document.getElementById('proc-mean').textContent=(DATA.reduce((n,r)=>n+r.days,0)/DATA.length).toFixed(1)+'d';
      document.getElementById('proc-insight-title').textContent=cause==='all'?'Full synthetic sample':cause;
      document.getElementById('proc-insight').textContent=insight[cause];
      document.getElementById('proc-row-status').textContent=`Showing ${Math.min(subset.length,8)} of ${subset.length} synthetic records; full 24-record dataset is downloadable.`;
      document.querySelectorAll('[data-cause]').forEach(b=>b.classList.toggle('is-dim',cause!=='all'&&b.dataset.cause!==cause));
    };
    btns.forEach(b=>b.addEventListener('click',()=>{btns.forEach(x=>x.classList.toggle('is-on',x===b));draw(b.dataset.causeFilter);}));
    draw('all');
  }
})();
