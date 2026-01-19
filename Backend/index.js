require("dotenv").config()
const express = require("express");
const app = express();
const bcrypt = require("bcrypt")
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.sxgnyhx.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const database = client.db('nextApp');
        const usersCollection = database.collection('user');
        const AllProduct = database.collection('product');
        app.post('/all_product', async(req, res) => {
            const productData = req.body;
            const result = await AllProduct.insertOne(productData)
            res.send(result)
        })
        app.get("/product-all", async(req, res) => {
            const result = await AllProduct.find().toArray()
            res.send(result)
        })
        app.get("/single-product/:id", async(req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await AllProduct.findOne(query)
            res.send(result)
        })

        app.post("/all_user", async (req, res) => {
            try {
                const userData = req.body

                // 🔐 hash password
                const hashedPassword = await bcrypt.hash(userData.password, 10)
                userData.password = hashedPassword

                const result = await usersCollection.insertOne(userData)
                res.send(result)
            } catch (error) {
                console.error('Error creating user:', error)
                res.status(500).json({ error: 'Failed to create user' })
            }
        })

        app.post("/login", async (req, res) => {
            try {
                const { email, password } = req.body

                const user = await usersCollection.findOne({ email })
                if (!user) return res.status(401).send(null)

                // 🔐 secure password comparison using bcrypt
                const isPasswordValid = await bcrypt.compare(password, user.password)
                if (!isPasswordValid) return res.status(401).send(null)

                const { password: _, ...safeUser } = user
                res.send(safeUser)
            } catch (error) {
                console.error('Error during login:', error)
                res.status(500).json({ error: 'Login failed' })
            }
        })

        app.get('/', (req, res) => {
            res.send("hello world")
        });

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Database connection error:', error)
    } finally {
        // Ensure that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})