const emptes = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill'); 

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend',dragEnd)

function dragStart(){
	this.className += ' hold'
    setTimeout(() => (this.className ="invisble"),0)
} 

function dragEnd(){
	this.className = 'fill'
}

for(const empty of emptes){
	empty.addEventListener('dragover', dragOver)
	empty.addEventListener('dragenter', dragEnter)
	empty.addEventListener('dragleave', dragLeave)
	empty.addEventListener('drop', drop)
}

function dragOver(e){
   e.preventDefault()
}

function dragEnter(e){
	e.preventDefault()
	this.className += ' hovered'
}

function dragLeave(){
	this.className = 'empty'
}

function drop(){
	this.className = 'empty'
	this.append(fill)
}