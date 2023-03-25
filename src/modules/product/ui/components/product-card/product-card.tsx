import { type FC } from 'react';
import { faker } from '@faker-js/faker';
// components
import { Rating } from '@/modules/core/ui/components/rating';

import type { ProductCardProps } from './product-card.interface';
import styles from './product-card.module.scss';

export const ProductCard: FC<ProductCardProps> = () => {
  return (
    <article className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContainer_image}
          src={faker.image.technics(undefined, undefined, true)}
          alt='product image'
        />
      </div>
      <section className={styles.productData}>
        <h2 className={styles.title}>Product name</h2>
        <p className={styles.description}>
          Naleg jujez kanwibdoc vihge dir uzitumva dojapbal asaziwus sewkuv new
          ru vib doldu mube bodcek otgioba fa siakaot. Wu vol ci rudozroc lo
          jamti fu fesede wedoga jeeh romfaobe zefala nufeddom mibdihto waki buj
          epas.
        </p>
        <div className={styles.price}>
          <Rating value={3} readonly />
        </div>
        <p className={styles.price}>$1,200.00</p>
      </section>
    </article>
  );
};
