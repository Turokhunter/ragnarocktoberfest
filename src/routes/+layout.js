// src/routes/random-number/+page.js

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// load reruns when `invalidate('https://api.example.com/random-number')` is called...
	const response = await fetch('https://stats.ragnarocktoberfest.com/all');
	// const response = await fetch('http://stats.ragnarocktoberfest.com:3000/all');
	// const response = await fetch('stats.json');

	// console.log(response);
	// ...or when `invalidate('app:random')` is called
	// depends('app:random');
	const data = await response.json();

	return {
		data: data
	};
}
