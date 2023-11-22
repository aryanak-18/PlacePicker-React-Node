export async function fetchAvailablePlaces() {
  const response = await fetch("https://placepicker-react-node.onrender.com/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("https://placepicker-react-node.onrender.com/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await response.json(0);

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}

export async function fetchUserPlaces() {
    const response = await fetch("https://placepicker-react-node.onrender.com/user-places");
    const resData = await response.json();
  
    if (!response.ok) {
      throw new Error("Failed to fetch user places");
    }
  
    return resData.places;
  }
