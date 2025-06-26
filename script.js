document.addEventListener('DOMContentLoaded', () => {
    const App = {
        data: {}, 
        view: 'dashboard',
        filters: { tasks: { status: 'all', owner: 'all' } },
        
        getNewProjectTemplate(name) {
            const today = new Date().toISOString().split('T')[0];
            return {
                id: Date.now(),
                name: name || "新專案",
                info: { name: name || "新專案", manager: 'James', today: today },
                milestones: [],
                collaterals: [],
                files: [],
                meetings: [],
                contacts: [],
                briefData: {
                    projectName: name || "新專案", projectManager: 'James', projectDate: today,
                    objective: '', audience: '', keyMessage: '', tone: '',
                    deliverables: [{ id: Date.now(), name: '範例項目', spec: '範例規格', copy: '' }],
                    links: '', timeline: ''
                }
            };
        },
        
        getDefaultData() {
            return {
              "activeProjectId": 1,
              "projects": [
                {
                  "id": 1,
                  "name": "餘音裊裊 - 南音的傳承與創新",
                  "info": { "name": "餘音裊裊 - 南音的傳承與創新", "manager": "James", "today": "2025-06-16" },
                  "milestones": [
                    { "type": "Event", "name": "講座一：南音賞析", "date": "2025-06-28" },
                    { "type": "Event", "name": "講座二：省城遺音", "date": "2025-07-12" },
                    { "type": "Event", "name": "音樂會：情繫蔴地", "date": "2025-08-30" }
                  ],
                  "collaterals": [
                    { "id": 1, "name": "主視覺海報", "application": "數碼宣傳及實體張貼", "version": "V2.0", "status": "已完成", "owner": "設計師", "history": [], "nextAction": "", "dueDate": "2025-06-16", "copy": "主視覺海報需要包含所有活動標題及主辦方Logo。" },
                    { "id": 5, "name": "音樂會場刊 (House Programme)", "application": "音樂會當日派發", "version": "V1.0", "status": "待審批", "owner": "James", "history": [], "nextAction": "wait for Confirmed lyrics and performers profile and rundown", "dueDate": "2025-07-15", "copy": "" },
                    { "id": 1750043253226, "name": "Facebook post", "application": "Publicity", "copy": "", "owner": "James", "dueDate": "2025-06-28", "version": "V1.0", "status": "已完成", "history": [], "nextAction": "" },
                    { "id": 1750043316696, "name": "Enews", "application": "Publicity", "copy": "", "owner": "James", "dueDate": "2025-06-20", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Send out first talk, prepare second draft" },
                    { "id": 1750043376137, "name": "MC scripts", "application": "Concert", "copy": "", "owner": "James", "dueDate": "2025-08-01", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Wait for confirmed rundown" },
                    { "id": 1750043439896, "name": "CH Speech", "application": "Concert", "copy": "", "owner": "James", "dueDate": "2025-08-01", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Wait for daisy review" },
                    { "id": 1750068692100, "name": "A2 Print poster", "application": "Publicity", "copy": "", "owner": "James", "dueDate": "2025-06-18", "version": "V1.0", "status": "已完成", "history": [], "nextAction": "Send to ppl" },
                    { "id": 1750209036307, "name": "TWGHs website banner", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-19", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "HRHo Approve" },
                    { "id": 1750209069355, "name": "RHO Website Banner", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-19", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Get back to etnet for comment" },
                    { "id": 1750209110378, "name": "Facebook banner", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-19", "version": "V1.0", "status": "設計中", "history": [], "nextAction": "HRHo Approve" },
                    { "id": 1750209181066, "name": "Instagram thumbnail", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-19", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Get back to etnet for comment" },
                    { "id": 1750209209426, "name": "YT thumbnail", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-24", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Get back to etnet for comment" },
                    { "id": 1750209498754, "name": "Enews letter banner", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-19", "version": "V1.0", "status": "待審批", "history": [], "nextAction": "Get back to etnet for comment" },
                    { "id": 1750209709402, "name": "ETnet online advertorial 1", "application": "advertorial", "copy": "To introduce the Nanyin Programme", "owner": "James", "dueDate": "2025-06-28", "version": "V2.0", "status": "已完成", "history": [], "nextAction": "Published" },
                    { "id": 1750211191521, "name": "ETnet online advertorial 2 + HKET Print", "application": "advertorial", "copy": "To promote 音樂會+ interviews\n*Bottom part of the article – landing to watch full video of the event", "owner": "James", "dueDate": "2025-07-20", "version": "V2.0", "status": "待審批", "history": [], "nextAction": "審閱訪問問題草稿，並轉交相關人士預覽" },
                    { "id": 1750211231513, "name": "ETnet online advertorial 3 + HKET Print", "application": "advertorial", "copy": "Event Recap", "owner": "James", "dueDate": "2025-09-08", "version": "V1.0", "status": "待辦", "history": [], "nextAction": "規劃初始步驟。" },
                    { "id": 1750211328657, "name": "TWGHs 155 website thumbnails", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-18", "version": "V2.0", "status": "已完成", "history": [], "nextAction": "" },
                    { "id": 1750228969461, "name": "TWN", "application": "Publicity", "copy": "", "owner": "James", "dueDate": "2025-06-28", "version": "V1.0", "status": "待製作", "history": [], "nextAction": "Wait for photo after first talk to submit to CCD through Lydia" },
                    { "id": 1750314251380, "name": "Press release", "application": "Publicity", "copy": "", "owner": "CCD Marble", "dueDate": "2025-06-23", "version": "V2.0", "status": "已完成", "history": [], "nextAction": "Finished" },
                    { "id": 1750383450463, "name": "TWGHs 155 website thumbnails", "application": "Website", "copy": "", "owner": "James", "dueDate": "2025-06-20", "version": "V1.0", "status": "已完成", "history": [], "nextAction": "Get back to etnet for comment" },
                    { "id": 1750900211419, "name": "Backdrop", "application": "Stage", "copy": "", "owner": "ETnet", "dueDate": "2025-06-25", "version": "V1.0", "status": "已完成", "history": [], "nextAction": "規劃初始步驟。" },
                    { "id": 1750900407787, "name": "IG Post", "application": "Publicity", "copy": "", "owner": "James", "dueDate": "2025-06-26", "version": "V1.0", "status": "已完成", "history": [], "nextAction": "Done" }
                  ],
                  "contacts": [
                    { "id": 3, "name": "Rachel Fung", "role": "Project coordinator ", "contact": "2180 8131/ rachelfung@lcsd.gov.hk" },
                    { "id": 4, "name": "Etnet Rosella", "role": "Project coordinator ", "contact": "95130630 / Rosella Lee In Yan <rosellalee@etnet.com.hk>" }
                  ],
                  "briefData": { "projectName": "TWGHs 155th Website Thumbnail ", "projectManager": "James", "projectDate": "2025-06-16", "objective": "", "audience": "", "keyMessage": "", "tone": "", "deliverables": [{ "id": 1, "name": "TWGHs 155th Website Thumbnail ", "spec": "Size: 360px X 200px", "copy": "" }], "links": "", "timeline": "" },
                  "files": [
                    { "id": 1750390091370, "name": "Press release", "category": "CCD", "url": "#" },
                    { "id": 1750390105250, "name": "Website", "category": "CCD", "url": "#" },
                    { "id": 1750390119738, "name": "Tung Wah News", "category": "CCD", "url": "#" }
                  ]
                }
              ]
            };
        },

        init() {
            this.migrateOldData();
            this.loadData();
            this.render();
            this.attachEventListeners();
        },
        
        migrateOldData() {
            const oldDataKeys = ['project_butler_multi_project_v1', 'nanyinProjectButler_v20_final', 'nanyinProjectButler_v19_final', 'nanyinProjectButler_v17_final', 'project_butler_tool_final_stable_v20'];
            let oldDataString = null;
            let oldKey = null;

            for (const key of oldDataKeys) {
                const data = localStorage.getItem(key);
                if (data) {
                    try {
                       const parsed = JSON.parse(data);
                       if (parsed && !parsed.projects) { 
                            oldDataString = data;
                            oldKey = key;
                            break;
                       }
                    } catch(e) { console.error("無法解析舊數據:", e); }
                }
            }
            
            if (oldDataString) {
                try {
                    const oldData = JSON.parse(oldDataString);
                    const newAppData = {
                        activeProjectId: 1,
                        projects: [
                            {
                                id: 1,
                                name: oldData.info?.name || "已遷移的專案",
                                ...oldData
                            }
                        ]
                    };
                    localStorage.setItem('projectButlerMulti_v3_fixed', JSON.stringify(newAppData));
                    localStorage.removeItem(oldKey);
                    alert("您的舊專案資料已成功升級至多專案版本！");
                } catch (e) {
                    console.error("舊資料遷移失敗:", e);
                }
            }
        },
        
        loadData() {
            const d = localStorage.getItem('projectButlerMulti_v3_fixed');
            if (d) {
                this.data = JSON.parse(d);
            } else {
                this.data = this.getDefaultData();
            }
             if (!this.data.view) this.data.view = 'dashboard';
             if (!this.data.projects) this.data.projects = [];
        },
        
        saveData(rerender = true) {
            localStorage.setItem('projectButlerMulti_v3_fixed', JSON.stringify(this.data));
            if (rerender) this.render();
        },

        getActiveProject() {
            if (!this.data || !this.data.activeProjectId || !this.data.projects || this.data.projects.length === 0) return null;
            let project = this.data.projects.find(p => p.id === this.data.activeProjectId);
            if (!project && this.data.projects.length > 0) {
                project = this.data.projects[0];
                this.data.activeProjectId = project.id;
            }
            return project;
        },
        
        resetData() {
            if(confirm('您確定要清除所有專案數據嗎？此操作無法復原。')){
                localStorage.removeItem('projectButlerMulti_v3_fixed');
                window.location.reload();
            }
        },
        
        exportData() {
            const d=new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"});
            const u=URL.createObjectURL(d);
            const a=document.createElement('a');
            a.href=u;
            a.download=`project_butler_multi_data_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(u);
        },
        
        importData(e) {
            const f = e.target.files[0];
            if(!f) return;
            const r = new FileReader();
            r.onload=ev=>{
                try {
                    const d=JSON.parse(ev.target.result);
                    if (d && d.projects && d.hasOwnProperty('activeProjectId')) {
                         if(confirm("這將會覆蓋您所有的專案資料，確定要匯入嗎？")){
                            this.data=d;
                            this.saveData();
                        }
                    } else {
                        alert("檔案格式錯誤。請確認您匯入的是多專案版本的備份檔案。");
                    }
                } catch(err) {
                    alert("檔案格式錯誤，無法匯入。");
                }
            };
            r.readAsText(f);
            e.target.value='';
        },
        
        render() {
            this.renderProjectSwitcher();
            const project = this.getActiveProject();
            
            if (!project) {
                this.view = 'projects';
            }

            const view = this.view || 'dashboard';
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.view === view));
            document.querySelectorAll('.view-container').forEach(c => {
                const el = document.getElementById(c.id);
                if (c.id !== `view-${view}`) {
                    el.classList.add('hidden');
                } else {
                    el.classList.remove('hidden');
                }
            });
            
            const renderFunc = this[`render${view.charAt(0).toUpperCase() + view.slice(1)}View`];
            if (typeof renderFunc === 'function') {
                renderFunc.call(this);
            }
        },
        
        renderProjectSwitcher() {
            const switcher = document.getElementById('project-switcher');
            switcher.innerHTML = '';
            if (this.data.projects && this.data.projects.length > 0) {
                this.data.projects.forEach(p => {
                    const option = document.createElement('option');
                    option.value = p.id;
                    option.textContent = p.name;
                    if (p.id === this.data.activeProjectId) {
                        option.selected = true;
                    }
                    switcher.appendChild(option);
                });
            } else {
                switcher.innerHTML = '<option>請先新增專案</option>';
            }
        },

        switchProject(projectId) {
            this.data.activeProjectId = parseInt(projectId);
            this.view = 'dashboard';
            this.saveData();
        },
        
        renderProjectsView() {
            const container = document.getElementById('view-projects');
            if(!container.querySelector('.view-title')) { 
                container.innerHTML = `
                    <h1 class="view-title">專案管理</h1>
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h2 class="text-lg font-semibold mb-4">新增專案</h2>
                        <form id="add-project-form" class="flex gap-2">
                            <input type="text" id="new-project-name" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="新專案的名稱" required>
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shrink-0">新增</button>
                        </form>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow mt-6">
                         <h2 class="text-lg font-semibold mb-4">現有專案列表</h2>
                         <ul id="project-list" class="space-y-2"></ul>
                    </div>`;
            }
            
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = '';
            (this.data.projects || []).forEach(project => {
                const li = document.createElement('li');
                li.className = 'flex justify-between items-center p-3 bg-slate-50 rounded-md';
                li.innerHTML = `
                    <span class="font-medium text-slate-700">${project.name}</span>
                    <div class="flex gap-2">
                        <button data-action="rename-project" data-id="${project.id}" class="text-sm text-blue-600 hover:underline">重命名</button>
                        <button data-action="delete-project" data-id="${project.id}" class="text-sm text-red-600 hover:underline">刪除</button>
                    </div>
                `;
                projectList.appendChild(li);
            });

            document.getElementById('add-project-form').onsubmit = (e) => {
                e.preventDefault();
                const input = document.getElementById('new-project-name');
                const newName = input.value.trim();
                if (newName) {
                    const newProject = this.getNewProjectTemplate(newName);
                    if (!this.data.projects) this.data.projects = [];
                    this.data.projects.push(newProject);
                    this.data.activeProjectId = newProject.id;
                    this.view = 'dashboard';
                    this.saveData();
                    input.value = '';
                }
            };
        },

        renderDashboardView() {
            const project = this.getActiveProject();
            const container = document.getElementById('view-dashboard');
            if (!project) { container.innerHTML = '<div class="p-8 text-center"><p>沒有可用的專案。請到「專案管理」新增一個專案。</p></div>'; return; }
            if(!container.querySelector('.view-title')) {
                container.innerHTML = `
                    <h1 class="view-title"></h1>
                    <p class="text-slate-600 -mt-4 mb-6">今天日期：<span id="current-date" class="font-semibold"></span></p>
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                        <div class="bg-white p-6 rounded-lg shadow flex justify-between items-center"><div class="flex-grow"><p class="text-sm text-gray-500">下個重要活動</p><p id="next-event-name" class="text-lg font-bold"></p></div><p id="countdown" class="text-4xl font-bold text-indigo-600">--</p></div>
                        <div class="bg-white p-6 rounded-lg shadow flex justify-between items-center"><div class="flex-grow"><p class="text-sm text-gray-500">任務進度</p><p id="progress-text" class="text-lg font-bold"></p></div><div class="w-16 h-16"><canvas id="progressDonutChart"></canvas></div></div>
                        <div class="bg-white p-6 rounded-lg shadow"><h3 class="font-semibold text-gray-700 mb-2">🎯 本週焦點</h3><ul id="focus-tasks" class="space-y-2 text-sm text-slate-600"></ul></div>
                        <div class="bg-white p-6 rounded-lg shadow"><h3 class="font-semibold text-gray-700 mb-2">🔔 待我審批</h3><ul id="approval-tasks" class="space-y-2 text-sm text-slate-600"></ul></div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow"><h2 class="text-2xl font-bold text-slate-800 mb-4">項目時間軸</h2><div id="timeline-wrapper" class="timeline-container"><div class="timeline-line"></div></div></div>`;
            }
            document.querySelector('#view-dashboard .view-title').textContent = `主控台: ${project.name}`;
            const today = new Date(project.info.today); today.setHours(0, 0, 0, 0);
            document.getElementById('current-date').textContent = today.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
            const allItems = [...project.milestones, ...project.collaterals.map(t => ({...t, type: 'Task', date: t.dueDate}))].sort((a, b) => new Date(a.date) - new Date(b.date));
            const nextMilestone = allItems.find(item => new Date(item.date) >= today);
            if (nextMilestone) { document.getElementById('next-event-name').textContent = nextMilestone.name; document.getElementById('countdown').textContent = Math.max(0, Math.ceil((new Date(nextMilestone.date) - today) / 864e5));
            } else { document.getElementById('next-event-name').textContent = "活動已完結"; document.getElementById('countdown').textContent = '🎉'; }
            const totalTasks = project.collaterals.length;
            const completedTasks = project.collaterals.filter(t => t.status === '已完成').length;
            document.getElementById('progress-text').textContent = `${completedTasks} / ${totalTasks} 完成`;
            const chartEl = document.getElementById('progressDonutChart');
            if(Chart.getChart(chartEl)) { Chart.getChart(chartEl).destroy(); }
            new Chart(chartEl.getContext('2d'), { type: 'doughnut', data: { datasets: [{ data: [completedTasks, totalTasks - completedTasks], backgroundColor: ['var(--success)', '#e5e7eb'], borderWidth: 4, borderColor: 'var(--main-bg)' }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false }, tooltip: { enabled: false } } } });
            const focusList = document.getElementById('focus-tasks'); const approvalList = document.getElementById('approval-tasks');
            focusList.innerHTML = '<li>沒有即將到期的任務。</li>'; approvalList.innerHTML = '<li>沒有待審批的項目。</li>';
            let focusCount = 0, approvalCount = 0;
            project.collaterals.forEach(t => {
                const daysUntil = Math.ceil((new Date(t.dueDate) - today) / 864e5);
                if (t.status !== '已完成' && daysUntil >= 0 && daysUntil <= 7 && focusCount < 3) { if (focusCount === 0) focusList.innerHTML = ''; focusList.innerHTML += `<li class="p-1 rounded hover:bg-gray-100 cursor-pointer" data-action="goto-task" data-task-id="${t.id}">${t.name}</li>`; focusCount++; }
                if (t.status === '待審批' && approvalCount < 3) { if (approvalCount === 0) approvalList.innerHTML = ''; approvalList.innerHTML += `<li class="p-1 rounded hover:bg-gray-100 cursor-pointer" data-action="goto-task" data-task-id="${t.id}">${t.name}</li>`; approvalCount++; }
            });
            const timelineWrapper = document.getElementById('timeline-wrapper');
            timelineWrapper.innerHTML = '<div class="timeline-line"></div>';
            allItems.forEach(item => {
                const itemDate = new Date(item.date);
                let status = 'Upcoming';
                if (item.status) { status = item.status === '已完成' ? 'Completed' : 'InProgress'; } 
                else { if (itemDate < today) status = 'Completed'; }
                const statusClass = status;
                const itemIcon = item.type === 'Event' ? '🎉 ' : '📌 ';
                timelineWrapper.innerHTML += `<div class="timeline-item timeline-status-${statusClass}"><div class="timeline-dot"></div><div class="timeline-content"><div class="text-sm font-semibold text-indigo-600">${item.date}</div><div class="font-bold text-slate-800">${itemIcon}${item.name}</div></div></div>`;
            });
        },
        
        renderTasksView() {
            const project = this.getActiveProject();
            if (!project) return;
            const container = document.getElementById('view-tasks');
            if(!container.querySelector('.view-title')) {
                container.innerHTML = `<h1 class="view-title">任務看板</h1><div class="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap items-center justify-between gap-4"><button data-action="add-task" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">＋ 手動新增項目</button><div class="flex flex-wrap items-center gap-4"><div><label for="filter-status" class="text-sm font-medium mr-2">篩選狀態:</label><select id="filter-status" class="filter-select"><option value="all">全部</option><option value="待辦">待辦</option><option value="內容準備中">內容準備中</option><option value="設計中">設計中</option><option value="待審批">待審批</option><option value="待製作">待製作</option><option value="已完成">已完成</option></select></div><div><label for="filter-owner" class="text-sm font-medium mr-2">篩選負責人:</label><select id="filter-owner" class="filter-select"><option value="all">全部</option></select></div></div></div><div id="task-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>`;
            }

            document.querySelector('#view-tasks .view-title').textContent = `任務看板: ${project.name}`;
            const grid = document.getElementById('task-grid'); const { status, owner } = this.filters.tasks;
            const filteredData = project.collaterals.filter(i => (status === 'all' || i.status === status) && (owner === 'all' || i.owner === owner));
            const getDaysUntil = d => { const today = new Date(project.info.today); today.setHours(0,0,0,0); return Math.ceil((new Date(d) - today) / 864e5); };
            const getDueDateClass = d => { const n = getDaysUntil(d); if (n < 0) return 'due-date-overdue'; if (n <= 7) return 'due-date-soon'; return ''; };
            const getStatusSelectHTML = i => { const s=['待辦','內容準備中','設計中','待審批','待製作','已完成']; return `<select class="status-select status-badge-${i.status.replace(/ /g,'')}" data-id="${i.id}">${s.map(st=>`<option value="${st}" ${i.status===st?'selected':''}>${st}</option>`).join('')}</select>`; };
            grid.innerHTML = filteredData.length === 0 ? `<p class="text-slate-500 md:col-span-2 xl:col-span-3 text-center py-10">沒有符合篩選條件的項目。</p>` : '';
            filteredData.forEach(item => {
                const card = document.createElement('div'); card.className = 'card p-4 flex flex-col space-y-3'; card.dataset.id = item.id;
                card.innerHTML = `<div class="flex justify-between items-start"><h3 class="font-bold text-lg text-slate-800 pr-2">${item.name}</h3><div class="flex-shrink-0">${getStatusSelectHTML(item)}</div></div><p class="text-xs text-slate-500 -mt-2">${item.application}</p><div class="text-sm space-y-2 flex-grow"><div class="flex justify-between"><span>版本:</span><span class="font-mono px-2 py-0.5 bg-gray-100 rounded">${item.version}</span></div><div class="editable-container" data-field="owner" data-value="${item.owner}"><div class="flex justify-between"><span>負責人:</span><span class="editable p-1">${item.owner}</span></div></div><div class="editable-container" data-field="dueDate" data-value="${item.dueDate}"><div class="flex justify-between items-center"><span>到期日:</span><span class="editable font-mono p-1 rounded-md text-xs ${getDueDateClass(item.dueDate)}">${item.dueDate}</span></div></div><div><span class="font-semibold text-slate-600 block mb-1">下一步行動:</span><div class="editable-container" data-field="nextAction" data-value="${item.nextAction}"><div class="editable whitespace-pre-wrap bg-slate-50 p-2 rounded-md">${item.nextAction.replace(/\n/g, '<br>')}</div></div></div></div><div class="border-t pt-3 flex justify-between items-center"><button class="text-sm text-blue-600 hover:underline" data-action="view-history" data-id="${item.id}">更新紀錄 (${(item.history || []).length})</button><div><button class="text-sm text-red-500 hover:text-red-700" data-action="delete-task" data-id="${item.id}">刪除</button></div></div>`;
                grid.appendChild(card);
            });
            const ownerFilter = document.getElementById('filter-owner');
            ownerFilter.innerHTML = '<option value="all">全部</option>';
            [...new Set(project.collaterals.map(i => i.owner))].sort().forEach(o => { ownerFilter.innerHTML += `<option value="${o}">${o}</option>`; });
            ownerFilter.value = this.filters.tasks.owner;
            document.getElementById('filter-status').value = this.filters.tasks.status;
        },
        
        renderBriefsView() {
            const project = this.getActiveProject();
            if (!project) return;
            const container = document.getElementById('view-briefs');
            if(!container.innerHTML) { // Lazy load the view's static content
                container.innerHTML = `<h1 class="view-title">設計簡報生成器</h1><div id="brief-form-container"><div class="brief-form-section"><h2 class="text-xl font-bold mb-4 text-slate-800 border-b pb-2">專案概覽</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="projectName" class="brief-form-label">專案名稱</label><input type="text" id="projectName" class="brief-form-input" readonly></div><div><label for="projectManager" class="brief-form-label">專案經理</label><input type="text" id="projectManager" class="brief-form-input"></div><div><label for="projectDate" class="brief-form-label">製表日期</label><input type="date" id="projectDate" class="brief-form-input"></div></div></div><div class="brief-form-section"><h2 class="text-xl font-bold mb-4 text-slate-800 border-b pb-2">專案策略</h2><div class="space-y-6"><div><label for="objective" class="brief-form-label">主要目標</label><textarea id="objective" class="brief-form-textarea"></textarea></div><div><label for="audience" class="brief-form-label">目標觀眾</label><textarea id="audience" class="brief-form-textarea"></textarea></div><div><label for="keyMessage" class="brief-form-label">核心訊息</label><textarea id="keyMessage" class="brief-form-textarea"></textarea></div><div><label for="tone" class="brief-form-label">設計風格與調性</label><input type="text" id="tone" class="brief-form-input"></div></div></div><div class="brief-form-section"><h2 class="text-xl font-bold mb-4 text-slate-800 border-b pb-2">設計項目及規格</h2><div id="deliverables-container"></div><button data-action="add-brief-deliverable" class="brief-add-btn mt-4">＋ 新增設計項目</button></div><div class="brief-form-section"><h2 class="text-xl font-bold mb-4 text-slate-800 border-b pb-2">資源與時間表</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="brief-links" class="brief-form-label">資源連結 (Logo/圖片)</label><textarea id="brief-links" class="brief-form-textarea"></textarea></div><div><label for="brief-timeline" class="brief-form-label">相關時間表</label><textarea id="brief-timeline" class="brief-form-textarea" placeholder="初稿:YYYY-MM-DD&#10;終稿:YYYY-MM-DD"></textarea></div></div></div><div class="brief-form-section text-center"><button data-action="generate-brief" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg">📋 生成並複製簡報內容</button><p id="copy-success" class="text-green-600 mt-4 font-semibold hidden">簡報內容已複製！</p></div></div>`;
            }
            const briefData = project.briefData;
            Object.keys(briefData).forEach(key => { const el = document.getElementById(key); if (el && key !== 'deliverables') el.value = briefData[key]; });
            document.getElementById('projectName').value = project.info.name; 
            const delivContainer = document.getElementById('deliverables-container');
            delivContainer.innerHTML = '';
            if (briefData.deliverables && briefData.deliverables.length > 0) { briefData.deliverables.forEach(d => this.createBriefDeliverableBlock(d));
            } else { this.createBriefDeliverableBlock(); }
        },

        renderFilesView() {
            const project = this.getActiveProject();
            if (!project) return;
            const container = document.getElementById('view-files');
            if(!container.innerHTML) {
                container.innerHTML = `<h1 class="view-title">檔案中心</h1><div class="bg-white p-6 rounded-lg shadow"><div class="overflow-x-auto"><table id="files-table" class="w-full text-sm file-table"><thead><tr><th>檔案名稱</th><th>分類</th><th>連結</th><th class="text-right">動作</th></tr></thead><tbody></tbody></table></div><button data-action="add-file" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">＋ 新增檔案連結</button></div>`;
            }
            const tableBody = document.querySelector('#files-table tbody');
            tableBody.innerHTML = '';
            (project.files || []).forEach(f => {
                tableBody.innerHTML += `<tr class="border-b"><td class="p-3">${f.name}</td><td class="p-3">${f.category}</td><td class="p-3"><a href="${f.url}" target="_blank" class="text-blue-600 hover:underline">開啟連結</a></td><td class="p-3 text-right"><button class="text-xs text-blue-600 hover:underline" data-action="edit-file" data-id="${f.id}">編輯</button><button class="text-xs text-red-600 hover:underline ml-2" data-action="delete-file" data-id="${f.id}">刪除</button></td></tr>`;
            });
        },
        
        renderMeetingsView() {
            const project = this.getActiveProject();
            if (!project) return;
            const container = document.getElementById('view-meetings');
            if(!container.innerHTML) {
                container.innerHTML = `<h1 class="view-title">會議記錄</h1><div id="meetings-container" class="space-y-4"></div><button data-action="add-meeting" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">＋ 新增會議記錄</button>`;
            }
            const meetingsContainer = document.getElementById('meetings-container');
            meetingsContainer.innerHTML = '';
            const sortedMeetings = [...(project.meetings || [])].sort((a,b) => new Date(b.date) - new Date(a.date));
            sortedMeetings.forEach(m => {
                meetingsContainer.innerHTML += `<div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-300">
                    <div class="flex justify-between items-start">
                        <div><p class="font-bold text-indigo-700">${m.date}</p><p class="text-sm text-gray-500">與會者: ${m.attendees}</p></div>
                        <div><button data-action="edit-meeting" data-id="${m.id}" class="text-xs text-blue-600 hover:underline">編輯</button><button data-action="delete-meeting" data-id="${m.id}" class="text-xs text-red-600 hover:underline ml-2">刪除</button></div>
                    </div><div class="mt-2 pt-2 border-t text-sm whitespace-pre-wrap">${m.notes.replace(/\n/g, '<br>')}</div></div>`;
            });
        },

        renderContactsView() {
            const project = this.getActiveProject();
            if (!project) return;
             const container = document.getElementById('view-contacts');
            if(!container.innerHTML) {
                container.innerHTML = `<h1 class="view-title">聯絡人</h1><div id="contacts-container" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div><button data-action="add-contact" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">＋ 新增聯絡人</button>`;
            }
            const contactsContainer = document.getElementById('contacts-container');
            contactsContainer.innerHTML = '';
            project.contacts.forEach(c => { contactsContainer.innerHTML += `<div class="contact-card p-4 flex justify-between items-center"><div><p class="font-bold">${c.name}</p><p class="text-sm text-slate-500">${c.role}</p></div><div class="flex items-center gap-4"><p class="text-slate-700">${c.contact}</p><div><button data-action="edit-contact" data-id="${c.id}" class="text-xs text-blue-600 hover:underline">編輯</button><button data-action="delete-contact" data-id="${c.id}" class="text-xs text-red-600 hover:underline ml-2">刪除</button></div></div></div>`; });
        },
        
        attachEventListeners() {
            const main = document.getElementById('main-content');
            const modalOverlay = document.getElementById('modal-overlay');
            document.getElementById('main-nav').addEventListener('click', e => { const l = e.target.closest('.sidebar-link'); if (l) { e.preventDefault(); this.view = l.dataset.view; this.render(); } });
            document.querySelector('nav').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; const action = b.dataset.action; if (action === 'reset-all') this.resetData(); if (action === 'export-data') this.exportData(); if (action === 'import-data') document.getElementById('import-file-input').click(); });
            document.getElementById('import-file-input').addEventListener('change', (e) => this.importData(e));
            document.getElementById('project-switcher').addEventListener('change', e => this.switchProject(e.target.value));
            
            main.addEventListener('click', e => { const t = e.target; const action = t.dataset.action || t.closest('[data-action]')?.dataset.action; if (action) { e.preventDefault(); const id = parseInt(t.dataset.id || t.closest('[data-id]')?.dataset.id); this.handleAction(action, id, t); } const editable = t.closest('.editable'); if(editable) this.handleInlineEdit(editable);});
            main.addEventListener('change', e => { const t = e.target; const project = this.getActiveProject(); if (!project) return; if (t.id === 'filter-status') { this.filters.tasks.status = t.value; this.renderTasksView(); } if (t.id === 'filter-owner') { this.filters.tasks.owner = t.value; this.renderTasksView(); } if (t.matches('.status-select')) { const i = project.collaterals.find(item => item.id === parseInt(t.dataset.id)); const o = i.status; i.status = t.value; if (o !== i.status) { this.logHistory(i.id, `狀態由 "${o}" 更新為 "${i.status}"`); this.saveData(); }} });
            main.addEventListener('input', e => { if (e.target.closest('#brief-form-container')) { this.saveBriefData(false); } });
            
            modalOverlay.addEventListener('click', e => { if (e.target.classList.contains('modal-cancel-btn') || e.target === modalOverlay) this.closeModal(); });
            modalOverlay.addEventListener('submit', e => { e.preventDefault(); if(e.target.id === 'item-form-task') { this.handleTaskFormSubmit(e.target); } if(e.target.id === 'history-form') { this.handleHistoryFormSubmit(e.target); } if (e.target.id === 'item-form-contact') { this.handleContactFormSubmit(e.target); } if (e.target.id === 'item-form-file') { this.handleFileFormSubmit(e.target); } if(e.target.id === 'item-form-meeting') { this.handleMeetingFormSubmit(e.target); }});
        },

        handleAction(action, id, targetElement) {
            const actions = {
                'add-task': () => this.showTaskModal(), 'add-contact': () => this.showContactModal(), 'add-file': () => this.showFileModal(), 'add-meeting': () => this.showMeetingModal(),
                'delete-task': () => this.deleteTask(id),
                'delete-contact': () => this.deleteContact(id), 'edit-contact': () => this.showContactModal(id),
                'delete-file': () => this.deleteFile(id), 'edit-file': () => this.showFileModal(id),
                'delete-meeting': () => this.deleteMeeting(id), 'edit-meeting': () => this.showMeetingModal(id),
                'view-history': () => this.showHistoryModal(id), 'generate-brief': () => this.generateAndCopyBrief(),
                'add-brief-deliverable': () => { this.createBriefDeliverableBlock(); this.saveBriefData(); },
                'remove-brief-deliverable': () => { targetElement.closest('.brief-deliverable-block').remove(); this.saveBriefData(); },
                'rename-project': () => { const project = this.data.projects.find(p=>p.id === id); if(project) { const newName = prompt("請輸入新的專案名稱：", project.name); if(newName && newName.trim()) { project.name = newName.trim(); this.saveData(); }}},
                'delete-project': () => { if (confirm("確定要刪除此專案嗎？此操作無法復原。")) { this.data.projects = this.data.projects.filter(p => p.id !== id); if(this.data.activeProjectId === id) this.data.activeProjectId = (this.data.projects[0] || {}).id || null; this.saveData();}},
                'goto-task': () => {
                    this.view = 'tasks'; this.render();
                    setTimeout(() => {
                        const card = document.querySelector(`#task-grid .card[data-id="${targetElement.closest('[data-task-id]').dataset.taskId}"]`);
                        if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); card.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-2'); setTimeout(() => card.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-2'), 2500); }
                    }, 100);
                }
            };
            if(actions[action]) actions[action]();
        },
        
        handleInlineEdit(target) {
            const container = target.closest('.editable-container');
            if (container.querySelector('.inline-editor-input')) return;
            const field = container.dataset.field;
            const originalValue = container.dataset.value;
            let editorHtml;
            if (field === 'nextAction') { editorHtml = `<textarea class="inline-editor-input w-full p-2 border rounded-md text-sm" style="min-height: 80px;">${originalValue}</textarea>`;
            } else if (field === 'dueDate') { editorHtml = `<input type="date" class="inline-editor-input" value="${originalValue}">`;
            } else { editorHtml = `<input type="text" class="inline-editor-input" value="${originalValue}">`; }
            container.innerHTML = `${editorHtml}<div class="mt-2 flex justify-end gap-2"><button class="cancel-edit-btn text-xs bg-gray-200 px-2 py-1 rounded">取消</button><button class="save-edit-btn text-xs bg-blue-600 text-white px-2 py-1 rounded">儲存</button></div>`;
            const inputEl = container.querySelector('.inline-editor-input');
            inputEl.focus();
            const saveAction = () => {
                const itemId = parseInt(container.closest('.card').dataset.id);
                const project = this.getActiveProject();
                const item = project.collaterals.find(i => i.id === itemId);
                if (inputEl.value.trim() !== item[field]) {
                    item[field] = inputEl.value.trim();
                    const labels = {owner: '負責人', dueDate: '到期日', nextAction: '下一步行動'};
                    this.logHistory(itemId, `手動將「${labels[field]}」更新為 "${item[field]}"`);
                }
                this.saveData();
            };
            inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && field !== 'nextAction') { e.preventDefault(); saveAction(); } if (e.key === 'Escape') { this.renderTasksView(); }});
            container.querySelector('.cancel-edit-btn').addEventListener('click', (e) => { e.stopPropagation(); this.renderTasksView(); });
            container.querySelector('.save-edit-btn').addEventListener('click', (e) => { e.stopPropagation(); saveAction(); });
        },
        
        showModal(templateId, callback) { const a = document.getElementById('modal-content'), t = document.getElementById(templateId); a.innerHTML = ''; a.appendChild(t.content.cloneNode(true)); document.getElementById('modal-overlay').classList.add('active'); if (callback) callback(); },
        closeModal() { document.getElementById('modal-overlay').classList.remove('active'); },
        
        showTaskModal(id = null) {
            const project = this.getActiveProject();
            this.showModal('modal-template-task-form', () => {
                const f = document.getElementById('item-form-task');
                if (id) {
                    const i = project.collaterals.find(item => item.id === id);
                    document.getElementById('modal-title-task').textContent = "編輯項目";
                    f.querySelector('#item-id-task').value = i.id; f.querySelector('#item-name-task').value = i.name; f.querySelector('#item-application-task').value = i.application;
                    f.querySelector('#item-copy-task').value = i.copy; f.querySelector('#item-owner-task').value = i.owner; f.querySelector('#item-due-date-task').value = i.dueDate;
                } else { document.getElementById('modal-title-task').textContent = "新增項目"; }
            });
        },
        handleTaskFormSubmit(form) {
            const project = this.getActiveProject();
            const id = parseInt(form.querySelector('#item-id-task').value);
            const data = { name: form.querySelector('#item-name-task').value.trim(), application: form.querySelector('#item-application-task').value.trim(), copy: form.querySelector('#item-copy-task').value.trim(), owner: form.querySelector('#item-owner-task').value.trim(), dueDate: form.querySelector('#item-due-date-task').value };
            if (id) { const item = project.collaterals.find(i => i.id === id); Object.assign(item, data); this.logHistory(id, '項目基本資料已更新。'); } 
            else { project.collaterals.push({ id: Date.now(), ...data, version: 'V1.0', status: '待辦', history: [{date: project.info.today, note: '項目已建立。'}], nextAction: '規劃初始步驟。' }); }
            this.closeModal(); this.saveData();
        },
        deleteTask(id) { const project = this.getActiveProject(); const i = project.collaterals.find(item => item.id === id); if (confirm(`確定要刪除「${i.name}」嗎？`)) { project.collaterals = project.collaterals.filter(item => item.id !== id); this.saveData(); } },
        showHistoryModal(id) {
            const project = this.getActiveProject();
            this.showModal('modal-template-history-form', () => { const i = project.collaterals.find(item => item.id === id); document.getElementById('history-item-id').value = id; const l = document.getElementById('history-log'); l.innerHTML = ''; if (!i.history || i.history.length === 0) { l.innerHTML = '<p>暫無紀錄。</p>'; } else { [...i.history].reverse().forEach(e => { l.innerHTML += `<div class="text-sm p-2 bg-slate-100 rounded"><b>${e.date}:</b> ${e.note}</div>`; }); } });
        },
        handleHistoryFormSubmit(form) { const i=parseInt(form.querySelector('#history-item-id').value); const n=form.querySelector('#history-note').value.trim(); if(n){this.logHistory(i, n);this.closeModal();this.showHistoryModal(i); this.saveData();} },
        logHistory(id, note) { const project = this.getActiveProject(); const i = project.collaterals.find(item => item.id === id); if (i) { if (!i.history) i.history = []; i.history.push({date: new Date().toISOString().split('T')[0], note}); const m = note.match(/(V|version|版本)\s?(\d+\.\d+(\.\d+)?)/i); if (m && m[2]) { i.version = "V" + m[2]; }}},

        saveBriefData() {
            const project = this.getActiveProject();
            if (!project) return;
            const briefData = project.briefData;
            briefData.projectManager = document.getElementById('projectManager').value; briefData.projectDate = document.getElementById('projectDate').value;
            briefData.objective = document.getElementById('objective').value; briefData.audience = document.getElementById('audience').value; briefData.keyMessage = document.getElementById('keyMessage').value;
            briefData.tone = document.getElementById('tone').value; briefData.links = document.getElementById('brief-links').value; briefData.timeline = document.getElementById('brief-timeline').value;
            briefData.deliverables = [];
            document.querySelectorAll('#deliverables-container .brief-deliverable-block').forEach(block => {
                briefData.deliverables.push({ id: parseInt(block.dataset.id), name: block.querySelector('.deliverable-name').value, spec: block.querySelector('.deliverable-spec').value, copy: block.querySelector('.deliverable-copy').value });
            });
            this.saveData(false);
        },
        createBriefDeliverableBlock(data = {}) {
            const container = document.getElementById('deliverables-container');
            const block = document.createElement('div'); block.className = 'brief-deliverable-block';
            block.dataset.id = data.id || Date.now();
            block.innerHTML = `<div class="flex justify-end mb-2"><button data-action="remove-brief-deliverable" class="brief-remove-btn" title="Remove">×</button></div>
                                   <div><label class="brief-form-label text-sm">項目名稱</label><input type="text" class="brief-form-input deliverable-name" value="${data.name || ''}"></div>
                                   <div class="mt-4"><label class="brief-form-label text-sm">規格</label><input type="text" class="brief-form-input deliverable-spec" value="${data.spec || ''}"></div>
                                   <div class="mt-4"><label class="brief-form-label text-sm">完整文案</label><textarea class="brief-form-textarea deliverable-copy">${data.copy || ''}</textarea></div>`;
            container.appendChild(block);
        },
        generateAndCopyBrief() {
            this.saveBriefData(false);
            const briefData = this.getActiveProject().briefData;
            const esc=s=>s?s.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>"):'N/A';
            let deliverablesHtml = '';
            briefData.deliverables.forEach(d => { if (d.name) { deliverablesHtml += `<tr style="page-break-inside: avoid;"><td style="padding:12px;border:1px solid #eee;font-weight:bold;vertical-align:top;width:120px;background-color:#f8fafc;">${esc(d.name)}</td><td style="padding:12px;border:1px solid #eee;vertical-align:top;"><p style="margin:0 0 8px 0;"><b>規格:</b> ${esc(d.spec)}</p></td></tr><tr style="page-break-inside: avoid;"><td style="padding:12px;border:1px solid #eee;font-weight:bold;vertical-align:top;background-color:#f8fafc;">文案</td><td style="padding:12px;border:1px solid #eee;white-space:pre-wrap;">${esc(d.copy) || '<i>(未提供)</i>'}</td></tr>`; }});
            const html=`<div style="font-family:Arial,sans-serif;color:#333;line-height:1.6;font-size:14px;max-width:800px;"><h1 style="font-size:24px;color:#1e293b;border-bottom:2px solid #eee;padding-bottom:10px;margin:0 0 20px 0;">設計簡報</h1><table style="width:100%;border-collapse:collapse;margin-bottom:20px;"><tr style="background:#f8fafc;"><td style="padding:10px;border:1px solid #eee;font-weight:bold;width:120px;">專案名稱</td><td style="padding:10px;border:1px solid #eee;">${esc(briefData.projectName)}</td></tr></table><h2 style="font-size:20px;margin:30px 0 15px 0;">1. 專案策略</h2><p><b>目標:</b><br>${esc(briefData.objective)}</p><p><b>觀眾:</b><br>${esc(briefData.audience)}</p><p><b>核心訊息:</b><br>${esc(briefData.keyMessage)}</p><p><b>設計風格:</b><br>${esc(briefData.tone)}</p><h2 style="font-size:20px;margin:30px 0 15px 0;">2. 設計項目</h2><table style="width:100%;border-collapse:collapse;margin-bottom:20px;">${deliverablesHtml}</table><h2 style="font-size:20px;margin:30px 0 15px 0;">3. 資源與時間表</h2><p><b>資源連結:</b><br>${esc(briefData.links)}</p><p><b>時間表:</b><br>${esc(briefData.timeline)}</p></div>`;
                const c=document.createElement('div');c.style.position='fixed';c.style.opacity=0;c.innerHTML=html;document.body.appendChild(c);window.getSelection().removeAllRanges();const r=document.createRange();r.selectNode(c);window.getSelection().addRange(r);
                try{document.execCommand('copy');document.getElementById('copy-success').classList.remove('hidden');setTimeout(()=>document.getElementById('copy-success').classList.add('hidden'),2e3)}catch(err){console.error('Copy failed',err)}
                document.body.removeChild(c);
            },
            
            showContactModal(id = null) { const project = this.getActiveProject(); this.showModal('modal-template-contact-form', () => { const f = document.getElementById('item-form-contact'); if (id) { const c = project.contacts.find(c => c.id === id); document.getElementById('modal-title-contact').textContent = "編輯聯絡人"; f.querySelector('#item-id-contact').value = c.id; f.querySelector('#item-name-contact').value = c.name; f.querySelector('#item-role-contact').value = c.role; f.querySelector('#item-info-contact').value = c.contact; } else { document.getElementById('modal-title-contact').textContent = "新增聯絡人"; } }); },
            handleContactFormSubmit(form) { const project = this.getActiveProject(); const id = parseInt(form.querySelector('#item-id-contact').value); const data = { name: form.querySelector('#item-name-contact').value, role: form.querySelector('#item-role-contact').value, contact: form.querySelector('#item-info-contact').value }; if (id) { Object.assign(project.contacts.find(c => c.id === id), data); } else { project.contacts.push({ id: Date.now(), ...data }); } this.closeModal(); this.saveData(); },
            addContact() { this.showContactModal(); },
            deleteContact(id) { const project = this.getActiveProject(); if (confirm("確定要刪除此聯絡人嗎？")) { project.contacts = project.contacts.filter(c => c.id !== id); this.saveData(); }},

            showFileModal(id = null) { const project = this.getActiveProject(); this.showModal('modal-template-file-form', () => { const f = document.getElementById('item-form-file'); if (id) { const file = project.files.find(f => f.id === id); document.getElementById('modal-title-file').textContent = "編輯檔案"; f.querySelector('#item-id-file').value = file.id; f.querySelector('#item-name-file').value = file.name; f.querySelector('#item-category-file').value = file.category; f.querySelector('#item-url-file').value = file.url; } else { document.getElementById('modal-title-file').textContent = "新增檔案連結"; } }); },
            handleFileFormSubmit(form) { const project = this.getActiveProject(); const id = parseInt(form.querySelector('#item-id-file').value); const data = { name: form.querySelector('#item-name-file').value, category: form.querySelector('#item-category-file').value, url: form.querySelector('#item-url-file').value }; if (id) { Object.assign(project.files.find(f => f.id === id), data); } else { if (!project.files) project.files = []; project.files.push({ id: Date.now(), ...data }); } this.closeModal(); this.saveData(); },
            addFile() { this.showFileModal(); },
            deleteFile(id) { const project = this.getActiveProject(); if (confirm("確定要刪除此檔案連結嗎？")) { project.files = project.files.filter(f => f.id !== id); this.saveData(); }},

            showMeetingModal(id = null) { const project = this.getActiveProject(); this.showModal('modal-template-meeting-form', () => { const f = document.getElementById('item-form-meeting'); if (id) { const m = project.meetings.find(m => m.id === id); document.getElementById('modal-title-meeting').textContent = "編輯會議記錄"; f.querySelector('#item-id-meeting').value = m.id; f.querySelector('#item-date-meeting').value = m.date; f.querySelector('#item-attendees-meeting').value = m.attendees; f.querySelector('#item-notes-meeting').value = m.notes; } else { document.getElementById('modal-title-meeting').textContent = "新增會議記錄"; f.querySelector('#item-date-meeting').value = new Date().toISOString().split('T')[0]; } }); },
            handleMeetingFormSubmit(form) { const project = this.getActiveProject(); const id = parseInt(form.querySelector('#item-id-meeting').value); const data = { date: form.querySelector('#item-date-meeting').value, attendees: form.querySelector('#item-attendees-meeting').value, notes: form.querySelector('#item-notes-meeting').value }; if (id) { Object.assign(project.meetings.find(m => m.id === id), data); } else { if (!project.meetings) project.meetings = []; project.meetings.push({ id: Date.now(), ...data }); } this.closeModal(); this.saveData(); },
            addMeeting() { this.showMeetingModal(); },
            deleteMeeting(id) { const project = this.getActiveProject(); if (confirm("確定要刪除此會議記錄嗎？")) { project.meetings = project.meetings.filter(m => m.id !== id); this.saveData(); }}
        };
        
        App.init();
    });