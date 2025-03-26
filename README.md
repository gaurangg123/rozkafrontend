# **Subscription-Based Shared Cab Service - RozKa** 🚖  

A **subscription-based ride-sharing platform** that provides **scheduled, fixed-route cab services** for daily commuters. Users can **subscribe to monthly plans, book rides, track cabs in real-time, and manage their profiles seamlessly**.

---

## **🚀 Features**
✅ **User Authentication** – Secure login/signup with email and Google authentication.  
✅ **Ride Booking** – Schedule daily, weekly, or monthly rides on predefined routes.  
✅ **Real-Time Tracking** – Track cabs via live GPS integration.  
✅ **Subscription Management** – Choose plans, manage renewals, and track ride history.  
✅ **Payment Integration** – Supports multiple payment gateways (Stripe, Razorpay, UPI).  
✅ **Admin Dashboard** – Manage users, rides, fleet, and earnings.  
✅ **Cross-Platform Support** – Fully responsive for **mobile and desktop**.  

---

## **📂 Project Structure**
```
📁 RozKa-Frontend/
 ├── 📂 app/                   # Next.js application pages
 │   ├── 📂 login/             # Login page
 │   ├── 📂 signup/            # Signup page
 │   ├── 📂 booking/           # Ride booking page
 │   ├── 📂 tracking/          # Live tracking page
 │   ├── 📂 profile/           # User profile page
 │   ├── 📂 feedback/          # Feedback submission page
 │   ├── 📂 subscription-plans/ # Subscription details page
 │   ├── 📂 admin/             # Admin dashboard (restricted)
 ├── 📂 components/            # Reusable UI components
 ├── 📂 styles/                # Global styles
 ├── 📜 package.json           # Dependencies & scripts
 ├── 📜 next.config.mjs        # Next.js configuration
 ├── 📜 .env.local             # Environment variables (local setup)
```

---

## **🛠️ Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/RozKa-Frontend.git
cd RozKa-Frontend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```
or  
```bash
yarn install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env.local` file and add your API keys:  
```bash
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_STRIPE_KEY=your-stripe-key
```

### **4️⃣ Run the Development Server**
```bash
npm run dev
```
The app will be live at **http://localhost:3000**.  

---

## **🚀 Deployment (Vercel)**
1. **Install Vercel CLI** (if not installed):  
   ```bash
   npm install -g vercel
   ```
2. **Deploy the project**:  
   ```bash
   vercel --prod
   ```
3. Visit the deployed site at **https://yourproject.vercel.app**.

---

## **📖 Tech Stack**
🔹 **Frontend** – React (Next.js), Tailwind CSS  
🔹 **Backend** – Node.js, Express (API integration)  
🔹 **Database** – PostgreSQL / Firebase  
🔹 **Authentication** – Google OAuth, JWT  
🔹 **Payments** – Stripe, Razorpay  
🔹 **Hosting** – Vercel  

---

## **🤝 Contributing**
1. **Fork** the repository.  
2. Create a **new branch**:  
   ```bash
   git checkout -b feature-new-update
   ```
3. **Commit your changes**:  
   ```bash
   git commit -m "Added a new feature"
   ```
4. **Push & create a PR**:  
   ```bash
   git push origin feature-new-update
   ```

This **README** file ensures **any developer or contributor can quickly understand and set up the project**. Let me know if you need any **changes or additions**! 🚀
