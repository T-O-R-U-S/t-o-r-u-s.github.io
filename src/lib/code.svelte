<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';

	// Deps for highlighting
	import "prismjs/components/prism-rust.min.js";
	import "prismjs/components/prism-python.min.js";

	export let language = "javascript";

	let code;

	let highlighted;

	onMount(() => highlighted = Prism.highlight(
		code.textContent,
		Prism.languages[language]
	))
</script>

<code bind:this={code} class="hidden">
<slot></slot>
</code>

<code>
	<pre class="bg-yellow-50 pl-7 w-5/6 m-4 rounded-2xl">{@html highlighted}
</pre>
</code>

