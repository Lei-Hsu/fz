import Image from 'next/image';
import { createClient } from '@sanity/client';
import { useEffect, useState } from 'react';

export const client = createClient({
  projectId: 'ecoxjoj0',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  // apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default function Home() {
  const [data, setData] = useState<any>();
  
  useEffect(() => {
    client
      .fetch(
        `*[_type == "homepage"]{
      textSectionOne,
      textSectionTwo,
      textSectionThree,
      "bannerImageUrlOne": bannerImageOne.asset->url,
      "bannerImageUrlTwo": bannerImageTwo.asset->url
    }`,
      )
      .then((homepageData) => {
        setData(homepageData[0]);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題ㄧ</h1>
        <p className="text-2xl text-center">{data?.textSectionOne}</p>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題二</h1>
        <p className="text-2xl text-center">{data?.textSectionTwo}</p>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題三</h1>
        <p className="text-2xl text-center">{data?.textSectionThree}</p>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題三</h1>
        <Image
          src={data?.bannerImageUrlOne}
          width={100}
          height={100}
          alt="圖片一"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center mb-12">首頁標題二</h1>
        <Image
          src={data?.bannerImageUrlTwo}
          width={100}
          height={100}
          alt="圖片一"
        />
      </div>
    </main>
  );
}
