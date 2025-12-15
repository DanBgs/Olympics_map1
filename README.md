# Olympics_map1
 
## 📌 Overview
**Olympics_map1** is a web project that provides an **interactive map of the Olympic Games from 1896 to the present day**.  
Users can explore host cities, editions, and related information through a simple and intuitive interface.  
The project also includes basic authentication features (login and registration).
 
---
 
## 📂 Project Structure
- **`index.html`** → Main page displaying the interactive map  
- **`login.html` / `register.html`** → Pages for user authentication  
- **`import_olimpiadi.js`** → Script that imports and manages Olympic Games data on pocketbase  
- **`Olympics/`** → Directory containing Olympic-related data or resources  
- **`public/`** → Static assets (images, CSS, resources)  
- **`src/`** → Core source code of the application  
- **`package.json` / `package-lock.json`** → Node.js configuration and dependencies  
- **`.gitignore`** → Specifies files excluded from version control  
 
---
 
## ⚙️ Technologies
- **HTML (22.7%)** → Page structure  
- **CSS (5.7%)** → Styling and layout  
- **JavaScript (71.6%)** → Application logic, map rendering, and data handling  
 
---
 
## 🚀 Features
- Interactive map showing **all Olympic host cities**  
- Navigation through **editions from 1896 to today**  
- **User authentication** (login and registration)  
- Data management via pocketbase  
 
---
 
## ✅ Getting Started

Follow these steps to set up and run the project locally:

### **Prerequisites**
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PocketBase](https://pocketbase.io/docs/)

### **Setup and Run**
1. **Clone the repository**
   ```bash
   git clone https://github.com/DanBgs/Olympics_map1.git
   cd Olympics_map1
   ```
2. **Start Vite development server**
   ```bash
   npm run dev
   ```

3. **Set up PocketBase**
   - Download PocketBase from [official site](https://pocketbase.io/docs/).
   - Start the PocketBase server:
     ```bash
     ./pocketbase serve
     ```
     Default URL:
     ```
     http://127.0.0.1:8090
     ```
   - Configure collections

 4. Access the app at:
   ```
   http://localhost:5173
   ```
### **Notes**
- Ensure PocketBase is running before starting the frontend.
- If port `8050` or `5173` is busy, change it in the respective config.
- For production build:
   ```bash
   npm run build
