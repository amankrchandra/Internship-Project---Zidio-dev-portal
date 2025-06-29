import { useState } from "react";

const dummyConversations = [
  {
    id: 1,
    name: "Zidio HR",
    lastMessage: "Let’s schedule your interview!",
    messages: [
      { sender: "them", text: "Hi, we liked your profile!" },
      { sender: "you", text: "Thanks! Looking forward to it." },
      { sender: "them", text: "Let’s schedule your interview!" },
    ],
  },
  {
    id: 2,
    name: "InnovateX Recruiter",
    lastMessage: "Can you share your availability?",
    messages: [
      { sender: "them", text: "Hi, are you available next week?" },
      { sender: "you", text: "Yes, I’m free Thursday & Friday." },
    ],
  },
];

export default function Messages() {
  const [selectedId, setSelectedId] = useState(dummyConversations[0].id);
  const [input, setInput] = useState("");

  const selectedConversation = dummyConversations.find(
    (c) => c.id === selectedId
  );

  const handleSend = () => {
    if (input.trim()) {
      selectedConversation.messages.push({ sender: "you", text: input });
      setInput("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <div className="w-1/3 bg-white/10 backdrop-blur-lg p-4 border-r border-white/20 overflow-y-auto">
        <h2 className="text-xl font-semibold text-white mb-4">💬 Messages</h2>
        {dummyConversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setSelectedId(conv.id)}
            className={`cursor-pointer p-3 rounded-lg mb-2 transition ${
              selectedId === conv.id
                ? "bg-blue-500/20 text-white"
                : "hover:bg-white/10 text-gray-200"
            }`}
          >
            <p className="font-medium">{conv.name}</p>
            <p className="text-sm text-gray-400 truncate">
              {conv.lastMessage}
            </p>
          </div>
        ))}
      </div>

      {/* Main Chat */}
      <div className="w-2/3 flex flex-col justify-between bg-white/5 backdrop-blur-lg p-6 text-white">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1">
            {selectedConversation.name}
          </h3>
          <div className="space-y-3 h-[400px] overflow-y-auto pr-2">
            {selectedConversation.messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "you" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === "you"
                      ? "bg-blue-500/60 text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg bg-white/10 border border-white/20 text-white"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
