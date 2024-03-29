import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';


const NewProject = ({onAdd}) => {
 const modal = useRef();
 console.log('Modal', modal)
 const title = useRef();
 const description = useRef();
 const date = useRef();


 const handleSave = () => {
  const enteredTitle = title.current.value;
  const enteredDesc = description.current.value;
  const enteredDate = date.current.value;

  if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDate.trim() === '') {
    modal.current.open();
  } else {
     onAdd({
      id:Math.random(),
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate
     })
  }
 }
 return (
  <>
  <Modal ref={modal} >
  <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
  </Modal>
    <div className="w-[35rem] mt-16">
   <menu className="flex items-center justify-end gap-4 my-4">
    <li>
     <button className="text-stone-800 hover:text-stone-950">Cancel</button>
    </li>
    <li>
     <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
    </li>
   </menu>
   <div>
    <Input label="Title" ref={title} />
    <Input label="Description" textarea ref={description} />
    <Input type="date" label="Due Date" ref={date} />
   </div>
  </div>
  </>


 )
}

export default NewProject;