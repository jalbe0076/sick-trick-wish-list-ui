import './Form.css';
import { useState } from 'react';

const Form = ({addTrick}) => {
  const [stance, setStance] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    const newTrick = {
      name, 
      obstacle, 
      stance, 
      tutorial: link
    };
    
    addTrick(newTrick);
  }

  return (
    <form>
      <select name='stance' value={stance} onChange={event => setStance(event.target.value)}>
        <option value=''>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>  
      <input type='text' placeholder='Name of Trick' value={name} onChange={event => setName(event.target.value)}/>
      <select name='stance' value={obstacle} onChange={event =>setObstacle(event.target.value)}>
        <option value=''>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input type='text' placeholder='Link to Tutorial' value={link} onChange={event => setLink(event.target.value)}/>
      <button onClick={(event) => submitForm(event)}>SUBMIT</button>
    </form>
  );
};

export default Form;