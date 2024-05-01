// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import nature from "../image/nature.jpg"
// import desk from "../image/desk.jpg"
// function Dashbord() {
//   const [messages, setMessages] = useState([]);
//  const [newMessage, setNewMessage] = useState("");
  
//   const sendMessage =  async() => {
//     const userId = localStorage.getItem("userId")
//      const userName = localStorage.getItem("userName")
//      const userEmail = localStorage.getItem("userEmail")

//      try {
//       const response =  await axios.post("http://localhost:3000/postMessage", {
//         userId,
//         userName,
//         userEmail,
//         message: newMessage,
//       });
//       console.log(response);
//       if (response.data && response.data.data) {
//         setMessages((prevMessages) => [...prevMessages, response.data.data]);
//         setNewMessage("");
//       } else {
//         console.error("Unexpected response format:", response);
//       }
     
//     }
//     catch(error){
//       console.error("Error :",error)
//     }
//   }


//   const getMessages = async () =>{
//     try{
//       const response = await axios.get("http://localhost:3000/getMessages")
//       setMessages(response.data.messages || [])
//     }catch (error){
//       console.log("Error fetching message",error)
//     }
//   }

//   useEffect(()=>{
//     getMessages()
//   },[])

//   const handlelogout = ()=>{
//     localStorage.removeItem("token")
//     window.location.reload()
//   }

//   // if (newMessage.trim() !== "") {
//   //   setMessages([...messages, newMessage]);
//   //   setNewMessage("");
//   // }

  
//   // const handelKeyPress = (e) => {
//   //   if (e.key === "enter") {
//   //     e.preventDefault();
//   //   }
//   // };
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <div>
//     <div className="bac"> 
// <button  data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//    <span class="sr-only" >Open sidebar</span>
//    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//    </svg>
// </button>

// <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "  aria-label="Sidebar"style={{width:"200px "}}>  
// <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" style={{width:"200px" ,backgroundColor:"lightblue"}}>
//       <ul class="space-y-2 font-medium" >
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
//                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
//                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
//                </svg>
//                <span class="ms-3">Dashboard</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
//                   <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
//                </svg>
//                <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
//                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
//                </svg>
//                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
//                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
//                   <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
//                </svg>
//                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
//                   <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
//                </svg>
//                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
//             </a>
//          </li>
//          <li>
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
//                </svg>
//                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
//             </a>
//          </li>
//          <li><Link to="/sign">
//             <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
//                   <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
//                   <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
//                </svg>
               
//                <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
               
//             </a>
//             </Link>
//          </li>
//       </ul>
//    </div>
    
// </aside>
// </div> 
// <div>

// <div class="container mx-auto shadow-lg rounded-lg" style={{marginLeft:"250px" ,height:"300px",width:"1050px"}}>
       
//     <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
//       <div class="font-semibold text-2xl">Group Chat</div>
//       <div class="w-1/2">
//         <input
//           type="text"
//           name=""
//           id=""
//           placeholder="search IRL"
//           class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
//         />
//       </div>
//       <div
//         class="h-12 w-13 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
//       >
//         SUNITA
//       </div>
//     </div>
   
//     <div class="flex flex-row justify-between bg-white">
     
//       <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
      
//         <div class="border-b-2 py-4 px-2">
//           <input
//             type="text"
//             placeholder="search chatting"
//             class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
//           />
//         </div>
       
//         <div
//           class="flex flex-row py-4 px-2 justify-center items-center border-b-2"
//         >
//           <div class="w-1/4">
//             <img
//               src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">AJAY</div>
//             <span class="text-gray-500">Pick me at 9:00 Am</span>
//           </div>
//         </div>
//         <div class="flex flex-row py-4 px-2 items-center border-b-2">
//           <div class="w-1/4">
//             <img
//               src={nature}
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">Everest Trip 2021</div>
//             <span class="text-gray-500">Hi arjun, Welcome</span>
//           </div>
//         </div>
//         <div
//           class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
//         >
//           <div class="w-1/4">
//             <img
//               src={desk}
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">MERN Stack</div>
//             <span class="text-gray-500">neha : Thanks Everyone</span>
//           </div>
//         </div>
//         <div class="flex flex-row py-4 px-2 items-center border-b-2">
//           <div class="w-1/4">
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">NEHA </div>
//             <span class="text-gray-500">Evan : some one can fix this</span>
//           </div>
//         </div>
//         {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
//           <div class="w-1/4">
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">Javascript Indonesia</div>
//             <span class="text-gray-500">Evan : some one can fix this</span>
//           </div>
//         </div> */}

//         {/* <div class="flex flex-row py-4 px-2 items-center border-b-2">
//           <div class="w-1/4">
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-12 w-12 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="w-full">
//             <div class="text-lg font-semibold">Javascript Indonesia</div>
//             <span class="text-gray-500">Evan : some one can fix this</span>
//           </div>
//         </div> */}
        
//       </div>
     
//       <div class="w-full px-5 flex flex-col justify-between">
//         <div class="flex flex-col mt-5">
//           <div class="flex justify-end mb-4">
//             <div
//               class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
//             >
//               Welcome to group everyone !
//             </div>
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-8 w-8 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="flex justify-start mb-4">
//             <img
//               src={nature}
//               class="object-cover h-8 w-8 rounded-full"
//               alt=""
//             />
//             <div
//               class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
//               at praesentium, aut ullam delectus odio error sit rem. Architecto
//               nulla doloribus laborum illo rem enim dolor odio saepe,
//               consequatur quas?
//             </div>
//           </div>
//           <div class="flex justify-end mb-4">
//             <div>
//               <div
//                 class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
//               >
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Magnam, repudiandae.
//               </div>

//               <div
//                 class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Debitis, reiciendis!
//               </div>
//             </div>
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-8 w-8 rounded-full"
//               alt=""
//             />
//           </div>
//           <div class="flex justify-start mb-4">
//             <img
//               src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
//               class="object-cover h-8 w-8 rounded-full"
//               alt=""
//             />
//             <div
//               class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
//             >
//               hello
//             </div>
//           </div>
//         </div>
//         <div class="py-5">
//           <input
//             class="w-full bg-gray-300 py-5 px-3 rounded-xl"
//             type="text"
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={handleKeyPress}
//             placeholder="type your message here..."
            
//           />
//           <button
                  
//                   style={{ height: "40px", backgroundColor: "black",marginTop:"30px" }}
//                   type="submit"
//                   onClick={sendMessage}
//                   className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   SEND
//                 </button>
//         </div>
//       </div>
      
    
          
//         </div> 
//       </div>
//     </div>
// </div>




     
     
    


     
    
//   );
// }

// export default Dashbord;


import React, { useState, useEffect } from "react";
import axios from "axios";
import desk from "../image/desk.jpg"
import nature from "../image/nature.jpg"
// import download from"../image/download .jpg"
import { Link } from "react-router-dom";
const DashBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessagesData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/sendMessage");
      setMessages(response.data.messages || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchMessagesData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const sendMessage = () => {
    console.log("sendMessage function called");
    if (newMessage.trim() === "") return;

    const newMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(newMessages);
    setNewMessage("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default behavior (e.g., submitting a form)
      sendMessage();
    }
  };
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Group Chat
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
              </a>
            </li>
            <li>
              <button
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleLogout}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <Link to="/sign">
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span></Link>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div> */}

        <div className="container mx-auto shadow-lg rounded-lg">
          <div className="flex flex-row justify-between bg-white">
            {/* <!-- chat list --> */}
            <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
              {/* <!-- search compt --> */}
              <div className="border-b-2 py-4 px-2">
                <input
                  type="text"
                  placeholder="search chatting"
                  className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                />
              </div>
              <div className="flex flex-row py-4 px-2 items-center border-b-2">
                <div className="w-1/4">
                  <img
                     src={nature}
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Ajay</div>
                  <span className="text-gray-500">
                    Evan : some one can fix this
                  </span>
                </div>
              </div>
              {/* <!-- end user list --> */}
            </div>
            {/* <!-- end chat list -->
                <!-- message --> */}
            <div className="w-full px-5 flex flex-col justify-between">
              <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                  <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                      >
                        {message.text}
                      </div>
                    ))}
                  </div>
                  <img
                    src={desk}
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-start mb-4">
                <img
  src={nature}
  className="object-cover h-8 w-8 rounded-full"
  alt=""
/>

                  <img
                    src={nature}
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat at praesentium, aut ullam delectus odio error sit
                    rem. Architecto nulla doloribus laborum illo rem enim dolor
                    odio saepe, consequatur quas?
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  {/* <div>
                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Magnam, repudiandae.
                    </div>
                  </div> */}
                  <img
                    src={nature }
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-start mb-4">
                  <img
                    src={desk} 
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                    happy holiday guys!
                  </div>
                </div>
              </div>
              <div className="py-5">
                <input
                  className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="type your message here..."
                />
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={sendMessage}
                >
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO3UzypFURTH8Y90BwZKKQM8gDKRl2BoYsyMmRE3KblznoIXkIxkZGJigiFFYSYKUVxHp/bN6Xb+3XvPRPnWGuy1d7/fOWvttfnnlyns4AaHKmIMqzhHlIjbXkQHMI8DfLYJt2K7U9F+zGAXrymC3/hIrONylWISW6GuUUa8Yz+YxOvLItFRrOAsR7QV91jCWyIX9ySVWRyhWUI4wimmcZfINUPjU3kqKRyFXgwFk2Q+/sBMNksIN1FHXzBp318oqn8jR/wFc+FcPWU/7sNgkUGWyXW4Ua1efaWc2SsjnmZygpGQn8Bzxh/Gc9IRi1hHLayHcZUh/hCGsWtqOM7pT/zI9cRGwe0q/TRksZwjfqEiGhkGa1UZpJnEgzeuYhpln4Ze2MRjN3f/7/EDz12xqRgiakMAAAAASUVORK5CYII=" />
                </button>
              </div>
            </div>
            {/* <!-- end message --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
