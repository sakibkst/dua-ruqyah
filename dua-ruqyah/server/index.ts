import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Get all categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            subcategories: true,
            duas: true,
          },
        },
      },
    })

    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      subcategories: category._count.subcategories,
      duaCount: category._count.duas,
    }))

    res.json(formattedCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    res.status(500).json({ error: "Failed to fetch categories" })
  }
})

// Get duas by category
app.get("/api/categories/:categoryId/duas", async (req, res) => {
  try {
    const { categoryId } = req.params
    const duas = await prisma.dua.findMany({
      where: {
        categoryId,
      },
      orderBy: {
        number: "asc",
      },
    })

    res.json(duas)
  } catch (error) {
    console.error("Error fetching duas:", error)
    res.status(500).json({ error: "Failed to fetch duas" })
  }
})

// Search duas
app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query
    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Search query is required" })
    }

    const duas = await prisma.dua.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { translation: { contains: query, mode: "insensitive" } },
          { transliteration: { contains: query, mode: "insensitive" } },
        ],
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    })

    res.json(duas)
  } catch (error) {
    console.error("Error searching duas:", error)
    res.status(500).json({ error: "Failed to search duas" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
