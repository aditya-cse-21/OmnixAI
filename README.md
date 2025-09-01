# OmnixAI - AI-SaaS Platform

OmnixAI is a comprehensive AI-powered platform that offers various creative tools including image generation, background removal, object removal, article writing, resume review, and more.

## 🔗 Live Preview

🌐 [Click here to view the live website](https://omnix-ai-tau.vercel.app/)

---

## 🚀 Features

- **AI Image Generation** - Create stunning images with AI
- **Background Removal** - Remove backgrounds from images instantly
- **Object Removal** - Remove unwanted objects from images
- **Article Writing** - Generate high-quality articles with AI
- **Resume Review** - Get AI-powered resume feedback
- **Blog Title Generation** - Create engaging blog titles
- **Community Features** - Connect with other creators

## 🛠️ Tech Stack

### Frontend (omnixai-client)
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

### Backend (omnixai-server)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Cloudinary** - Image storage
- **Multer** - File upload handling
- **JWT** - Authentication

## 📁 Project Structure

```
OmnixAI/
├── omnixai-client/          # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images and static files
│   │   └── ...
│   └── ...
├── omnixai-server/          # Node.js backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── routes/            # API routes
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (local or cloud)
- Cloudinary account
- Clerk Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/omnixai.git
   cd omnixai
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd omnixai-client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../omnixai-server
   npm install
   ```

4. **Environment Setup**

   Create `.env` files in both client and server directories:

   **omnixai-server/.env:**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   **omnixai-client/.env:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. **Run the Application**

   **Start the Backend:**
   ```bash
   cd omnixai-server
   npm start
   ```

   **Start the Frontend:**
   ```bash
   cd omnixai-client
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 📝 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### AI Tools
- `POST /api/ai/generate-image` - Generate AI images
- `POST /api/ai/remove-background` - Remove image background
- `POST /api/ai/remove-object` - Remove objects from images
- `POST /api/ai/write-article` - Generate articles
- `POST /api/ai/review-resume` - Review resumes
- `POST /api/ai/generate-blog-titles` - Generate blog titles

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Vercel)
1. The server is configured for Vercel deployment
2. Set environment variables in Vercel dashboard
3. Deploy using Vercel CLI or GitHub integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Gemini,Clickdrop API for AI capabilities
- Cloudinary for image processing
- React and Node.js communities

## 📞 Support

If you have any questions or need support, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ by Aditya**





