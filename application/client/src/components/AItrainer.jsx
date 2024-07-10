import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from './Sidebar';
import { FiSend } from 'react-icons/fi';

const genAI = new GoogleGenerativeAI('AIzaSyCFfpdz5bAURoNrU66et1UT-c4KSfBiEQc');

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      const aiResponse = result.response.text();
      const aiMessage = { text: aiResponse, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setError('Failed to get AI response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputRef.current?.focus();
  }, [messages]);

  const MessageBubble = ({ message }) => (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3xl ${message.sender === 'user' ? 'bg-maroon-100' : 'bg-gray-100'} rounded-lg p-3 shadow`}>
        <p className={`${message.sender === 'user' ? 'text-maroon-800' : 'text-gray-800'}`}>{message.text}</p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className=" aitrainerdiv flex-1 flex flex-col">
        <div className="bg-maroon-600 p-4 shadow">
          <h1 className="text-xl font-semibold text-white">AI Health Assistant</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-maroon-600"></div>
            </div>
          )}
          {error && (
            <div className="text-maroon-600 text-center bg-maroon-100 p-3 rounded">{error}</div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="border-t bg-gray border-gray-200 p-4">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon-500"
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className={`bg-maroon-600 text-white rounded px-4 py-2 transition duration-300 flex items-center justify-center ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-maroon-700'
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              ) : (
                <FiSend />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;