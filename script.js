const roomlist = document.getElementById('roomlist');
const shuffleButton = document.getElementById('shuffleButton');

// Given array of room members' names
const girlsNames = ["Jagruti Patle","Priti Wanjari","Payal Dhok","Rakhi Thoke","Mansi Shakhare","Gunjan Rokde","Priyanka Dhomne",
"Sanjana Gadhekar","Sakshi Parskar","Sweta Darvai","Bhawna Kothe","Mohini Ramteke","Renuka Pohakar","Ekta Adhau",
"Yogita Jibhkate","Vaishnavi Parskar","Jaishree Dhurde","Harsha Chandurkar","Nandini Dhaware","Aditi Dahake",
"Pratiksha Sapane","Arti Rathod","Kajal Chauhan","Priya Sadar","Vaishnavi Khode","Yogita Kurhade","Dipali Khatade",
"Vishakha Malewar","Sakshi Mankar","Janavi Dhok"];
function shuffleArray(array) 
    {
      for (let i = array.length-1; i>0; i--) 
      {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function shuffleRooms() 
    {
      const shuffledNames = [...girlsNames];
      shuffleArray(shuffledNames);

      roomlist.innerHTML = '';

      for (let roomNumber = 1; roomNumber <= 10; roomNumber++) 
      {
        const room = document.createElement('div');
        room.className = 'room';
        room.innerHTML = `<h3>Room ${roomNumber}</h3>`;

        for (let i = 0; i < 3; i++) 
        {
          const girlIndex = (roomNumber - 1) * 3 + i;
          const girlName = shuffledNames[girlIndex];
          const p = document.createElement('p');
          p.textContent = girlName;
          room.appendChild(p);
        }

        roomlist.appendChild(room);
      }
    }

    shuffleButton.addEventListener('click', shuffleRooms);

