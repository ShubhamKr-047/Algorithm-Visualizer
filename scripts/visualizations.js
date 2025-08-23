var delay_time=1000;
var c_delay=0;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    if(lbl_speed_value){ lbl_speed_value.innerText = array_speed; }
    
    switch(parseInt(array_speed))
    {
        case 1: delay_time=1000; // slowest
                break;
        case 2: delay_time=500;
                break;
        case 3: delay_time=200;
                break;
        case 4: delay_time=100;
                break;
        case 5: delay_time=50; // fastest
                break;
    }
    
    console.log('Speed changed to:', array_speed, 'Delay time:', delay_time);
}

function resetTiming()
{
    c_delay = 0;
    console.log('Timing reset. Current delay_time:', delay_time);
}

var progress_bar = document.getElementById("progress_bar");
var total_operations = 0;
var current_operation = 0;

function div_update(cont, height, color)
{
    window.setTimeout(function(){
        cont.classList.remove('comparing', 'swapping', 'sorted');
        
        if (color === "red" || color === "#ff006e") {
            cont.classList.add('comparing');
            stats.comparisons++;
        } else if (color === "yellow" || color === "#ffb347") {
            cont.classList.add('swapping');
            stats.swaps++;
        } else if (color === "green" || color === "#00ff88") {
            cont.classList.add('sorted');
        }
        
        cont.style.height = height + "%";
        
        updateStatsDisplay();
        stats.arrayAccess++;
        
        updateProgress();
        
    }, c_delay);
    
    c_delay += delay_time;
}

function updateProgress() {
    current_operation++;
    if (progress_bar && total_operations > 0) {
        var progress = (current_operation / total_operations) * 100;
        progress_bar.style.width = Math.min(progress, 100) + '%';
    }
}

function initializeProgress(operations) {
    total_operations = operations;
    current_operation = 0;
    if (progress_bar) {
        progress_bar.style.width = '0%';
    }
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList.remove("butt_selected", "butt_locked");
            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
        
        for(var j=0;j<divs.length;j++)
        {
            divs[j].classList.remove('comparing', 'swapping');
            divs[j].classList.add('sorted');
        }
        
        updateStatus('Completed', 'success');
        updateStatsDisplay();
    }, c_delay);
}

