import React, { useState } from 'react';
import Modal from 'react-modal';
import Styles from './PopUp.module.css';



function PopUP(props) {
    const [isCreatingGroup, setIsCreatingGroup] = useState(true);
    const [groupName, setGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    
    const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#0047FF'];
  
    const handleColorSelect = (color) => {
      setSelectedColor(color);
    };
  
    const createGroup = () => {
      props.createGroup(groupName, selectedColor);
      setGroupName('');
      setSelectedColor('');
    };
  
    return (
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        className={Styles.box}
      >
        <h3 className={Styles.header}>Create New Notes Group</h3>
        <label className={Styles.heading}>Group Name</label>
        <input
          type="text"
          placeholder="Enter group name"
          onBlur={() => setIsCreatingGroup(false)}
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className={Styles.inputbox}
        />
        <div>
          
          <div className={Styles.colorPicker}>
          <label className={Styles.heading}>Choose Color</label>
            {colorOptions.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className={selectedColor === color ? Styles.selectedColor : Styles.colorOption }
                onClick={() => handleColorSelect(color)}
              ></button>
            ))}
          </div>
        </div>
        <button className={Styles.creat} onClick={() => createGroup()}>Create</button>
      </Modal>
    );
}

export default PopUP;
