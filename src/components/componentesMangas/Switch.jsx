const Switch = ({ isChecked, handleCheckboxChange }) => {
  return (
    <>
      <div className="flex justify-center gap-5 my-3 items-center">
        <p className="text-gray-500 font-semibold text-sm">new</p>

        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div className="box bg-emerald-500 block h-6 w-12 rounded-full"></div>
            <div
              className={`dot absolute bg-white top-1 flex h-4 w-4 items-center justify-center rounded-full transition  ${
                isChecked ? "left-1" : "right-1"
              }`}
            ></div>
          </div>
        </label>
        <p className="text-gray-500 font-semibold text-sm">old</p>
      </div>
    </>
  );
};

export default Switch;
