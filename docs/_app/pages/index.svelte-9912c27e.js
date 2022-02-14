import{S as w,i as S,s as O,F as J,e as h,k as v,t as $,M as T,c as d,a as g,d as f,m as E,h as R,N as k,b as I,g as p,H as y,I as D,J as M,K as U,q as P,o as q,v as j,P as C,O as A,w as B,x as F,y as K,B as L,L as N}from"../chunks/vendor-55cc8bf1.js";function x(c){let a,o,n,l,_,i,r,u;const t=c[4].default,s=J(t,c,c[3],null);return{c(){a=h("code"),s&&s.c(),o=v(),n=h("code"),l=h("pre"),_=$(`
`),i=new T,r=$(`
	`),this.h()},l(e){a=d(e,"CODE",{class:!0});var m=g(a);s&&s.l(m),m.forEach(f),o=E(e),n=d(e,"CODE",{});var H=g(n);l=d(H,"PRE",{class:!0});var b=g(l);_=R(b,`
`),i=k(b),r=R(b,`
	`),b.forEach(f),H.forEach(f),this.h()},h(){I(a,"class","hidden"),i.a=r,I(l,"class","bg-yellow-50 pl-7 w-5/6 m-4 rounded-2xl")},m(e,m){p(e,a,m),s&&s.m(a,null),c[5](a),p(e,o,m),p(e,n,m),y(n,l),y(l,_),i.m(c[1],l),y(l,r),u=!0},p(e,[m]){s&&s.p&&(!u||m&8)&&D(s,t,e,e[3],u?U(t,e[3],m,null):M(e[3]),null),(!u||m&2)&&i.p(e[1])},i(e){u||(P(s,e),u=!0)},o(e){q(s,e),u=!1},d(e){e&&f(a),s&&s.d(e),c[5](null),e&&f(o),e&&f(n)}}}function z(c,a,o){let{$$slots:n={},$$scope:l}=a,{language:_="javascript"}=a,i,r;j(()=>o(1,r=C.highlight(i.textContent,C.languages[_])));function u(t){A[t?"unshift":"push"](()=>{i=t,o(0,i)})}return c.$$set=t=>{"language"in t&&o(2,_=t.language),"$$scope"in t&&o(3,l=t.$$scope)},[i,r,_,l,n,u]}class G extends w{constructor(a){super();S(this,a,z,x,O,{language:2})}}function Q(c){let a=`
#[get('/')]
fn i_heart_rust(_req: HttpRequest) -> impl Responder {
	"I \u2764\uFE0F Rust!"
}

fn main() {
	let app = App::new()
		.service(i_heart_rust);
}
`,o;return{c(){o=$(a)},l(n){o=R(n,a)},m(n,l){p(n,o,l)},p:N,d(n){n&&f(o)}}}function V(c){let a,o,n,l,_,i,r,u;return r=new G({props:{language:"rust",$$slots:{default:[Q]},$$scope:{ctx:c}}}),{c(){a=h("h2"),o=$("Hello! I'm TORUS, and I'm great at many things!"),n=v(),l=h("h4"),_=$("Chiefly Rust, but that doesn't mean I can't JavaScript or Python..."),i=v(),B(r.$$.fragment)},l(t){a=d(t,"H2",{});var s=g(a);o=R(s,"Hello! I'm TORUS, and I'm great at many things!"),s.forEach(f),n=E(t),l=d(t,"H4",{});var e=g(l);_=R(e,"Chiefly Rust, but that doesn't mean I can't JavaScript or Python..."),e.forEach(f),i=E(t),F(r.$$.fragment,t)},m(t,s){p(t,a,s),y(a,o),p(t,n,s),p(t,l,s),y(l,_),p(t,i,s),K(r,t,s),u=!0},p(t,[s]){const e={};s&1&&(e.$$scope={dirty:s,ctx:t}),r.$set(e)},i(t){u||(P(r.$$.fragment,t),u=!0)},o(t){q(r.$$.fragment,t),u=!1},d(t){t&&f(a),t&&f(n),t&&f(l),t&&f(i),L(r,t)}}}class X extends w{constructor(a){super();S(this,a,null,V,O,{})}}export{X as default};
