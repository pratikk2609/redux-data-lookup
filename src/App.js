import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeople } from './features/dataslice';

const App = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.data.people);

  const [selectedName, setSelectedName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    const data = [
      {
        "_id": "68653791bf43b8826a7ba70c",
        "index": 0,
        "guid": "1d9dfa07-d3e1-4f0d-abae-10169d05d064",
        "eyeColor": "brown",
        "name": "Bass Francis",
        "gender": "male",
        "company": "NIQUENT",
        "email": "bassfrancis@niquent.com",
        "phone": "+1 (913) 598-2496",
        "latitude": -58.178082,
        "longitude": 126.656046
      },
      {
        "_id": "68653791247d4e32b824423d",
        "index": 1,
        "guid": "186ea14c-55a9-4819-ab4a-16a0f361ae9f",
        "eyeColor": "green",
        "name": "Bobbi Guthrie",
        "gender": "female",
        "company": "GINKOGENE",
        "email": "bobbiguthrie@ginkogene.com",
        "phone": "+1 (879) 461-2302",
        "latitude": 47.438014,
        "longitude": 83.858143
      },
      {
        "_id": "68653791ed0106f02ea12c30",
        "index": 2,
        "guid": "3695d0d8-1164-49bb-814b-7ed55936df11",
        "eyeColor": "green",
        "name": "Casey Vasquez",
        "gender": "female",
        "company": "QUALITERN",
        "email": "caseyvasquez@qualitern.com",
        "phone": "+1 (868) 470-3358",
        "latitude": 63.271941,
        "longitude": 127.636658
      },
      {
        "_id": "68653791a04514305bd0faf7",
        "index": 3,
        "guid": "ba5073fe-2592-43d5-bec3-261254e0aac1",
        "eyeColor": "brown",
        "name": "Christi Mcintyre",
        "gender": "female",
        "company": "ECOSYS",
        "email": "christimcintyre@ecosys.com",
        "phone": "+1 (952) 581-3647",
        "latitude": 29.641062,
        "longitude": 117.187887
      },
      {
        "_id": "686537915977dbcd317dd8e7",
        "index": 4,
        "guid": "2df12d1f-83ff-47ef-8525-9fbcd09b6749",
        "eyeColor": "brown",
        "name": "Charity Richardson",
        "gender": "female",
        "company": "ETERNIS",
        "email": "charityrichardson@eternis.com",
        "phone": "+1 (989) 513-3999",
        "latitude": 30.400517,
        "longitude": 30.895475
      }
    ];

    dispatch(setPeople(data));
  }, [dispatch]);

  // Safely extract first names
  const names = [...new Set(
    people
      .filter((p) => p && typeof p.name === 'string')
      .map((p) => p.name.split(' ')[0])
  )];

  // Get person based on first name
  const selectedPerson = people.find(
    (p) => p?.name?.startsWith(selectedName)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Info Lookup</h2>

      {/* Dropdown 1: First Name */}
      <label>Choose First Name: </label>
      <select value={selectedName} onChange={(e) => {
        setSelectedName(e.target.value);
        setSelectedCompany('');
      }}>
        <option value="">-- Select --</option>
        {names.map((name, i) => (
          <option key={i} value={name}>{name}</option>
        ))}
      </select>

      {/* Dropdown 2: Company */}
      {selectedPerson && (
        <div style={{ marginTop: '20px' }}>
          <label>Company: </label>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value={selectedPerson.company}>{selectedPerson.company}</option>
          </select>
        </div>
      )}

      {/* Show Email */}
      {selectedCompany && (
        <div style={{ marginTop: '20px' }}>
          <strong>Email: </strong>
          {selectedPerson?.email}
        </div>
      )}
    </div>
  );
};

export default App;
