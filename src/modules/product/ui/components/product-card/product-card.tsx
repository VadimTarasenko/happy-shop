import { type FC } from 'react';
import { faker } from '@faker-js/faker';

import type { ProductCardProps } from './product-card.interface';
import styles from './product-card.module.scss';

export const ProductCard: FC<ProductCardProps> = () => {
  return (
    <article className={styles.root}>
      <h2 className={styles.title}>
        Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1
      </h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainer_ratio} />
        <img
          className={styles.imageContainer_image}
          src={faker.image.technics(undefined, undefined, true)}
          alt='product image'
        />
      </div>
      <section className={styles.productData}>
        <p className={styles.price}>$1,200.00</p>
      </section>
    </article>
  );
};
