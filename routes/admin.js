const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { signupSchema, signinSchema } = require("../zodvalidaton/admin");
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const AdminRouter = Router();
AdminRouter.post("/signup", async (req, res) => {
  try {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0].message
      });
    }

    const { email, password, firstName, lastName } = parsed.data;

    const existing = await adminModel.findOne({ email });
    if (existing) {
      return res.status(409).json({
        message: "Admin already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    return res.status(201).json({
      message: "Admin created successfully"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error creating admin"
    });
  }
});

AdminRouter.post("/signin", async (req, res) => {
  try {
    const parsed = signinSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0].message
      });
    }

    const { email, password } = parsed.data;

    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { adminId: admin._id },
      JWT_ADMIN_PASSWORD,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Admin signed in successfully",
      token
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error signing in"
    });
  }
});


// ================== CREATE COURSE ==================
AdminRouter.post("/course", adminMiddleware, async (req, res) => {
  try {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
      title,
      description,
      imageUrl,
      price,
      creatorId: adminId
    });

    return res.status(201).json({
      message: "Course created",
      courseId: course._id
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Course creation failed"
    });
  }
});


// ================== UPDATE COURSE ==================
AdminRouter.put("/course", adminMiddleware, async (req, res) => {
  try {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

    await courseModel.updateOne(
      { _id: courseId, creatorId: adminId },
      { title, description, imageUrl, price }
    );

    return res.json({
      message: "Course updated",
      courseId
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Course update failed"
    });
  }
});


// ================== GET ALL ADMIN COURSES ==================
AdminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  try {
    const adminId = req.userId;

    const courses = await courseModel.find({
      creatorId: adminId
    });

    return res.json({
      message: "Courses fetched",
      courses
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Fetch failed"
    });
  }
});


module.exports = {
  adminRouter: AdminRouter
};
