import { useState, useEffect } from "react";

// state lifting

function Parent() {
  const [hobbies, setHobbies] = useState(["Sleeping"]);
  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log("did mount");
    // DOMContentLoaded
    // fetching
  }, []); // no trigger
  useEffect(() => {
    console.log("hobby updated");
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

function AddNewHobby({ updateHobby }) {
  return (
    <form
      className="p-4"
      onSubmit={(e) => {
        e.preventDefault();
        updateHobby((prevState) => {
          const newHobbies = [...prevState, e.target.hobby.value];
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
        className="border-2 border-black border-solid rounded-sm"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Parent;
