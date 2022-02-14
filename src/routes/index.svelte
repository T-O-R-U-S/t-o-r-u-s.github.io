<script>
	import Code from '../lib/code.svelte'
</script>

<h2>Hello! I'm TORUS, and I'm great at many things!</h2>

<h4>Chiefly Rust, but that doesn't mean I can't JavaScript or Python...</h4>

<Code language="rust">
{`
#[get('/')]
fn i_heart_rust(_req: HttpRequest) -> impl Responder {
	"I ❤️ Rust!"
}

fn main() {
	let app = App::new()
		.service(i_heart_rust);
}
`}
</Code>