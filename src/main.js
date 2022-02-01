import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		sphereColor: '#0F0',
		boxColor: '#000000',
		cylinderColor: 'blue',
	}
});

export default app;