import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題</h1>
        <p className="text-2xl text-center">
          A starter template for Next.js and Tailwind CSS.
        </p>
      </div>
    </main>
  );
}
