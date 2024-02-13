import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent = () => {
    return (
        <>
            <EventForm />
        </>
    )
}

export default NewEvent;

export async function action({request, params}) {
    const data = await request.formData();
    console.log(data);
    const eventData = {
        title: data.get('title'),
        image:data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
    console.log(eventData);
  const res = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  console.log(res);
  if(!res.ok) {
    throw json({message: 'Error Data'})
  } else {
    // return res;
    return redirect('/events');
  }
}