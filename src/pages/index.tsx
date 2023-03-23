import Head from 'next/head';
// components
import { PageLayout } from '@/modules/core/ui/components/page-layout';
import { ProductsBoard } from '@/modules/product/ui/containers/products-board';

import Logo from '@/assets/icons/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>HappyShop | Products</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageLayout>
          <div style={{ maxWidth: 1440, margin: '20px auto 0' }}>
            <Logo />
          </div>
          <ProductsBoard />
        </PageLayout>
      </main>
    </>
  );
}
