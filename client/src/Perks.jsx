import React from "react";


export default function Perks({ selected, onChange }) {
  // Local handler to toggle perks
  // function handleCheckboxChange(ev) {
  //   const { checked, name } = ev.target;
    
  //   if (checked) {
  //     onChange([...selected, name]);
  //   } else {
  //     onChange(selected.filter((perk) => perk !== name));
  //   }
  // }
   function handleCheckboxChange(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected,name]);
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }
   function preInput(label, description) {
  return (
    <div>
      <h2 className="text-xl mt-4">{label}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}


  return (
    <div>
      {preInput("Perks", "Select all the perks that apply to your place.")}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="wifi"
            checked={selected.includes("wifi")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Wi-Fi</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="kitchen"
            checked={selected.includes("kitchen")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Kitchen</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="parking"
            checked={selected.includes("parking")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Free Parking</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="pool"
            checked={selected.includes("pool")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Pool</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="pets"
            checked={selected.includes("pets")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Pets</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="aircon"
            checked={selected.includes("aircon")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>Air Conditioning</span>
        </label>
        <label className="border p-4 rounded-lg flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="tv"
            checked={selected.includes("tv")}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span>TV</span>
        </label>
      </div>
    </div>
  );
}

