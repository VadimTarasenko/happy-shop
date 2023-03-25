import Head from 'next/head';
// components
import { PageLayout } from '@/modules/core/components/page-layout';
import { ProductsBoard } from '@/modules/product/containers/products-board';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Shop</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageLayout>
          <ProductsBoard />
        </PageLayout>
      </main>
    </>
  );
}
