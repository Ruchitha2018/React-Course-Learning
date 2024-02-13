import { useLoaderData, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetails = () => {
    const data = useRouteLoaderData('event-detail');
    console.log(data);
    return (
        <>EventDetails Page
        {/* {JSON.stringify(data)} */}
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetails;

export async function loader({ request, params }) {
    const id = params.eventId
    console.log(id);
    const res = await fetch('http://localhost:8080/events/' + id);
    if (!res.ok) {
        throw json({ message: 'Could not fetch Details' })
    }
    else {
        return res;
    }
}