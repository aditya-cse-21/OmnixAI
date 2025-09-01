import OpenAI from 'openai';
import axios from 'axios';
import cloudinary from 'cloudinary';
import sql from '../config/db.js';

const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const writeArticle = async (req, res) => {
  try {
    const { topic, tone, length } = req.body;
    const userId = req.auth.userId;

    const prompt = `Write a ${tone} article about "${topic}" with approximately ${length} words. Make it engaging, informative, and well-structured.`;

    const completion = await AI.chat.completions.create({
      model: "gemini-1.5-flash",
      messages: [{ role: "user", content: prompt }],
    });

    const article = completion.choices[0].message.content;

    await sql`
      INSERT INTO user_creations (user_id, type, content, created_at)
      VALUES (${userId}, 'article', ${article}, NOW())
    `;

    res.json({ article });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate article' });
  }
};

export const generateBlogTitles = async (req, res) => {
  try {
    const { topic, count = 5 } = req.body;
    const userId = req.auth.userId;

    const prompt = `Generate ${count} catchy and SEO-friendly blog post titles about "${topic}". Make them engaging and click-worthy.`;

    const completion = await AI.chat.completions.create({
      model: "gemini-1.5-flash",
      messages: [{ role: "user", content: prompt }],
    });

    const titles = completion.choices[0].message.content.split('\n').filter(title => title.trim());

    await sql`
      INSERT INTO user_creations (user_id, type, content, created_at)
      VALUES (${userId}, 'blog_titles', ${JSON.stringify(titles)}, NOW())
    `;

    res.json({ titles });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate blog titles' });
  }
};

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.auth.userId;

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: { "x-api-key": process.env.CLIPDROP_API_KEY },
        responseType: "arraybuffer",
      }
    );

    const result = await cloudinary.v2.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "omnixai-images",
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to upload image' });
        }

        sql`
          INSERT INTO user_creations (user_id, type, content, created_at)
          VALUES (${userId}, 'image', ${result.secure_url}, NOW())
        `;

        res.json({ imageUrl: result.secure_url });
      }
    ).end(data);

  } catch (error) {
    res.status(500).json({ error: 'Failed to generate image' });
  }
};

export const removeBackground = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const userId = req.auth.userId;

    const formData = new FormData();
    formData.append('image_file', imageUrl);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: { "x-api-key": process.env.CLIPDROP_API_KEY },
        responseType: "arraybuffer",
      }
    );

    const result = await cloudinary.v2.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "omnixai-background-removed",
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to upload image' });
        }

        sql`
          INSERT INTO user_creations (user_id, type, content, created_at)
          VALUES (${userId}, 'background_removal', ${result.secure_url}, NOW())
        `;

        res.json({ imageUrl: result.secure_url });
      }
    ).end(data);

  } catch (error) {
    res.status(500).json({ error: 'Failed to remove background' });
  }
};

export const removeObject = async (req, res) => {
  try {
    const { imageUrl, objectDescription } = req.body;
    const userId = req.auth.userId;

    const formData = new FormData();
    formData.append('image_file', imageUrl);
    formData.append('prompt', objectDescription);

    const { data } = await axios.post(
      "https://clipdrop-api.co/cleanup/v1",
      formData,
      {
        headers: { "x-api-key": process.env.CLIPDROP_API_KEY },
        responseType: "arraybuffer",
      }
    );

    const result = await cloudinary.v2.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "omnixai-object-removed",
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to upload image' });
        }

        sql`
          INSERT INTO user_creations (user_id, type, content, created_at)
          VALUES (${userId}, 'object_removal', ${result.secure_url}, NOW())
        `;

        res.json({ imageUrl: result.secure_url });
      }
    ).end(data);

  } catch (error) {
    res.status(500).json({ error: 'Failed to remove object' });
  }
};

export const reviewResume = async (req, res) => {
  try {
    const { resumeText } = req.body;
    const userId = req.auth.userId;

    const prompt = `Please review this resume and provide detailed feedback on:
    1. Content and structure
    2. Grammar and spelling
    3. Professional presentation
    4. Suggestions for improvement
    5. Overall rating (1-10)
    
    Resume: ${resumeText}`;

    const completion = await AI.chat.completions.create({
      model: "gemini-1.5-flash",
      messages: [{ role: "user", content: prompt }],
    });

    const review = completion.choices[0].message.content;

    await sql`
      INSERT INTO user_creations (user_id, type, content, created_at)
      VALUES (${userId}, 'resume_review', ${review}, NOW())
    `;

    res.json({ review });
  } catch (error) {
    res.status(500).json({ error: 'Failed to review resume' });
  }
};