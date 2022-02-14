<script>
	import Code from '../lib/code.svelte'
</script>

<h2>Hello! I'm TORUS, and I'm great at many things!</h2>

<h4>Chiefly Rust, but that doesn't mean I can't JavaScript or Python...</h4>

<Code language="rust">
{`
// Built using actix_web, the most popular
// Rust backend library.
#[get('/')]
async fn i_heart_rust(_req: HttpRequest) -> impl Responder {
	"I ❤️ Rust!"
}

#[actix::main]
async fn main() -> std::io::Result<()> {
	HttpServer::new(|| App::new().service(i_heart_rust))
        .bind("127.0.0.1:8080")?
        .run()
        .await
	// Returns "I ❤️ Rust!" when opened in a browser (at https://127.0.0.1)
}
`}
</Code>