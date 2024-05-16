import ChatbotFlow from "./components/ChatbotFlow";
import Header from "./components/Header";
import MessagePanel from "./components/MessagePanel";
import SaveAlert from "./components/SaveAlert";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <SaveAlert />
      <Header />
      <div className="w-full h-[calc(100%-51.2px)] flex flex-row justify-between items-start gap-0">
        <ChatbotFlow />
        <MessagePanel />
      </div>
    </div>
  );
}

export default App;
