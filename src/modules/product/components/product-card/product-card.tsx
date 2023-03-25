import { memo } from 'react';
// components
import { Rating } from '@/modules/core/components/rating';

import type { ProductCardProps } from './product-card.interface';
import styles from './product-card.module.scss';

export const ProductCard = memo<ProductCardProps>(({ product }) => {
  return (
    <article className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContainer_image}
          src={product.image}
          alt='product image'
        />
      </div>
      <section className={styles.productData}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          <Rating value={product.rating} readonly />
        </div>
        <p className={styles.price}>${product.price}</p>
      </section>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';
