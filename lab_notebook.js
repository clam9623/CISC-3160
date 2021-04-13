document.addEventListener('DOMContentLoaded', init);

let title, notes, clearBtn;

function init()
{
    title = document.getElementById('title');
    notes = document.getElementById('notes');
    clearBtn = document.getElementById('clearBtn');

    title.oninput = () => saveToLS('title', title.value);
    notes.oninput = () => saveToLS('notes', notes.value);
    clearBtn.addEventListener('click', clear);

    title.value = getFromLS('title');
    notes.value = getFromLS('notes');
}

function clear()
{
    title.value = '';
    notes.value = '';

    localStorage.removeItem('title');
    localStorage.removeItem('notes');
}

function saveToLS(key, value)
{
    if(localStorage) localStorage.setItem(key, value);
}

function getFromLS(key)
{
    let ls;
    if(localStorage)
    {
        try { ls = localStorage.getItem(key) || ''; }
        catch(e) { console.error(e); }
    }
    return ls;
}
