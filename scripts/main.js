var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var lbl_as_value=document.getElementById("a_size_value");
var lbl_speed_value=document.getElementById("a_speed_value");

var butts_algos=document.querySelectorAll(".algorithm-btn");

var stats = {
    comparisons: 0,
    swaps: 0,
    arrayAccess: 0,
    startTime: 0
};

var statusDot = document.querySelector('.status-dot');
var statusText = document.querySelector('.status-text');

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";



inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    updateStatus('Generating...', 'running');
    cont.innerHTML="";
    resetStats();

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 70) + 10;
        divs[i]=document.createElement("div");
        divs[i].classList.add("array-bar", "fade-in");
        cont.appendChild(divs[i]);
        
        var barWidth;
        if(array_size <= 50) {
            barWidth = Math.max(100/array_size - 0.5, 1);
        } else if(array_size <= 100) {
            barWidth = Math.max(100/array_size - 0.3, 0.8);
        } else {
            barWidth = Math.max(100/array_size - 0.1, 0.5);
        }
        
        divs[i].style = `
            width: ${barWidth}%; 
            height: ${div_sizes[i]}%; 
            animation-delay: ${i * 5}ms;
            max-height: 90%;
        `;
    }
    
    margin_size = 0;
    
    setTimeout(() => {
        updateStatus('Ready', 'success');
    }, array_size * 10 + 500);
}

function update_array_size()
{
    array_size=inp_as.value;
    if(lbl_as_value){ lbl_as_value.innerText = array_size; }
    generate_array();
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    
    if(lbl_as_value){ lbl_as_value.innerText = inp_as.value; }
    if(lbl_speed_value){ lbl_speed_value.innerText = inp_aspeed.value; }
    if (typeof vis_speed === 'function') { vis_speed(); }
    
    if(inp_aspeed) {
        inp_aspeed.addEventListener('input', function() {
            if(lbl_speed_value){ lbl_speed_value.innerText = this.value; }
        });
    }
    
    setTimeout(() => {
        update_array_size();
        document.body.classList.remove('loading');
        
        document.querySelectorAll('.control-section, .info-card').forEach((el, index) => {
            el.style.animationDelay = (index * 100) + 'ms';
            el.classList.add('slide-up');
        });
    }, 300);
});

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList.remove("butt_selected");
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    resetStats();
    resetTiming();
    if (typeof vis_speed === 'function') { vis_speed(); }
    stats.startTime = Date.now();
    updateStatus('Sorting...', 'running');

    this.classList.add("butt_selected");
    var algorithm = this.dataset.algo || this.textContent.toLowerCase().split(' ')[0].toLowerCase();
    
    var estimated_operations = estimateOperations(algorithm, array_size);
    if (typeof initializeProgress === 'function') {
        initializeProgress(estimated_operations);
    }
    
    switch(algorithm)
    {
        case "bubble":Bubble();
                        break;
        case "selection":Selection_sort();
                        break;
        case "insertion":Insertion();
                        break;
        case "merge":Merge();
                        break;
        case "quick":Quick();
                        break;
        case "heap":Heap();
                        break;
    }
}

function estimateOperations(algorithm, n) {
    switch(algorithm) {
        case "bubble":
        case "selection":
        case "insertion":
            return n * n / 2;
        case "merge":
        case "heap":
            return n * Math.log2(n) * 2;
        case "quick":
            return n * Math.log2(n) * 1.5;
        default:
            return n * n / 2;
    }
}

function resetStats() {
    stats.comparisons = 0;
    stats.swaps = 0;
    stats.arrayAccess = 0;
    stats.startTime = 0;
    updateStatsDisplay();
}

function updateStatsDisplay() {
    const comparisonsEl = document.getElementById('comparisons');
    const swapsEl = document.getElementById('swaps');
    const arrayAccessEl = document.getElementById('array_access');
    const timeElapsedEl = document.getElementById('time_elapsed');
    
    if (comparisonsEl) comparisonsEl.textContent = stats.comparisons;
    if (swapsEl) swapsEl.textContent = stats.swaps;
    if (arrayAccessEl) arrayAccessEl.textContent = stats.arrayAccess;
    if (timeElapsedEl && stats.startTime > 0) {
        timeElapsedEl.textContent = (Date.now() - stats.startTime) + 'ms';
    }
}

function updateStatus(text, type) {
    if (statusText) statusText.textContent = text;
    if (statusDot) {
        statusDot.className = 'status-dot';
        if (type === 'running') {
            statusDot.style.background = '#ffb347';
        } else if (type === 'success') {
            statusDot.style.background = '#00ff88';
        } else if (type === 'error') {
            statusDot.style.background = '#ff4757';
        }
    }
}

