window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // Recipe:

  // Create a variable for the ride data:
  let rideData = json
  // console.log(rideData[1])

  // with a loop
  // for (declare a variable for counting ("counter variable"); determine the criteria for the number of times to loop; increment the counter)
  for (let i = 0; i < json.length; i++) {
  // console.log(rideData[i])

  // Insert HTML into the products element, using the data from each product 
  let rides = rideData[i]
  let ridesElement = document.querySelector(`.rides`)
  ridesElement.insertAdjacentHTML(`beforeend`,`

  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>[Help?]
    </span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${rides.passengerDetails.last}, ${rides.passengerDetails.first}</h2>
        <p class="font-bold text-gray-600">${rides.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${rides.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${rides.pickupLocation.address}</p>
        <p>${rides.pickupLocation.city}, ${rides.pickupLocation.state}, ${rides.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${rides.dropoffLocation.address}</p>
        <p>${rides.dropoffLocation.city}, ${rides.dropoffLocation.state}, ${rides.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
    `)



  }
  // 

  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
})