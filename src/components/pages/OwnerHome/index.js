import { AddItem, Container } from './styled';
import { ItemCard, StyledCard } from 'components/common/Card/ItemCard';
import React, { useEffect, useState } from 'react';
import {
  ownerAddItem,
  ownerCancel,
  ownerChangeItem,
  ownerDeleteItem,
  ownerFetchData,
  ownerNewItem,
  ownerSelectItem,
} from 'actions';

import { OwnerGrid } from 'components/common';
import OwnerHomeForm from './OwnerHomeForm';
import { StyledDiv } from '../SplashPage/styled';
import { connect } from 'react-redux';
import styled from 'styled-components';

const initialFormValues = {
  name: '',
  category: '',
  price_per_day: '',
  rental_period: '',
  description: '',
};

function OwnerHome(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [isAdding, setIsAdding] = useState(false)
  // const [isEditing, setIsEditing] = useState (false)

  const {
    message,
    items,
    user,
    thisItem,
    isEditing,
    isAdding,
    needToFetch,
    ownerFetchData,
    ownerSelectItem,
    ownerChangeItem,
    ownerNewItem,
    ownerAddItem,
    ownerDeleteItem,
    ownerCancel,
  } = props;

  useEffect(() => {
    if (user) {
      ownerFetchData();
    }
  }, [user, ownerFetchData]);

  useEffect(() => {
    if (thisItem) {
      setFormValues(thisItem);
    }
  }, [thisItem]);

  useEffect(() => {
    if (needToFetch) {
      ownerFetchData();
    }
  }, [needToFetch]);

  // const Add = () => {
  //   setIsAdding(!isAdding)
  // }

  // const Edit = () => {
  //   setIsEditing(!isEditing)
  // }
  //edit currently has no functionality at all so it's only use
  //at this point is just a cancel 'add new' button

  //dummy data
  // const posts = [
  //   {
  //     name: 'iphone',
  //     category: 'phone',
  //     price_per_day: '25',
  //     rental_period: '7 days',
  //     description: 'good phone',
  //     user_id: 1
  //   },
  //   {
  //     name: 'airpods',
  //     category: 'headphones',
  //     price_per_day: '5',
  //     rental_period: '7 days',
  //     description: 'listen up',
  //     user_id: 2
  //   },
  //   {
  //     name: 'macbook',
  //     category: 'pc',
  //     price_per_day: '30',
  //     rental_period: '5 days',
  //     description: 'type type type',
  //     user_id: 3
  //   },
  // ]

  // const update = (e) => {
  //   e.preventDefault();
  //   const employee = {
  //       name: this.state.name,
  //       age: this.state.age,
  //       salary: this.state.salary,
  //   }
  //   axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
  //   .then(res => console.log(res.data));
  //     }

  const inputChange = (name, value) => {
    console.log(formValues);
    // yup.reach(name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({...formErrors, [name]: ''})
    //   })
    //   .catch(err => {
    //     setFormErrors({...formErrors, [name]: err.errors[0]})
    //   })
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const HideButton = styled.div`
    .addButton {
      display: none;
    }
  `;

  const submit = () => {
    if (isEditing) {
      ownerChangeItem(thisItem.item_id, formValues);
    } else if (isAdding) {
      ownerAddItem({ ...formValues, user_id: user.user_id });
    }
  };

  // useEffect(() => {
  //   homeSchema.isValid(formValues).then(valid =>
  //     setDisabled(!valid))
  //   }, [formValues])

  return (
    <StyledDiv>
      <Container>
        <h1 style={{ gridArea: 'title' }}>Your listed equipment</h1>
        {message}
        <AddItem>
          <button
            style={{ gridArea: 'button' }}
            className="addButton"
            onClick={() => ownerNewItem()}
          >
            Add New Item
          </button>

          <h2>
            {isAdding && 'Add Item'}
            {isEditing && 'Edit Item'}
          </h2>
          {isAdding || isEditing ? (
            <div>
              <OwnerHomeForm
                values={formValues}
                setFormValues={setFormValues}
                submit={submit}
              />
              <button onClick={() => ownerCancel()}>Cancel</button>
            </div>
          ) : null}
          {/* {isAdding ? HideButton : null} */}
          {/* <div> */}
        </AddItem>

        <OwnerGrid>
          {items.map((post, i) => (
            <ItemCard style={{ gridArea: 'card' }} post={post} key={i} />
          ))}
        </OwnerGrid>
      </Container>
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    message: state.message,
    items: state.items,
    user: state.user,
    thisItem: state.thisItem,
    needToFetch: state.needToFetch,
    isEditing: state.isEditing,
    isAdding: state.isAdding,
  };
};
export default connect(mapStateToProps, {
  ownerFetchData,
  ownerSelectItem,
  ownerChangeItem,
  ownerNewItem,
  ownerAddItem,
  ownerDeleteItem,
  ownerCancel,
})(OwnerHome);
