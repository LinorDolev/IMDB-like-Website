import React from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, FormControl, ControlLabel, 
        Button, SelectPicker, Modal, ButtonToolbar, Icon} from 'rsuite';

import {onInputChanged, onAddMovie, 
        onSelectModal, clearFields} from '../../redux/actions/MoviesActions';
import CATEGORIES from '../../common/Categories';
import './MovieFormModal.css';

const validateFields = (values) => Object.values(values).some(value => (!value || value === ''));

const MovieForm = (props) => {
  const {onAddMovie, onInputChanged, movieForm, closeModal} = props;
  const values = movieForm;
  const fields = ['Title', 'Image', 'Rate'];
  const placeholders = ['Ex: Avatar', 'Ex: http://www.site.com/image.png', '1 - 5'];
  const categories = CATEGORIES;

  const fieldsViews = fields.map((field, key) => 
    <FormGroup key={key}>
      <ControlLabel>
        <h4>{field}</h4>
      </ControlLabel>
      <FormControl name={field} value={values[field]} placeholder={placeholders[key]}
        min={1} max={5} type={field === 'Rate' ? 'number': 'text'} style={{width: 350}} />
    </FormGroup>
  );

 return (
   <Form onChange={(event) => onInputChanged(event)} >
      <FormGroup>
        <ControlLabel><h4>Category</h4></ControlLabel>
        <SelectPicker className='SelectPicker'
          style={{width: '99%'}} name='Category' 
          data={categories} value={values['Category'].label} 
          onChange={(event) => onInputChanged({Category: event})}/>
      </FormGroup>
      {fieldsViews}
      <Button className='ModalButton' 
        onClick={()=> {onAddMovie(values);closeModal();}} 
        appearance='primary'  style={{width: '99%'}}
        disabled={validateFields(values)}>
        Submit
      </Button>
    </Form>)
}

const MovieFormModal = (props) => {
    const show = props.movieForm.show;
    
    return (
      <div className='Container'>
        <ButtonToolbar>
          <Button className='ModalButton SelectModalButton' 
            onClick={()=>props.onSelectModal(show)}> 
            <Icon icon='film' size='lg'/>
            &nbsp; Add Movie 
          </Button>
        </ButtonToolbar>
        <Modal className='Modal' show={show} size='xs' onEnter={props.clearFields}>
          <Modal.Header onHide={(event) => props.onSelectModal(show)}>
            <h3>Add Movie</h3>
          </Modal.Header>
          <Modal.Body>
            <MovieForm movieForm={props.movieForm} onInputChanged={props.onInputChanged} 
              onAddMovie={props.onAddMovie} closeModal={() => props.onSelectModal(true)}/>
          </Modal.Body>
        </Modal>
      </div>
    );
}


const mapStateToProps = (state) => {
    return{
        movieForm: state.movieForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onInputChanged: (event) => {
            dispatch(onInputChanged(event));
        },
        onAddMovie: (movie) => {
          dispatch(onAddMovie(movie));
        },
        onSelectModal: (show) => {
          dispatch(onSelectModal(show));
        },
        clearFields: () => {
          dispatch(clearFields());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieFormModal);
