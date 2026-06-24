import { useEffect, useState } from 'react'
function App() {

const [activities, setActivities] = useState([]); 
useEffect(() => {
  fetch('http://localhost:5001/api/activities')
    .then(response => response.json())
    .then(data => setActivities(data))
    .catch(error => console.error('Error fetching activities:', error));
}, []);

  return (
    <>
      <h1 className="app" style={{ color: 'red' }}>Welcome to Reactivities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.title}</li>
        ))} 
      </ul>
    </>
  )
}

export default App
