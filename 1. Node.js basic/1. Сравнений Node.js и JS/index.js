const browser = [
	'Интерактивный web приложения(React, Vue, Angular, Svelte)',
	'Browser API (DOM, BOM, ...)',
	'Фрагментатция версий',
	'Поддержка es modules',
]
const nodejs = [
	'Серверная приложения',
	'Node API (fs, http, https, ...)',
	'Единая версия на сервере(Docker, ...)',
	'CommonJS(require, modules.export) + ES Modules(import)',
]

console.log('-------BROWSER VS NODE.JS-------')
console.table(browser)
console.table(nodejs)
console.log('-------END-------')


console.table('\n\n')



const deno = [
	'Язык JavaScript, TypeScript',
	'.ts и .js модули',
	'Контрольная безопасность CLI',
	'Совместим с браузерным API',
	'Небольшое community и непредсказуемые баги в production',
]

const node = [
	'Язык JavaScript',
	'NPM',
	'Нет ограничений безопасности',
	'Отдельно API',
	'Большое community и стабильная работа в production',
]


console.log('-------NODE VS DENO-------')
console.table(browser)
console.table(nodejs)
console.log('-------END-------')