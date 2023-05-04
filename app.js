'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = ClassList.body.ClassName;
    if(className =="light-theme") {
        this.textContent = "Dark";    
    }
    else { 
        this.textContent = "Light";
    }
    crossOriginIsolated.log('current class name' + className);
    
});