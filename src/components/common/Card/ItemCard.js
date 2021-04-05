import { ownerDeleteItem, ownerSelectItem } from 'actions';

import React from 'react';
import { StyledCard } from './styled';

export const ItemCard = ({ post }) => {
  return (
    <StyledCard>
      <h2>{post.name}</h2>
      <p>{post.category}</p>
      <p>{post.description}</p>
      <p>${post.price_per_day}</p>
      <p>{post.rental_period}</p>

      <div>
        <button onClick={() => ownerSelectItem(post.item_id)}>Edit</button>
        <button onClick={() => ownerDeleteItem(post.item_id)}>Delete</button>
      </div>
    </StyledCard>
  );
};
