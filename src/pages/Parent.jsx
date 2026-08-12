import { useState, useEffect } from "react";

// state lifting

function Parent() {
  const [hobbies, setHobbies] = useState(() => {
    // mengambil dari localstorage
    const hobbies = localStorage.getItem("hobbies");
    if (!hobbies) {
      return [];
    }
    return JSON.parse(hobbies);
  });
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log("did mount");
    // DOMContentLoaded
    // fetching
  }, []); // no trigger
  useEffect(() => {
    console.log("hobby updated");
    // update ke localstorage
    if (hobbies && hobbies.length > 0) {
      localStorage.setItem("hobbies", JSON.stringify(hobbies));
    }
  }, [hobbies]); // triggered when hobbies changed/created
  // useEffect(() => {
  //   console.log("num updated");
  // }, [num]);
  return (
    <>
      <div className="p-4">
        <p>{num}</p>
        <button
          onClick={() => {
            setNum((prevNum) => prevNum - 1);
          }}
        >
          Decrease
        </button>
      </div>
      <HobbiesView hobbies={hobbies} />
      <AddNewHobby updateHobby={setHobbies} />
    </>
  );
}

/**
 * View Component for Hobbies
 * @param {Object} props
 * @param {String[]} props.hobbies
 * @returns
 */
function HobbiesView({ hobbies }) {
  const hobbiesList = hobbies.map((hobby, idx) => {
    return (
      <li className="pl-3" key={idx}>
        {hobby}
      </li>
    );
  });
  const getHeading = () => {
    if (hobbies.length > 1) {
      return "Hobbies are";
    }
    return "Hobby is";
  };
  return (
    <div className="p-4">
      {/* ternary: condition ? if true : if false */}
      {/* hobbies.length > 1 ? "Hobbies are" : "Hobby is" */}
      <p>My {getHeading()}:</p>
      <ul>{hobbiesList}</ul>
    </div>
  );
}

/**
 * Add New Hobby Component
 * @param {Object} props
 * @param {import("react").Dispatch<import("react").SetStateAction<String[]>>} props.updateHobby
 * @returns
 */
function AddNewHobby({ updateHobby }) {
  return (
    <form
      className="p-4"
      onSubmit={(e) => {
        e.preventDefault();
        const newHobby = e.target.hobby.value;
        updateHobby((prevState) => {
          const newHobbies = [...prevState, newHobby];
          e.target.hobby.value = "";
          return newHobbies;
          //   prevState.push(e.target.hobby.value);
          //   return prevState;
        });
      }}
    >
      <label htmlFor="hobby">New Hobby: </label>
      <br />
      <input
        type="text"
        name="hobby"
        id="hobby"
        className="border-2 border-black border-solid rounded-sm p-2"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Parent;
