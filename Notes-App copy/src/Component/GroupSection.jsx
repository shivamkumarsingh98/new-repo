import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import PopUP from './PopUP';
import Styles from './GroupSection.module.css';
import { VscSend } from "react-icons/vsc";
import {FaArrowLeft } from "react-icons/fa6";

function GroupSection() {
    const [useSection, setSection] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isSectionOneVisible, setSectionOneVisible] = useState(true);


    useEffect(() => {

        const storedNoteGroups = localStorage.getItem('noteGroups');
        if (storedNoteGroups) {
            setSection(JSON.parse(storedNoteGroups));
        }
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }

    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const isMobile = useMediaQuery('(max-width:767px)');


    const handleGroupClick = (groupName) => {
        setSelectedGroup(groupName);
        setSectionOneVisible(false);
    }


    const createGroup = (groupName, color) => {
        const group = { name: groupName, color: color };
        const updatedGroups = [...useSection, group];
        setSection(updatedGroups);
        setInputValue("");
        closeModal();
        localStorage.setItem('noteGroups', JSON.stringify(updatedGroups));
    };

    const addNote = () => {
        if (newNote && selectedGroup) {
            const newNoteObject = {
                text: newNote,
                group: selectedGroup,
                created: new Date().toLocaleString(),
            };
            setNotes([...notes, newNoteObject]);
            setNewNote('');

            localStorage.setItem('notes', JSON.stringify([...notes, newNoteObject]))
        }
    };
    const toggleVisibility = () => {
        setSectionOneVisible(!isSectionOneVisible);
        console.log("hello")
       
      };



    const filteredNotes = notes.filter((note) => note.group === selectedGroup);


    return (
        <div>
            {isMobile ? (
                <div className={Styles.body}>
                    <div className={Styles.sectionone}style={{ display: isSectionOneVisible ? 'block' : 'none' }}>
                        <h2>Pocket Notes</h2>
                        <button onClick={openModal} className={Styles.btn}>
                            + Create Notes group
                        </button>
                        <PopUP
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                            createGroup={createGroup}
                            selectedColor={selectedColor}
                        />
                        <div className={Styles.contenar}>
                            <div>
                                <div className={Styles.groupbody}>
                                    {useSection.map((group) => (
                                        <div
                                            key={group.name}
                                            onClick={() => handleGroupClick(group.name)}
                                            className={Styles.section}
                                        >
                                            <p
                                                className={Styles.colorbox}
                                                style={{ backgroundColor: group.color }}
                                            >
                                                {group.name.charAt(0).toUpperCase()}
                                                {group.name.charAt(1).toUpperCase()}
                                            </p>
                                            {group.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.sectiontwo}style={{ display: isSectionOneVisible ? 'none' : 'block' }}>
                  
                        {selectedGroup ? (
                            <h2 className={Styles.header}>
                                  <button onClick={toggleVisibility}><FaArrowLeft/></button>
                                <label className={Styles.colorboxtwo}
                                    style={{ backgroundColor: selectedGroup.color }}>
                                    {selectedGroup.charAt(0).toUpperCase()}
                                    {selectedGroup.charAt(1).toUpperCase()}
                                </label>
                                
                                {selectedGroup}
                            </h2>
                        ) : (
                            <h2 className={Styles.header}>Please select a group</h2>
                        )}

                        <div className={Styles.notesection}>
                            {filteredNotes.map((note, index) => (
                                <div key={index} className={Styles.sections}>
                                    <p style={{fontsize:"10px"}}>{note.created}</p>
                                    <p className={Styles.sectiontext}>{note.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={Styles.chatbox}>
                            <div className={Styles.desinbox}>
                                <input
                                    type="text"
                                    placeholder="Enter a new note"
                                    className={Styles.typebox}
                                    value={newNote}
                                    onChange={(e) => setNewNote(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            addNote();
                                        }
                                    }}
                                />
                                <button className={Styles.addbtn} onClick={addNote}>
                                    <VscSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div div className={Styles.body}>
                    <div className={Styles.sectionone}>
                        <h2>Pocket Notes</h2>
                        <button onClick={openModal} className={Styles.btn}>+ Create Notes group</button>
                        <PopUP
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            inputValue={inputValue}
                            handleInputChange={handleInputChange}
                            createGroup={createGroup}
                            selectedColor={selectedColor}
                        />
                        <div className={Styles.contenar}>
                            <div>
                                <div className={Styles.groupbody}>
                                    {useSection.map((group) => (
                                        <div key={group.name} onClick={() => setSelectedGroup(group.name)} className={Styles.section}>
                                            <p className={Styles.colorbox} style={{ backgroundColor: group.color }}>{group.name.charAt(0).toUpperCase()}{group.name.charAt(1).toUpperCase()}</p>
                                            {group.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.sectiontwo}>
                        {selectedGroup ? (
                            <h2 className={Styles.header}>
                                <label className={Styles.colorboxtwo} style={{ backgroundColor: selectedGroup.color }}>
                                    {selectedGroup.charAt(0).toUpperCase()}{selectedGroup.charAt(1).toUpperCase()}
                                </label>
                                {selectedGroup}
                            </h2>
                        ) : (
                            <h2 className={Styles.header}>Please select a group</h2>
                        )}


                        <div className={Styles.notesection}>
                            {filteredNotes.map((note, index) => (
                                <div key={index} className={Styles.sections}>
                                    <p>{note.created}</p>
                                    <p className={Styles.sectiontext}>{note.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={Styles.chatbox}>
                            <div className={Styles.desinbox}>
                                <input
                                    type="text"
                                    placeholder="Enter a new note"
                                    className={Styles.typebox}
                                    value={newNote}
                                    onChange={(e) => setNewNote(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            addNote();
                                        }
                                    }}
                                />
                                <button className={Styles.addbtn} onClick={addNote}> <VscSend /></button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GroupSection;




