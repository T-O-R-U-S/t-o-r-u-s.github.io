<script>
  import "../app.css";
	import "prismjs/themes/prism-solarizedlight.min.css"
</script>

<main class="h-screen grid grid-cols-12 grid-rows-1">
  <div class="flex h-full w-96 bg-pink-300 items-center flex-col col-span-3">
	  <h1 class="font-serif font-extrabold">
		  TORUS
	  </h1>
	  <h4>
		  <a href="/" class="font-serif font-extralight mr-2 flex items-center">
			  <span class="mr-2">Check me out on GitHub</span>
			  <img src="/github.svg" alt="Github Logo" class="h-[16px]">
		  </a>
	  </h4>
  </div>
  <div class="col-span-9">
    <slot />
  </div>
</main>