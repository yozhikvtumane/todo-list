let windowParams = {
	width: window.innerWidth,
	height: window.innerHeight,
	mainBorder: 1,
	mainWidth: window.innerWidth / 2,
	mainPadding: 16,
	listWidth: null,
	listMargin: 8,
	listPadding: 12,
	
	listBorder: 1
}

let lists = document.querySelectorAll('.list')

console.log("windowParams", windowParams)
document.body.style.setProperty("height", `${windowParams.height}px`)

headerTitle.style.setProperty("width", `${windowParams.width / 2}px`)
main.style.setProperty("height", `${windowParams.height}px`)
main.style.setProperty("width", `${windowParams.mainWidth}px`)
main.style.setProperty("padding", `${windowParams.mainPadding}px`)

let mainSpaceRemaining = 
	windowParams.mainWidth - 
	windowParams.mainPadding * 2 - 
	windowParams.mainBorder * 2 - 
	windowParams.listMargin * 6

	console.log(mainSpaceRemaining)


Array.from(lists).map(list => {
	windowParams.listWidth = mainSpaceRemaining / 3
	list.style.setProperty('width', `${windowParams.listWidth}px`)
	list.style.setProperty('margin-right', `${windowParams.listMargin}px`)
	list.style.setProperty('margin-left', `${windowParams.listMargin}px`)
	list.style.setProperty('margin-bottom', `${windowParams.listMargin}px`)
	list.style.setProperty('padding', `${windowParams.listPadding}px`)
})


/*
-----------------------------
|main                       |
|  | list || list || list | |

*/


document.body.style.setProperty("overflow", `hidden`)
console.log(window)
