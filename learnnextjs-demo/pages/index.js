import Link from "next/link";

const Index = () => (
  <div>
    <Link prefetch href={{ pathname: "/about", query: { name: "Robbie" } }}>
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
