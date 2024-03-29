// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Events, { loader } from "./pages/Events";
import EventDetails, { loader as EventDetailsLoader, action as deleteEventAction } from "./pages/EventDetails";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsRoot from "./pages/EventsRoot";
import HomeRoot from "./pages/HomeRoot";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { action as addFormAction } from "./components/EventForm";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeRoot />,
      errorElement: <Error />,
      children: [
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: loader
            },
            {
              path: ':eventId',
              loader: EventDetailsLoader,
              id: 'event-detail',
              children: [
                {
                  index: true,
                  element: <EventDetails />,
                  action: deleteEventAction 
                },
                { path: 'edit', element: <EditEvent />, action: addFormAction },
              ]
            },
            { path: 'new', element: <NewEvent />, action: addFormAction },
          ]
        },


      ]
    }
  ])
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
