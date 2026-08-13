import { useState } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    setMessage("");

    // Depois vamos chamar o backend aqui
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.role}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <div className="mt-auto w-full flex justify-center">
        <input
          className="bg-white  w-[90%] h-50 items-end"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Digite uma mensagem..."
        />

        <button className="bg-white" onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
