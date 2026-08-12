import { useState } from "react";
import Header from "../components/Header";

function Form() {
  const [photo, setPhoto] = useState({
    file: null,
    objectURL: null,
  });
  const [fullname, setFullname] = useState({
    value: "",
    isError: false,
  });
  const [gender, setGender] = useState("");
  return (
    <>
      <Header title="Profile" />
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            photo: photo.file,
            fullname: fullname.value,
            gender,
          };
          console.log(data);
        }}
      >
        <header className="text-3xl font-bold">Profile</header>
        <div className="flex flex-col items-center">
          <label htmlFor="photo">
            <div className="h-30 w-30 rounded-full overflow-hidden">
              <img
                src={photo.objectURL}
                alt="profile photo"
                className="h-full w-full object-cover"
              />
            </div>
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="hidden"
            onChange={(e) => {
              if (photo.objectURL) {
                URL.revokeObjectURL(photo.objectURL);
              }
              setPhoto({
                file: e.target.files[0],
                objectURL: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 w-8/10 items-center">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-black border-solid p-1"
            value={fullname.value}
            onChange={(e) => {
              setFullname((prevState) => {
                const newFullname = e.target.value;
                // if (newFullname.length === 0) {
                //   return {
                //     ...prevState,
                //     fullname: newFullname,
                //     isError: true,
                //   };
                // }
                // return {
                //   ...prevState,
                //   fullname: newFullname,
                //   isError: false,
                // };
                return {
                  ...prevState,
                  value: newFullname,
                  isError: newFullname.length < 5 ? true : false,
                };
              });
            }}
          />
          <p
            className={`${fullname.isError ? "text-red-600" : "opacity-0"} col-[1/3]`}
          >
            Nama Lengkap harus lebih dari 5 karakter
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-8/10 items-center">
          <p>Jenis Kelamin</p>
          <div>
            {["Laki-laki", "Perempuan"].map((v) => {
              return (
                <RadioInput
                  key={v}
                  name="gender"
                  id={v}
                  text={v}
                  checked={v === gender}
                  onChange={() => {
                    setGender(v);
                  }}
                />
              );
            })}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function RadioInput({ name, id, text, checked, onChange }) {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default Form;
