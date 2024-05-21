export const showSaveAlert = (save, text) => {
  const saveAlertDiv = document.querySelector("[data-save-alert]");

  saveAlertDiv.style.backgroundColor = save ? "#4ade80" : "#f87171";
  saveAlertDiv.innerText = text;
  saveAlertDiv.style.display = "block";

  setTimeout(() => {
    saveAlertDiv.style.display = "none";
  }, 3000);
};

function SaveAlert() {
  return (
    <>
      <div
        style={{ display: "none" }}
        className="absolute top-1 translate-y-[-25px] opacity-0 left-1/2 translate-x-[-50%] px-3 py-2 rounded-md text-black shadow-md animate-save-alert "
        data-save-alert
      ></div>
    </>
  );
}

export default SaveAlert;
