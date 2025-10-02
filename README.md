# Blogging Platform
A full-stack blogging platform built with **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. Users can create rich blog posts, view others' posts, and leave comments. The platform includes user authentication using JWT and a responsive design for all devices.

---

## Features
- Comment system for each post
- Responsive design for mobile and desktop
- RESTful API with Express.js
- MongoDB for data storage

---

## Tech Stack
|       Frontend        |       Backend       | Database |
|-----------------------|---------------------|----------|
| HTML, CSS, JavaScript | Node.js, Express.js | MongoDB  |

---

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Sarasu-Cod/blog-platform.git
   cd blog-platform

2. Install server dependencies
   cd server
   npm install

3. Set up environment variables
   Create a **.env** file in the **server** folder
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key

4. Start the server
   node app.js

5. Open the frontend
   Open **client/index.html** in your browser.

## Screenshots
<img width="1044" height="535" alt="Screenshot 2025-10-02 153635" src="https://github.com/user-attachments/assets/d481370c-1535-4d1f-94a7-56aa3f242090" />
<img width="1364" height="387" alt="Screenshot 2025-10-02 153729" src="https://github.com/user-attachments/assets/606d314e-e766-4015-a229-6ba0b7ac9904" />
<img width="1350" height="772" alt="Screenshot 2025-10-02 153838" src="https://github.com/user-attachments/assets/67cda5a4-bf7e-440b-b920-a73babb9ed86" />

## Folder Structure
blogging-platform/
├── client/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server/
│   ├── app.js
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── .env

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change

## License
This project is licensed under the MIT License.
