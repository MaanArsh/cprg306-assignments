import Link from "next/link";

export default function Page() {
  return (
<main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <h1 className="font-bold text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-2">Week 2</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-3">Week 3</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-4">Week 4</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-5">Week 5</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-6">Week 6</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-7">Week 7</Link></li>
      <li><Link className="hover:text-blue-400 hover:underline" href="week-8">Week 8</Link></li>
      </ul>
    </main>
  );
};