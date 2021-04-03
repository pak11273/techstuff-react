import PropTypes from 'prop-types';
import React from 'react';

const RenderExampleListPage = props => (
  <>
    <h1>Tech Stuff for Rent</h1>
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      {props.data.map(rental => (
        <figure
          key={rental.rental_id}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        >
          <img src={rental.image} alt={rental.name} />
          <h2>{rental.name}</h2>
          <figcaption>
            <h3>{rental.description}</h3>
            <h3>Price per day: {rental.price_per_day}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  </>
);

export default RenderExampleListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderExampleListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
