AOS.init();

const tabs = document.querySelectorAll('[data-tab-target]');
const tab_content = document.querySelectorAll('.tab-content');

const inicio = () => {
	console.log('inicio')
}

tabs.forEach( tab => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tab_content.forEach( tabContent => {
			tabContent.classList.remove("tab-content-active")
		})
		target.classList.add("tab-content-active")
		console.log(tab.dataset.tabTarget.replace('#', ''));
	})
})