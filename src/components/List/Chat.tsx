import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 2, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 3, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 4, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 5, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 6, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 7, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 8, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 9, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 10, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 11, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 12, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 13, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 14, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 15, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 16, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 17, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 18, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 19, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 20, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 21, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 22, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 23, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 24, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 25, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 26, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 27, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 28, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 29, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 30, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 31, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 32, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 33, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 34, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 35, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 36, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 37, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 38, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 39, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 40, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 41, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 42, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 43, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 44, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 45, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 46, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 47, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 48, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 49, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 50, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 51, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 52, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 53, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 54, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 55, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 56, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 57, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 58, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 59, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 60, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 61, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 62, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 63, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 64, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 65, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 66, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 67, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 68, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 69, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 70, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 71, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 72, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 73, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 74, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 75, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 76, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 77, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 78, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 79, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 80, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 81, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 82, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 83, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 84, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 85, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 86, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 87, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 88, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 89, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 90, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 91, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 92, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 93, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 94, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 95, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" },
    { id: 96, text: "Olá! Como posso ajudar?", sender: "bot" },
    { id: 97, text: "Quero saber mais sobre React.", sender: "user" },
    { id: 98, text: "React é uma biblioteca JavaScript para criar interfaces de usuário!", sender: "bot" },
    { id: 99, text: "Interessante! Como eu começo?", sender: "user" },
    { id: 100, text: "Você pode começar com a documentação oficial em react.dev.", sender: "bot" }
]);
  const [inputValue, setInputValue] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const messageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: `Você disse: "${inputValue}"`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const scrollToMessage = (messageId: number) => {
    const messageElement = messageRefs.current.get(messageId);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat</div>

      <div ref={chatContainerRef} className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            ref={(el) => {
              if (el) messageRefs.current.set(msg.id, el);
            }}
            className={`chat-message ${
              msg.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Digite sua mensagem..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className="chat-send-button" onClick={handleSendMessage}>
          Enviar
        </button>
      </div>

      <div className="chat-controls">
        <button onClick={() => scrollToMessage(10)}>Ir para mensagem #10</button>
        <button onClick={() => scrollToMessage(33)}>Ir para mensagem #33</button>
        <button onClick={() => scrollToMessage(55)}>Ir para mensagem #55</button>
      </div>
    </div>
  );
};

export default Chat;
