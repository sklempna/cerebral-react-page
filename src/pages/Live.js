import React from "react";

function Live() {
  const nextShows = [
    {
      key: "1",
      date: "18 May 2024",
      description: "Kopf und Kragen, Fürth (DE)",
      ticket_link: "https://www.kopfundkragen-club.de/tickets",
    },
    {
      key: "2",
      date: "25 May 2024",
      description: "Hell, Diest (BE)",
      ticket_link:
        "https://www.helldiest.com/event-info/primal-creation-cerebral-invasion-tenebris-luna",
    },
  ];

  const pastShows = [
    {
      key: "3",
      date: "4 May 2024",
      description: "Stormcrusher Contest, Nürnberg (DE)",
    },
  ];

  return (
    <div class="container mx-auto mt-10 flex flex-col min-h-screen">
      <div class="space-y-40 pt-0 sm:pt-20 flex flex-col flex-1">
        {/* <!-- Upcoming Dates --> */}
        <div>
          <div class="bg-demon bg-center py-2 md:py-5 flex flex-col items-center space-y-5 md:space-y-10 lg:bg-cover backdrop-blur-sm text-white mb-2">
            <h1 class="text-xl lg:text-4xl">Upcoming Dates</h1>
          </div>
          <div class="space-y-2">
            {nextShows.map((show) => (
              <div
                key={show.key}
                class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900 items-center"
              >
                <div>{show.date}</div>
                <div>{show.description}</div>
                <a
                  href={show.ticket_link}
                  target="_blank"
                  class="py-2 px-4 bg-red-800 rounded-lg hover:text-black transition duration-300 items-center"
                >
                  Tickets
                </a>
              </div>
            ))}
            {/* <div class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900 items-center">
              <div>20-01-2024</div>
              <div>This Show</div>
              <a
                href="#"
                class="py-2 px-4 bg-red-800 rounded-lg hover:text-black transition duration-300 items-center"
              >
                Tickets
              </a>
            </div>
            <div class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900 items-center">
              <div>20-01-2024</div>
              <div>That Show</div>
              <a
                href="#"
                class="py-2 px-4 bg-red-800 rounded-lg hover:text-black transition duration-300 items-center"
              >
                Tickets
              </a>
            </div> */}
          </div>
        </div>
        {/* <!-- Past Dates --> */}
        <div>
          <div class="bg-skulls bg-center py-2 md:py-5 flex flex-col items-center space-y-5 md:space-y-10 lg:bg-cover backdrop-blur-sm text-white mb-2">
            <h1 class="text-xl lg:text-4xl">Past Dates</h1>
          </div>
          <div class="space-y-2">
            {pastShows.map((show) => (
              <div class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900">
                <div>{show.date}</div>
                <div>{show.description}</div>
              </div>
            ))}
            {/* <div class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900">
              <div>20-01-2024</div>
              <div>This Show</div>
            </div>
            <div class="flex justify-between text-gray-300 py-5 px-2 sm:px-20 bg-gray-900">
              <div>20-01-2024</div>
              <div>That Show</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div class="text-sm text-gray-300">
        <p>© Cerebral Invasion 2024</p>
      </div>
    </div>
  );
}

export default Live;
