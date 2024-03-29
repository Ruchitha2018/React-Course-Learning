export async function fetchAvailablePlaces() {
    const res = await fetch('http://localhost:3000/places');
    const data = await res.json();
    return data.places;
}

export async function updateUserPlaces(places) {
    console.log('Places', places)
    const res = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();
    console.log('Data1', data);
    return data.message;

}