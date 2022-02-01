<script>
	import InteractiveCube from './InteractiveCube.svelte'
	let cubes = [
		{ id: "red1", position: "0 1 -1.25", color: "red" },
		{ id: "red2", position: "0 1.6 -1.5", color: "red" },
		{ id: "blue1", position: "-0.9 1 -0.9", color: "blue" },
		{ id: "blue2", position: "-1 1.6 -1", color: "blue" },
		{ id: "green1", position: "0.9 1 -0.9", color: "green" },
		{ id: "green2", position: "0.9 1.6 -1", color: "green" },
	]
</script>

<a-scene environment="preset: default; shadow: true">
	<a-entity camera wasd-controls position="0 1 1"
		raycaster="objects: .cube" cursor="rayOrigin:mouse"
		static-body="shape: sphere; sphereRadius: 0.001"
		super-hands="colliderEvent: raycaster-intersection;
									colliderEventProperty: els;
									colliderEndEvent:raycaster-intersection-cleared;
									colliderEndEventProperty: clearedEls;" />
	{#each cubes as { id, position, color } (id) }
		<InteractiveCube {id} {position} {color} />
	{/each}
</a-scene>