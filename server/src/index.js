const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const wordRoutes = require('./routes/words');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/words', wordRoutes);

// 测试路由
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Vocabulary Learning API" });
});

const PORT = process.env.PORT || 3000;

// 启动服务器
const startServer = async () => {
  try {
    await connectDB(); // 连接数据库
    console.log('Connected to database');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();