export const showSaveAlert = (save) => {
  const saveAlertDiv = document.querySelector("[data-save-alert]");

  saveAlertDiv.style.backgroundColor = save ? "#4ade80" : "#f87171";
  saveAlertDiv.innerText = save ? "Saved" : "Cannot save Flow";
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
        className="absolute top-1 left-1/2 translate-x-[-50%] px-3 py-2 rounded-md text-black shadow-md "
        data-save-alert
      ></div>
    </>
  );
}

export default SaveAlert;
